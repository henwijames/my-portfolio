"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessagesSquare } from "lucide-react";

const Form = () => {
    return (
        <form className="flex flex-col gap-y-4">
            {/* Input */}
            <div className="relative flex items-center">
                <Input type="name" id="name" placeholder="Name" />
                <User className="absolute right-6" size={20} />
            </div>
            {/* Input */}
            <div className="relative flex items-center">
                <Input type="email" id="email" placeholder="Email" />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            {/* textarea */}
            <div className="relative flex items-center">
                <Textarea placeholder="Type your message here" />
                <MessagesSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button className="flex items-center gap-x-1 max-w-[166px] dark:bg-secondary dark:text-white">
                Let's Talk
                <ArrowRightIcon size={20} />
            </Button>
        </form>
    );
};

export default Form;
