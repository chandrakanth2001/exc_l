import { Link } from "react-router-dom"
import { categories } from "../../data/category"

export const Category = () => {
    return (
        <div className="mt-8 flex flex-wrap gap-4 sm:justify-start">
            {categories.map((item) => (
                <Link
                    key={item.id}
                    to={`/category/${item.slug}`}
                    className="
                            px-5 py-2
                            rounded-full
                            bg-[#161E2E]
                            text-gray-200
                            border border-[#222C3C]
                            text-sm font-medium
                            transition-all duration-200
                            hover:bg-[#1E293B]
                            hover:border-[#334155]
                            hover:scale-105
                            active:scale-95
                        "
                >
                    {item.name}
                </Link>
            ))}
        </div>
    )
}
