import { MailIcon, HomeIcon } from "lucide-react";
//Components
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text and illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Feel free to reach out to me for any inquiries, collaborations, or
              just to say hello! Whether you have a project in mind, want to
              discuss a potential partnership, or simply want to connect, I'm
              always eager to hear from you. Drop me a message using the form
              below or directly through my email, and I'll get back to you as
              soon as possible. Looking forward to hearing from you!
            </p>
          </div>
          {/* illustration */}
          <div className="hidden w-full xl:flex bg-contact_illustration_bg bg-contain bg-no-repeat bg-top"></div>
        </div>
        {/* info text and form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-12 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>henryribano27@gmail.com</div>
            </div>
            {/* home */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Laguile, Taal, Batangas, Philippines.</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
