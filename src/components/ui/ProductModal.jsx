import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import Button from './Button';

const ProductModal = ({ product, onClose }) => {


    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-gray-900 border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-red-600 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
                </div>

                {/* Details Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-4">
                        {product.category}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6 leading-none">
                        {product.title}
                    </h2>
                    <div className="h-1 w-20 bg-blue-600 mb-8"></div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {product.description}
                    </p>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-black/50 p-4 border border-white/5">
                                <h4 className="text-white font-bold uppercase mb-1">Material</h4>
                                <p className="text-gray-400 text-sm">Premium Grade</p>
                            </div>
                            <div className="bg-black/50 p-4 border border-white/5">
                                <h4 className="text-white font-bold uppercase mb-1">Availability</h4>
                                <p className="text-gray-400 text-sm">In Stock</p>
                            </div>
                        </div>

                        <Button
                            variant="primary"
                            className="w-full"
                            onClick={() => {
                                onClose();
                                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Enquire Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
