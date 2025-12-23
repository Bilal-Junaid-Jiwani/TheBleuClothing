import React from 'react';

const MissionPeople = () => {
    return (
        <section id="mission" className="bg-white text-black py-24 border-t border-black/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Mission Section */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 flex items-center">
                            <span className="w-12 h-1 bg-blue-600 mr-4"></span>
                            Our Mission
                        </h2>

                        <div className="space-y-12">
                            <div className="group">
                                <h3 className="text-2xl font-bold uppercase mb-4 text-blue-600 group-hover:text-black transition-colors">
                                    Research & Development
                                </h3>
                                <p className="text-gray-600 font-mono leading-relaxed border-l-2 border-black/10 pl-6 group-hover:border-blue-600 transition-colors">
                                    New product R&D is an integral part of the continuous improvement at The Bleu. We are continuously working and evolving in relation to development to solely meet the customer needs.
                                </p>
                            </div>

                            <div className="group">
                                <h3 className="text-2xl font-bold uppercase mb-4 text-blue-600 group-hover:text-black transition-colors">
                                    Specialization
                                </h3>
                                <p className="text-gray-600 font-mono leading-relaxed border-l-2 border-black/10 pl-6 group-hover:border-blue-600 transition-colors">
                                    Our thread and fabrics divisions have been planned to deliver products in compliance with all the regulations and meeting the related international standards.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* People Section */}
                    <div className="bg-black text-white p-8 md:p-12 border border-white/10 relative overflow-hidden">
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>

                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 flex items-center relative z-10">
                            <span className="w-12 h-1 bg-white mr-4"></span>
                            Our People
                        </h2>

                        <div className="space-y-8 relative z-10 font-mono text-gray-300 leading-relaxed">
                            <p>
                                Our staff is highly trained on quality, and innovation. The whole working process is built around highly trained staff that has the expert knowledge and experience in developing and implementing the systems and achieving quality product with optimal efficiency.
                            </p>
                            <p>
                                Continous training of staff is integral part at Thebleu in the areas of quality, innovations and production.
                            </p>
                            <p className="text-white font-bold border-t border-white/10 pt-8">
                                We are well-known for our excellent service and assistance and are available to meet our customer needs.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MissionPeople;
