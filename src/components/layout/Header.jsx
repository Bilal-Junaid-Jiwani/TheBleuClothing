import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black border-b-2 border-white">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic">
                    The Bleu Clothing Company
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex space-x-6">
                    {['Home', 'About', 'Products', 'Mission', 'Certifications', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white font-bold uppercase tracking-widest hover:text-blue-500 transition-colors duration-300 text-xs"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 bg-black z-40 flex items-center justify-center">
                    <nav className="flex flex-col space-y-6 text-center">
                        {['Home', 'About', 'Products', 'Mission', 'Certifications', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-white font-black uppercase tracking-tighter text-3xl hover:text-blue-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
