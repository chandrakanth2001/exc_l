import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import landscapeImage from "../../assets/landscape.jpg";
import thirdImage from "../../../src/assets/third.jpg";
import "./carousel.css";

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes());
        }
    }, [emblaApi]);

    return (
        <div className="embla" ref={emblaRef}>``
            <div className="embla__container">
                <div className="embla__slide">
                    <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="Slide 1" />
                </div>
                <div className="embla__slide">
                    <img src={landscapeImage} alt="Slide 1" />
                </div>
                <div className="embla__slide">
                    <img src={thirdImage} alt="Slide 1" />
                </div>
            </div>
        </div>
    );
}
