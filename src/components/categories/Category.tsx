import { Link } from "react-router-dom";
import { categories } from "../../data/category";

export const Category = () => {
    return (
        <div className="mt-6 flex flex-wrap gap-4 sm:justify-start">
            {categories.map((item) => (
                <Link
                    key={item.id}
                    to={`/category/${item.slug}`}
                    className="
                        relative
                        px-5 py-2
                        rounded-full
                        text-sm font-medium
                        text-white/90

                        backdrop-blur-md
                        border border-white/20

                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_30px_rgba(0,0,0,0.35)]

                        transition-all duration-300 ease-out
                        hover:bg-white/20
                        hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.35),0_12px_40px_rgba(0,0,0,0.45)]
                        hover:scale-105

                        active:scale-95
                    "
                >
                    <span
                        className="
                            pointer-events-none
                            absolute inset-0
                            rounded-full
                            bg-gradient-to-br
                            from-white/30
                            via-white/10
                            to-transparent
                            opacity-60
                        "
                    />

                    <span className="relative z-10">
                        {item.name}
                    </span>
                </Link>
            ))}
        </div>
    );
};

