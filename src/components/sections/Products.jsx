import React, { useState } from 'react';
import Button from '../ui/Button';
import ProductModal from '../ui/ProductModal';

const ProductCard = ({ product, onOpenModal }) => {
    const { title, description, category, image } = product;

    return (
        <div className="group relative border border-white/10 bg-gray-900 overflow-hidden hover:border-blue-600/50 transition-all duration-500">
            <div className="aspect-square relative overflow-hidden">
                {/* Product Image - Clean & Premium */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Category Label (Background) */}
                <div className="absolute top-4 right-4 z-10">
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-500 bg-black/50 backdrop-blur-sm px-2 py-1 border border-blue-500/30">
                        {category}
                    </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-black uppercase text-white mb-2 leading-none">
                        {title}
                    </h3>
                    <div className="h-0.5 w-12 bg-blue-600 mb-4 group-hover:w-full transition-all duration-500"></div>

                    <p className="text-gray-300 font-mono text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden lg:block">
                        {description}
                    </p>

                    {/* Mobile Description (Always Visible) */}
                    <p className="text-gray-300 font-mono text-sm mb-4 lg:hidden">
                        {description}
                    </p>

                    <Button
                        variant="outline"
                        className="w-full border-white/30 hover:bg-white hover:text-black hover:border-white group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300"
                        onClick={() => onOpenModal(product)}
                    >
                        View Details
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            title: "Threads",
            category: "Industrial",
            description: "Cotton, Polyester and Blended Threads Raw, White and Dyed For Tea Bags, Stitching and Textile Processing",
            image: "/threads.jpg"
        },
        {
            title: "Fabrics",
            category: "Textiles",
            description: "Woven Greige, Dyed and Printed Offers Various Construction & Weaves Cotton/Cotton Blends",
            image: "/fabrics-new.jpg"
        },
        {
            title: "Medical Gowns / Uniforms",
            category: "Medical",
            description: "Medical industry i.e Surgical/Patient Gowns, Scrub Suits, Lab Coats and Doctors and Nurses Uniforms.",
            image: "/medical.jpg"
        }
    ];

    return (
        <section id="products" className="bg-black text-white py-24 border-t-2 border-white/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                            Our<br />Products
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0">
                        {/* Button Removed */}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                            onOpenModal={setSelectedProduct}
                        />
                    ))}
                </div>
            </div>

            {/* Product Modal */}
            {/* Product Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    );
};

export default Products;
