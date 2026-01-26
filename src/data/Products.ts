
export interface ProductVariant {
    id: number;
    label: string;
    price: number;
    inStock: boolean;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    price: number;
    currency: string;
    image: string;
    category: string;
    rating: number;
    reviews: number;
    inStock: boolean;
    badge?: string;
    variants: ProductVariant[]
}

export const Products: Product[] = [
    {
        id: 1,
        name: "മാങ്ങ അച്ചാർ",
        slug: "manga-achar",
        price: 190,
        currency: "INR",
        image: "https://i.postimg.cc/mrnLnTJW/mangopickle500-2.webp",
        category: "pickles",
        rating: 4.5,
        reviews: 128,
        inStock: true,
        badge: "Best Seller",
        variants: [
            {
                id:500,
                label:"500gm",
                price:350,
                inStock:true
            },
            {
                id:250,
                label:"250gm",
                price:180,
                inStock:true
            },
        ]
    },
    {
        id: 2,
        name: "നാരങ്ങ അച്ചാർ",
        slug: "naranga-achar",
        price: 180,
        currency: "INR",
        image: "https://i.postimg.cc/qvhCQB1Q/Lemonpickle.webp",
        category: "pickles",
        rating: 4.2,
        reviews: 96,
        inStock: true,
        badge: "New",
        variants: [
            {
                id:500,
                label:"500gm",
                price:350,
                inStock:true
            },
            {
                id:250,
                label:"250gm",
                price:180,
                inStock:true
            },
        ]
    },
    {
        id: 3,
        name: "മല്ലി പൊടി",
        slug: "malli-podi",
        price: 70,
        currency: "INR",
        image: "https://i.postimg.cc/nrRCfyCk/coriander.webp",
        category: "powders",
        rating: 4.0,
        reviews: 45,
        inStock: false,
        badge: "Out of Stock",
        variants: [
            {
                id:500,
                label:"500gm",
                price:140,
                inStock:true
            },
            {
                id:250,
                label:"250gm",
                price:70,
                inStock:true
            },
        ]
    },
    {
        id: 4,
        name: "മുളക് പൊടി",
        slug: "mulaku-podi",
        price: 180,
        currency: "INR",
        image: "https://i.postimg.cc/ncS03Mch/chilli.webp",
        category: "powders",
        rating: 4.0,
        reviews: 45,
        inStock: false,
        badge: "Out of Stock",
        variants: [
            {
                id:500,
                label:"500gm",
                price:350,
                inStock:true
            },
            {
                id:250,
                label:"250gm",
                price:180,
                inStock:true
            },
        ]
    },
    {
        id: 5,
        name: "മഞ്ഞൾ പൊടി",
        slug: "manjal-podi",
        price: 100,
        currency: "INR",
        image: "https://i.postimg.cc/pT8Tysqz/turmeric.webp",
        category: "powders",
        rating: 4.0,
        reviews: 45,
        inStock: false,
        badge: "Out of Stock",
        variants: [
            {
                id:500,
                label:"500gm",
                price:200,
                inStock:true
            },
            {
                id:250,
                label:"250gm",
                price:100,
                inStock:true
            },
        ]
    },
    {
        id: 6,
        name: "റാഗി പൊടി",
        slug: "ragi-podi",
        price: 60,
        currency: "INR",
        image: "https://i.postimg.cc/gJd9q4Gk/ragi.webp",
        category: "powders",
        rating: 4.0,
        reviews: 45,
        inStock: false,
        badge: "Out of Stock",
        variants: [
            {
                id:500,
                label:"500gm",
                price:350,
                inStock:true
            },
            {
                id:250,
                label:"250gm",
                price:180,
                inStock:true
            },
        ]
    },
    {
        id: 10,
        name: "പുട്ട് പൊടി",
        slug: "puttu-podi",
        price: 50,
        currency: "INR",
        image: "https://i.postimg.cc/QNJ7bMJ3/puttu.webp",
        category: "powders",
        rating: 4.4,
        reviews: 152,
        inStock: true,
        variants: [
            {
                id:500,
                label:"500gm",
                price:350,
                inStock:true
            },
            {
                id:250,
                label:"250gm",
                price:180,
                inStock:true
            },
        ]
    },
    {
        id: 11,
        name: "കാപ്പി പൊടി",
        slug: "kaappi-podi",
        price: 80,
        currency: "INR",
        image: "https://i.postimg.cc/YCzqc4jQ/coffee.webp",
        category: "coffee",
        rating: 4.4,
        reviews: 152,
        inStock: true,
        variants: [
            {
                id:500,
                label:"500gm",
                price:350,
                inStock:true
            },
            {
                id:250,
                label:"250gm",
                price:180,
                inStock:true
            },
        ]
    },
];
