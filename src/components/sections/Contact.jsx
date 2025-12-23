import React, { useState } from 'react';
import Button from '../ui/Button';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "b548b91c-fb62-456a-9fc1-9105da768a6a");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.error("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error", error);
            setResult("Something went wrong!");
        }
    };

    return (
        <section id="contact" className="bg-white text-black py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                            Get In<br />Touch
                        </h2>
                        <p className="font-mono text-lg mb-8 max-w-md">
                            Interested in our threads or fabrics? Contact us for a quote or to discuss your manufacturing needs.
                        </p>

                        <div className="space-y-6 font-mono">
                            <div>
                                <h3 className="font-bold uppercase mb-1">Email</h3>
                                <p className="text-xl">abdulsamad@thebleu.com.pk</p>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase mb-1">Phone</h3>
                                <p className="text-xl">(021)37229454</p>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase mb-1">Address</h3>
                                <p className="text-xl">Head Office: D-22/1, Block-17, Gulshan-e-Iqbal, Karachi-75300, Pakistan</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black p-8 md:p-12 text-white relative">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600 -mt-4 -mr-4 hidden md:block"></div>

                        <form onSubmit={onSubmit} className="relative z-10 space-y-6">
                            <div>
                                <label className="block font-mono text-xs uppercase tracking-widest mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-gray-900 border-2 border-gray-700 p-4 text-white focus:border-blue-600 focus:outline-none transition-colors"
                                    placeholder="ENTER YOUR NAME"
                                />
                            </div>
                            <div>
                                <label className="block font-mono text-xs uppercase tracking-widest mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-gray-900 border-2 border-gray-700 p-4 text-white focus:border-blue-600 focus:outline-none transition-colors"
                                    placeholder="ENTER YOUR EMAIL"
                                />
                            </div>
                            <div>
                                <label className="block font-mono text-xs uppercase tracking-widest mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full bg-gray-900 border-2 border-gray-700 p-4 text-white focus:border-blue-600 focus:outline-none transition-colors"
                                    placeholder="HOW CAN WE HELP?"
                                ></textarea>
                            </div>
                            <Button type="submit" variant="primary" className="w-full bg-blue-600 border-blue-600 hover:bg-white hover:text-blue-600 hover:border-white">
                                Send Message
                            </Button>

                            {result && (
                                <div className="text-center font-mono text-sm mt-4 text-blue-500">
                                    {result}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
