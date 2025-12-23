import React from 'react';

const Certifications = () => {
    const certifications = [
        {
            title: "BRGS",
            image: "/cert-brgs.jpg",
            description: "Global Standard for Packaging Materials"
        },
        {
            title: "Halaal",
            image: "/cert-halaal.jpg",
            description: "Certified by Renaissance Inspection Agency"
        },
        {
            title: "ISO 22000:2018",
            image: "/cert-iso.jpg",
            description: "Quality Assurance & Food Safety Management"
        },
        {
            title: "SEDEX",
            image: "/sedex.png",
            description: "Empowering Responsible Supply Chains"
        }
    ];

    return (
        <section id="certifications" className="bg-black text-white py-24 border-t border-white/10 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6">
                        Certified Excellence
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-mono text-lg">
                        We adhere to the highest international standards of quality, safety, and compliance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-900 border border-white/10 p-8 rounded-sm hover:border-blue-600 transition-all duration-500 hover:shadow-[0_0_50px_rgba(37,99,235,0.15)]"
                        >
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 bg-white/20 group-hover:bg-blue-500 transition-colors"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 bg-white/20 group-hover:bg-blue-500 transition-colors"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 bg-white/20 group-hover:bg-blue-500 transition-colors"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-white/20 group-hover:bg-blue-500 transition-colors"></div>

                            {/* Image Container - "Illuminated Panel" */}
                            <div className="bg-white rounded-sm p-8 mb-8 aspect-square flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain mix-blend-multiply filter contrast-110"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="text-center">
                                <h3 className="text-2xl font-bold uppercase mb-2 group-hover:text-blue-500 transition-colors">
                                    {cert.title}
                                </h3>
                                <div className="h-0.5 w-12 bg-blue-600 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                                <p className="text-gray-400 font-mono text-sm">
                                    {cert.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
