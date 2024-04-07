import { MailIcon, HomeIcon } from "lucide-react";

const Contact = () => {
    return (
        <section>
            <div className="container mx-auto">
                {/* text and illustration */}
                <div>
                    {/* text */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                            <span className="w-[30px] h-[2px] bg-primary"></span>
                            Say Hello 👋
                        </div>
                        <h1 className="h1 max-w-md mb-8">
                            Let's Work Together.
                        </h1>
                        <p className="subtitle max-w-[400px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Praesent ullamcorper id quam nec congue.
                            Aliquam quis sagittis orci, sed dapibus orci. Proin
                            posuere fringilla metus, condimentum varius metus
                            fringilla nec.
                        </p>
                    </div>
                </div>
                {/* info text and form */}
                <div>info text and form</div>
            </div>
        </section>
    );
};

export default Contact;
