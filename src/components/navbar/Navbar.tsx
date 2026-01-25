import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="">
            <Link to="/" className="inline-block">
                <img
                    className="h-15 w-auto object-contain block md:block"
                    src="https://i.postimg.cc/rs4zv4ym/main-Logo.webp"
                    alt="mainlogo"
                />
            </Link>
        </div>
    );
};
