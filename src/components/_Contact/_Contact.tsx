import { FormEvent, FormEventHandler } from "react";

function _Contact({
    contactRef,
}: {
    contactRef: React.RefObject<HTMLDivElement>;
}) {
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(
            (
                e.currentTarget.elements.namedItem(
                    "formEmail"
                ) as HTMLInputElement
            ).value
        );
        console.log("Email sent!");
    };
    return (
        <section className="relative flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-xl py-20">
            {/* Contact Scroll Target */}
            <div
                ref={contactRef}
                className="absolute -top-14 h-14 w-full"
            ></div>
            <div className="w-full max-w-[1144px]">
                <h2 className="text-5xl font-roboto-slab mb-14">Contact</h2>
                <p className="text-3xl mb-4">Send me an Email</p>
                <form
                    className="flex flex-col p-4 bg-whtie bg-opacity-10 rounded-lg
                        border-2 border-white border-opacity-30"
                    onSubmit={sendEmail}
                >
                    <label htmlFor="formName">Name</label>
                    <input
                        className="p-1 text-neutral-800 mb-4"
                        type="text"
                        id="formName"
                        name="name"
                        placeholder="Your Name"
                    />
                    <label htmlFor="formEmail">Email</label>
                    <input
                        className="p-1 text-neutral-800 mb-4"
                        type="email"
                        id="formEmail"
                        name="email"
                        placeholder="Your Email"
                    />
                    <label htmlFor="formSubject">Subject</label>
                    <input
                        className="p-1 text-neutral-800 mb-4"
                        type="text"
                        id="formSubject"
                        name="subject"
                        placeholder="Why you're contacting me..."
                    />
                    <label htmlFor="formMessage">Message</label>
                    <textarea
                        className="p-1 text-neutral-800 mb-4"
                        name="message"
                        id="formMessage"
                        placeholder="Write something..."
                    />
                    <input
                        className="cursor-pointer text-xl p-2 bg-white bg-opacity-10 w-fit mx-auto rounded-lg
                            border-2 border-white border-opacity-30
                            hover:bg-opacity-30 hover:border-opacity-60"
                        type="submit"
                        value="Send"
                    />
                </form>
            </div>
        </section>
    );
}
export default _Contact;
