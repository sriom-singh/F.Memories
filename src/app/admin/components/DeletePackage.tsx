import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { DeleteIcon } from "lucide-react";
import { deletePackages } from "@/actions/package";
import { toast } from "sonner";
const DeletePackage = ({ id }: { id: number }) => {
  async function handleDelete() {
    try {
      const res = await deletePackages(id);
      if (res === "Error") {
        toast.error("Something went wrong.", {
          description: "Please refresh the page.",
        });
      }
      if (res === "Not deletable") {
        toast.error("Package can't be deleted.", {
          description: "Some users have relation with this package.",
        });
      }
      toast.success("Pacakge deleted.", {
        description: "Please refresh the page to see changes.",
      });
    } catch (error) {
      toast.error("Server error");
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size={"sm"}
          className="flex items-center w-full text-xs"
          variant="destructive"
        >
          <DeleteIcon size={16} /> Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-black">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            package and remove your data from the servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeletePackage;
