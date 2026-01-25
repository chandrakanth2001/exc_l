import { useParams } from "react-router-dom";
import { Products } from "../../../data/Products";
import Productcard from "../../productcard/Productcard";
import { Navbar } from "../../navbar/Navbar";

export const Categorycontainer = () => {
    const { categoryName } = useParams();

    const filteredProducts = Products.filter((product) => product.category === categoryName);

    return (
        <div className="mx-5 my-3">
            <Navbar />
            <div className="mt-5">
                <h2 className="text-2xl font-semibold capitalize mb-6">{categoryName}</h2>
                <Productcard products={filteredProducts} />
            </div>
        </div>
    );
};
