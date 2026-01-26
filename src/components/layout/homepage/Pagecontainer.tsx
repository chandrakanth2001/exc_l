import { EmblaCarousel } from "../../carousel/Embalacarousel";
import { Category } from "../../categories/Category";
import Featuredproducts from "../../featuredproducts/Featuredproducts";
import { Navbar } from "../../navbar/Navbar";
import {Footer}  from "../../layout/footer/Footer";
import { CatHeader } from "../../animations/CatHeader";

export const Pagecontainer = () => {
    return (
        <div>
            <div className="mx-5 my-3">
                <Navbar />
            </div>

            <EmblaCarousel />
            <div className="mx-5 my-3">
                <CatHeader/>
                <Category />
                <Featuredproducts />
            </div>
                <Footer />
        </div>
    );
};
