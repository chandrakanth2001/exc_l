import { useEffect, useState } from "react";

const text = "Checkout Categories for more details, Prices may vary!! Contact Us to know more ⚠️";

export const CatHeader = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const speed = isDeleting ? 40 : 80;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(text.slice(0, index + 1));
                setIndex(index + 1);

                if (index === text.length) {
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            } else {
                setDisplayedText(text.slice(0, index - 1));
                setIndex(index - 1);

                if (index === 0) {
                    setIsDeleting(false);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [index, isDeleting]);

    return (
        <div className="mt-5 text-lg font-medium font-primary flex">
            {displayedText}
        </div>
    );
};
