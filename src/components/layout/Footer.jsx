import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white border-t-4 border-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-none mb-6">
                            THE BLEU<br />CLOTHING COMPANY
                        </h2>
                        <p className="text-gray-400 max-w-md font-mono text-sm">
                            INTERNATIONAL THREADS AND FABRICS SUPPLIER.
                            ESTABLISHED IN 2011.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold uppercase mb-6 border-b-2 border-blue-600 inline-block pb-1">
                            Explore
                        </h3>
                        <ul className="space-y-3 font-mono text-sm">
                            <li><a href="#home" className="hover:text-blue-500 transition-colors">HOME</a></li>
                            <li><a href="#about" className="hover:text-blue-500 transition-colors">ABOUT</a></li>
                            <li><a href="#products" className="hover:text-blue-500 transition-colors">PRODUCTS</a></li>
                            <li><a href="#mission" className="hover:text-blue-500 transition-colors">MISSION</a></li>
                            <li><a href="#certifications" className="hover:text-blue-500 transition-colors">CERTIFICATIONS</a></li>
                            <li><a href="#contact" className="hover:text-blue-500 transition-colors">CONTACT</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold uppercase mb-6 border-b-2 border-blue-600 inline-block pb-1">
                            Contact
                        </h3>
                        <ul className="space-y-3 font-mono text-sm text-gray-400">
                            <li>abdulsamad@thebleu.com.pk</li>
                            <li>(021)37229454</li>
                            <li>Head Office: D-22/1, Block-17, Gulshan-e-Iqbal, Karachi-75300, Pakistan</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-gray-500">
                    <p>&copy; 2025 THE BLEU CLOTHING COMPANY.</p>
                    <p>
                        DESIGNED BY <a href="https://www.linkedin.com/in/bilal-junaid-jiwani/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">BILAL JUNAID JIWANI</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
