import { EmblaCarousel } from "../carousel/Embalacarousel";
import { Navbar } from "../navbar/Navbar";
import Productcard from "../productcard/Productcard";

export const Pagecontainer = () => {
    return (
        <div>
            <div className="mx-5 my-3">
                <Navbar />
            </div>

            <EmblaCarousel />
            <div className="mx-5 my-3">
                <Productcard />
            </div>
        </div>
    );
};
