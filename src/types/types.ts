import { type } from "os";

export type Menu = {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    color: "white" | "black";
    bg: string;
}[];

export type Product = {
    id: string;
    title: string;
    author: string;
    price: number;
    condition: "new" | "used" | "both";
    description?: string;
    publisher?: string;
    image: string;
    rating: number;
    category: "classic" | "spiritual" | "science" | "self-help";
    options?: { title: string, addedPrice: number }[];

}

export type Order = {
    id: string
    createdAt: Date
    price: number
    status: String
    intent_id?: String
    products: CartItem[]
    userEmail: String
}

export type CartItem = {
    // quantity(quantity: any): unknown;
    id: string;
    title: string;
    image?: string;
    price: number;
    optionTitle?: string;
    optionPrice?: number;
    quantity: number;
}

export type Cart = {
    products: CartItem[];
    totalPrice: number;
    totalQuantity?: number;
}

export type ActionTypes = {
    addToCart:(item:CartItem) => void
    removeFromCart:(item:CartItem) => void
}