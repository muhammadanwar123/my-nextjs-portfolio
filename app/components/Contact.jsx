import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "2f84c626-9d5b-44af-bf43-ccc97c8af989");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className="w-full px-6 py-[12%] scroll-mt-20 bg-[url('/footer-bg-color.png')] 
              bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none dark:text-white "
        >
            <h4 className="text-center text-lg font-Ovo text-gray-800 dark:text-white mb-2">
                Contact with me
            </h4>
            <h2 className="text-center text-4xl font-Ovo text-gray-900 dark:text-white">
                Get in touch
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-4 mb-10 font-Ovo text-gray-600 dark:text-white">
                I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 mt-4 mb-8">

                    <input type="text" placeholder="Enter your name" required name="name"
                        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md 
                         bg-white focus:ring-2 focus:ring-blue-500
                        dark:bg-darkHover/30 dark:border-white/90"/>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        name="email"
                        className="flex-1 p-3 outline-none border-[0.5px] border-gray-300 rounded-md
                         w-full bg-white focus:ring-2 focus:ring-blue-500
                          dark:bg-darkHover/30 dark:border-white/90" />
                </div>

                <textarea
                   rows={6}
                   placeholder="Enter your message"
                  required
                 name="message"
                  className="w-full p-4 outline-none border-[0.5px] border-gray-400
                  rounded-md bg-white mb-6 focus:ring-2 focus:ring-blue-500
                    dark:bg-darkHover/30 dark:border-white/90 text-black dark:text-white"
                />


                <button
                    type="submit"
                    className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80
                     text-white rounded-full mx-auto hover:bg-black transition duration-500
                     dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
                >
                    Submit now
                    <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </button>

                <p className="text-center mt-4 text-gray-500">{result}</p>
            </form>
        </div>
    );
};

export default Contact;
