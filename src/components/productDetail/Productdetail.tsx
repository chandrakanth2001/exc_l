import { useParams } from "react-router-dom";
import { Products } from "../../data/Products";
import { Navbar } from "../navbar/Navbar";
import { useState } from "react";

export const Productdetail = () => {
    const { productSlug } = useParams();

    const product = Products.find(
        (item) => item.slug === productSlug
    );

    if (!product) {
        return <div className="text-center mt-20">Product Not found!</div>;
    }

    const[selectedVariant,setSelectedVariant] = useState(product.variants[0])

    return (
        <div className="mx-5 my-3">
            <Navbar />

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                <div className="rounded-xl overflow-hidden bg-black/30">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>


                <div className="text-white">
                    <h2 className="text-lg md:text-2xl font-semibold mb-2">
                        {product.name}
                    </h2>


                    <p className="text-2xl md:text-3xl font-bold mb-6">
                        ₹{selectedVariant.price}
                    </p>
                    <div className="mb-6">
                        <p className="text-sm mb-2 text-gray-300">
                            Select quantity
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {
                                product.variants.map((variant)=>(
                                    <button 
                                    key={variant.id}
                                    onClick={()=>setSelectedVariant(variant)}
                                    className={`
                                        px-4 py-2 rounded-full text-sm
                                        border transition-all
                                        ${
                                            selectedVariant.id === variant.id
                                            ?"bg-white text-black border-white"
                                            :"bg-transparent text-white border-white/30"
                                        }
                                        `}
                                    >
                                    {variant.label}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
