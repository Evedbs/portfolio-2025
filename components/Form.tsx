"use client";
import React, { useRef, useState } from "react";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { cn } from "@/utils/cn";
import emailjs from "@emailjs/browser";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const form = useRef(null);

  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      fields.firstName === "" ||
      fields.lastName === "" ||
      fields.email === "" ||
      fields.message === ""
    ) {
      return;
    }

    emailjs
      .sendForm("service_9l3n2ub", "template_e422sbt", form.current, {
        publicKey: "bW68I-BVKwe7jivh5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setFields({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <div className="border-[#262b4a] border  max-w-md w-full mx-auto rounded-2xl  p-4 md:p-8 shadow-input bg-[#090d24]">
      <h2 className="font-bold text-xl bg-[#090d24] dark:text-neutral-200">
        Send me a message
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Let’s turn your ideas into reality, reach out and let’s build something
        great together!
      </p>

      <form className="my-8" onSubmit={handleSubmit} ref={form}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Joe"
              type="text"
              value={fields.firstName}
              onChange={(e) =>
                setFields({ ...fields, firstName: e.target.value })
              }
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Doe"
              name="lastName"
              type="text"
              value={fields.lastName}
              onChange={(e) =>
                setFields({ ...fields, lastName: e.target.value })
              }
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="johndoe@gmail.com"
            type="email"
            value={fields.email}
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Message</Label>
          <Input
            id="message"
            placeholder="message"
            type="text"
            name="message"
            value={fields.message}
            onChange={(e) => setFields({ ...fields, message: e.target.value })}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative border-[#262b4a] group/btn bg-black-100  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_[#25283b])_inset]"
          type="submit"
          onClick={sendEmail}
        >
          Submit &rarr;
          <BottomGradient />
        </button>
        <div className="bg-gradient-to-r from-transparent via-[#b1a1ff] to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#b1a1ff] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#b1a1ff] to-transparent" />
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
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
