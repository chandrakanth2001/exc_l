import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./carousel.css";

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    useEffect(() => {
        if (emblaApi) {
            // console.log(emblaApi.slideNodes());
        }
    }, [emblaApi]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <img src="https://i.postimg.cc/W4dgbhXW/carousel-spices.webp" alt="Slide 1" />
                </div>
                <div className="embla__slide">
                    <img src="https://i.postimg.cc/brWHRqGN/carousel-2-coffee.webp" alt="Slide 1" />
                </div>
                <div className="embla__slide">
                    <img src="https://i.postimg.cc/KckGqmw0/carousel-1.webp" alt="Slide 1" />
                    <div className="embla__overlay">
                        <h2>Test</h2>
                        <p>Handpicked from trusted farms</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
