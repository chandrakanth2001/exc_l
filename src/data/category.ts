export interface Category {
    id: number;
    name: string;
    slug: string;
}

export const categories: Category[] = [
    {
        id: 1,
        name: "Powders",
        slug: "powders"
    },
    {
        id: 2,
        name: "Pickles",
        slug: "pickles"
    },
    {
        id: 3,
        name: "Coffee",
        slug: "coffee"
    },
]