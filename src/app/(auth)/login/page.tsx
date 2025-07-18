"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { redirect, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { toast } from "sonner";

export default function SignupFormDemo() {
  // Checks if user is already Login
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    redirect("/");
  }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (formData.password.length > 6) {
    //   toast.warning("Password must contain minimum 6 characters.");
    //   return;
    // }
    try {
      // Register user
      setLoading(true);
      // Log the user in
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        // callbackUrl: "/",
        redirect: false,
      });
      if (result?.error) {
        // Show error toast
        toast.error(result.error); // e.g. "Invalid password"
      } else {
        // Redirect or success message
        toast.success("Login successful!");
        redirect("/");
      }

      if (result?.ok && result?.url) {
        router.push(result.url);
      }
    } catch (error) {
      console.error("login failed", error);
    }
    setLoading(false);
  };
  const router = useRouter();

  return (
    <div className="py-24 px-6 md:px-0 pt-30 min-h-[100vh]  relative bg-[url('/login-bg.jpg')] bg-cover bg-top-right font-openSans bg-transparent">
      <div className="absolute top-0 h-40 md:w-full bg-gradient-to-b from-black/30  to-transparent z-[1]"></div>
      <div
        style={{ boxShadow: "0 0px 6px 2px rgba(0, 0, 0, 0.1)" }}
        className="shadow-input m-auto rounded-md  w-full max-w-md  bg-white z-40 p-4 md:rounded-2xl md:p-8 dark:bg-black"
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
          Login now to get packages in affordable price.
        </p>

        <form className="my-8 text-black" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"></div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address*</Label>
            <Input
              id="email"
              required
              placeholder="projectmayhem@fc.com"
              type="email"
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
              required
              placeholder="••••••••"
              type="password"
              className="text-black"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </LabelInputContainer>
          <p className="text-xs mb-4 text-center">
            New user?{" "}
            <span
              className="underline text-sm cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </span>
          </p>

          <Button
            disabled={loading}
            className="w-full cursor-pointer"
            type="submit"
          >
            {loading ? "Logging in..." : " Login ->"}
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
