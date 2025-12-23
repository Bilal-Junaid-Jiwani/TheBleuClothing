import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="bg-white text-black py-20 relative overflow-hidden">
            {/* Marquee */}
            <div className="absolute top-0 left-0 w-full bg-blue-600 text-white py-2 overflow-hidden whitespace-nowrap rotate-1 scale-105 z-10 border-y-2 border-black">
                <div className="animate-marquee inline-block font-black text-xl uppercase tracking-widest">
                    Quality • Reliability • Innovation • Global Standards • Sustainable Practices • Quality • Reliability • Innovation • Global Standards • Sustainable Practices •
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                            Who<br />We Are
                        </h2>
                        <div className="w-24 h-2 bg-black mb-8"></div>
                    </div>

                    <div className="font-mono text-lg leading-relaxed">
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-blue-600">THREADS AND FABRICS SUPPLIER.</h3>
                        <p className="mb-6">
                            The Bleu Clothing Company has been established in the year 2011 with the aim to manufacture profound quality textile products. Since then, The Bleu Clothing Company has hit great heights and performed beyond expectations and further expanded the operations in supplying thread products of international standards.
                        </p>
                        <p className="mb-6">
                            The Bleu Clothing Company is able to handle with excellence the various technicalities of textiles and yarn thread manufacturing and products.
                        </p>
                        <p className="mb-6">
                            We are committed to satisfying our customers by supplying products conforming to agreed specifications and strive for a system that ensures defect free product at reasonable price.
                        </p>
                        <p className="italic font-bold border-l-4 border-blue-600 pl-4 text-xl">
                            “We strive for don’t just produce, but produce with quality, efficiency and on-time”
                        </p>

                        <div className="grid grid-cols-2 gap-8 mt-12 border-t-2 border-black pt-8">
                            <div>
                                <h3 className="text-4xl font-black">14+</h3>
                                <p className="text-sm uppercase tracking-widest text-gray-600">Years Experience</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-black">50+</h3>
                                <p className="text-sm uppercase tracking-widest text-gray-600">Global Partners</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
