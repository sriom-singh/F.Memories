"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { toast } from "sonner";

export default function SignupFormDemo() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    redirect("/");
  }
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const newUser = {
      name: `${formData.firstname} ${formData.lastname}`,
      email: formData.email,
      password: formData.password,
      phone: Number.parseInt(formData.phone),
    };

    try {
      // Register user
      await axios.post("/api/register", newUser);
      // Log the user in
      const result = await signIn("credentials", {
        redirect: false,
        email: newUser.email,
        password: newUser.password,
        name: newUser.name,
      });
      if (result?.error) {
        // Show error toast
        toast.error(result.error); // e.g. "Invalid password"
      } else {
        // Redirect or success message
        toast.success("Signup successful!");
        redirect("/");
      }
      if (result?.ok && result?.url) {
        router.push(result.url);
      } else {
        console.error("Login failed", result?.error);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || "Something went wrong";

        toast.error(message); // e.g. "User already exists" or "Email and password are required"
      }
    }
    setLoading(false);
  };

  return (
    <div className="py-24 w-full px-6 md:px-0  min-h-[100vh] relative bg-[url('/login-bg.jpg')] bg-cover bg-center font-openSans bg-transparent">
      <div className="absolute top-0 h-40 md:w-full bg-gradient-to-b from-black/30  to-transparent z-[1]"></div>
      <div
        style={{ boxShadow: "0 0px 6px 2px rgba(0, 0, 0, 0.1)" }}
        className="shadow-input m-auto   w-full max-w-md rounded-md bg-white z-40 p-4 md:rounded-2xl md:p-8 dark:bg-black"
      >
        <Image
          width={100}
          height={100}
          alt="favivon"
          src={"/apple-touch-icon.png"}
          className="w-16 mx-auto pb-2"
        />
        <h2 className="text-xl text-center font-bold text-neutral-800 dark:text-neutral-200">
          Welcome to Framing Memories
        </h2>
        <p className="mt-2 max-w-sm text-center text-sm text-neutral-600 dark:text-neutral-300">
          Register now and get packages in affordable price.
        </p>

        <form className="my-8 text-black" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name*</Label>
              <Input
                id="firstname"
                className="text-black"
                placeholder="Tyler"
                required
                value={formData.firstname}
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })
                }
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name*</Label>
              <Input
                id="lastname"
                className="text-black"
                placeholder="Durden"
                required
                type="text"
                value={formData.lastname}
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address*</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              required
              className="text-black"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password*</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              required
              className="text-black"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="123 456 789"
              type="number"
              className="text-black"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </LabelInputContainer>
          <p className="text-xs mb-4 text-center">
            Already a user?{" "}
            <span
              className="underline text-sm cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>
          <Button
            disabled={loading}
            className="w-full cursor-pointer"
            type="submit"
          >
            {loading ? "Signing up..." : "Sign Up ->"}
            <BottomGradient />
          </Button>
        </form>
        <div className=" mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
