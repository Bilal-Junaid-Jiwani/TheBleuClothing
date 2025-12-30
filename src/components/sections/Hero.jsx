import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center bg-black text-white overflow-hidden pt-20 pb-24 lg:pb-0">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black"></div>
                {/* Grid Pattern */}
                <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block bg-blue-600 text-white px-4 py-1 font-mono text-sm mb-6">
                        EST. 2011
                    </div>
                    <h1 className="text-3xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
                        INTERNATIONAL<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            THREADS & FABRICS
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 font-mono">
                        Premium manufacturing solutions for the global fashion industry.
                        Specializing in high-quality Threads, Fabrics and Medical Textiles.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            variant="primary"
                            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Products
                        </Button>
                        <Button
                            variant="outline"
                            className="flex items-center gap-2"
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact Us <ArrowRight size={20} />
                        </Button>
                    </div>
                </motion.div>


            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20">
                <span className="font-mono text-xs tracking-widest">SCROLL</span>
                <div className="w-[1px] h-12 bg-white"></div>
            </div>
        </section>
    );
};

export default Hero;
