export interface Product {
    id: number;
    name: string;
    price: number;
    currency: string;
    image: string;
    category: string;
    rating: number;
    reviews: number;
    inStock: boolean;
    badge?: string;
}

export const Products: Product[] = [
    {
        id: 1,
        name: "മാങ്ങ അച്ചാർ",
        price: 190,
        currency: "INR",
        image: "https://i.postimg.cc/mrnLnTJW/mangopickle500-2.webp",
        category: "pickles",
        rating: 4.5,
        reviews: 128,
        inStock: true,
        badge: "Best Seller",
    },
    {
        id: 2,
        name: "നാരങ്ങ അച്ചാർ",
        price: 180,
        currency: "INR",
        image: "https://i.postimg.cc/qvhCQB1Q/Lemonpickle.webp",
        category: "pickles",
        rating: 4.2,
        reviews: 96,
        inStock: true,
        badge: "New",
    },
    {
        id: 3,
        name: "മല്ലി പൊടി",
        price: 899,
        currency: "INR",
        image: "https://i.postimg.cc/nrRCfyCk/coriander.webp",
        category: "powders",
        rating: 4.0,
        reviews: 45,
        inStock: false,
        badge: "Out of Stock",
    },
    {
        id: 4,
        name: "മുളക് പൊടി",
        price: 899,
        currency: "INR",
        image: "https://i.postimg.cc/ncS03Mch/chilli.webp",
        category: "powders",
        rating: 4.0,
        reviews: 45,
        inStock: false,
        badge: "Out of Stock",
    },
    {
        id: 5,
        name: "മഞ്ഞൾ പൊടി ",
        price: 899,
        currency: "INR",
        image: "https://i.postimg.cc/pT8Tysqz/turmeric.webp",
        category: "powders",
        rating: 4.0,
        reviews: 45,
        inStock: false,
        badge: "Out of Stock",
    },
    {
        id: 6,
        name: "റാഗി പൊടി ",
        price: 899,
        currency: "INR",
        image: "https://i.postimg.cc/gJd9q4Gk/ragi.webp",
        category: "powders",
        rating: 4.0,
        reviews: 45,
        inStock: false,
        badge: "Out of Stock",
    },
    {
        id: 10,
        name: "പുട്ട് പൊടി",
        price: 699,
        currency: "INR",
        image: "https://i.postimg.cc/QNJ7bMJ3/puttu.webp",
        category: "powders",
        rating: 4.4,
        reviews: 152,
        inStock: true,
        badge: "",
    },
    {
        id: 11,
        name: "കാപ്പി പൊടി",
        price: 180,
        currency: "INR",
        image: "https://i.postimg.cc/YCzqc4jQ/coffee.webp",
        category: "coffee",
        rating: 4.4,
        reviews: 152,
        inStock: true,
        badge: "",
    },
];
