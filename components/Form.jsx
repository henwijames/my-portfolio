"use client";

import { ClipLoader } from "react-spinners";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessagesSquare } from "lucide-react";
import { useState } from "react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();

    setErrors({
      name: "",
      email: "",
      message: "",
    });

    const data = {
      name: String(e.target.name.value),
      email: String(e.target.email.value),
      message: String(e.target.message.value),
    };

    let hasErrors = false;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!data.name) {
      newErrors.name = "Name is required";
      hasErrors = true;
    }

    if (!data.email) {
      newErrors.email = "Email is required";
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
      hasErrors = true;
    }

    if (!data.message) {
      newErrors.message = "Message is required";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Message sent successfully!");
        // Reset form fields
        e.target.reset();
      } else {
        // Handle server error response
        const errorData = await response.json().catch(() => null);
        if (errorData && errorData.errors) {
          setErrors(errorData.errors);
        } else {
          console.log("An error occurred while sending the message.");
        }
      }
    } catch (error) {
      console.log("Failed to send message:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      {/* Input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      {errors.name && (
        <div className="error-message text-red-500 text-sm">{errors.name}</div>
      )}
      {/* Input */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {errors.email && (
        <div className="error-message text-red-500 text-sm">{errors.email}</div>
      )}
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea placeholder="Type your message here" id="message" />
        <MessagesSquare className="absolute top-4 right-6" size={20} />
      </div>
      {errors.message && (
        <div className="error-message text-red-500 text-sm">
          {errors.message}
        </div>
      )}
      <Button
        type="submit"
        disabled={loading}
        className="flex items-center gap-x-1 max-w-[166px] dark:bg-secondary dark:text-white
                disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <ClipLoader color={"text-black dark:text-white"} size={24} />
        ) : (
          <div className="flex justify-center items-center gap-2">
            Let's Talk
            <ArrowRightIcon size={20} />
          </div>
        )}
      </Button>
    </form>
  );
};

export default Form;
