import { EmblaCarousel } from "../../carousel/Embalacarousel";
import { Category } from "../../categories/Category";
import Featuredproducts from "../../featuredproducts/Featuredproducts";
import { Navbar } from "../../navbar/Navbar";
import Footer  from "../../layout/footer/Footer";

export const Pagecontainer = () => {
    return (
        <div>
            <div className="mx-5 my-3">
                <Navbar />
            </div>

            <EmblaCarousel />
            <div className="mx-5 my-3">
                <Category />
                <Featuredproducts />
                <Footer />
            </div>
        </div>
    );
};
