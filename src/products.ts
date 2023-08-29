import exp from "constants";
import { type } from "os";

type Product = {
    id: number;
    title: string;
    author: string;
    price: number;
    condition: "new" | "used" | "both";
    description?: string;
    publisher?: string;
    image: string;
    rating: number;
    category: "classic" | "spiritual" | "science" | "self-help";
    options?: {title: string, addedPrice: number}[];
    
}[]

type Menu = {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    color: "white" | "black";
    bg: string;
}

// type ProductList = Product[];

export const products: Product = [
    {
        id: 1,
        title: "Origin of Species",
        author: "Charles Darwin",
        price: 259,
        condition: "new",
        description: "On the Origin of Species, published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology.",
        publisher: "Penguin Classics",
        image: "/features/feature1.jpg",
        rating: 4.5,
        category: "classic",
        options: [
            {title: "Paperback", addedPrice: 0},
            {title: "Hardcover", addedPrice: 100},
            {title: "Deluxe", addedPrice: 200}
        ]
    },
    {
        id: 2,
        title: "The greatest works",
        author: "Charles Dickens",
        price: 399,
        condition: "new",
        description: "The greatest works of Charles Dickens, including Oliver Twist, Great Expectations, A Tale of Two Cities, David Copperfield and A Christmas Carol.",
        publisher: "Penguin Classics",
        image: "/features/feature2.jpg",
        rating: 4,
        category: "classic",
        options: [
            {title: "Paperback", addedPrice: 0},
            {title: "Hardcover", addedPrice: 100},
            {title: "Deluxe", addedPrice: 200}
        ]
    },
    {
        id: 3,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        price: 299,
        condition: "new",
        description: "The Picture of Dorian Gray is a Gothic and philosophical novel by Oscar Wilde, first published complete in the July 1890 issue of Lippincott's Monthly Magazine.",
        publisher: "Penguin Classics",
        image: "/features/feature3.jpg",
        rating: 5,
        category: "classic",
        options: [
            {title: "Paperback", addedPrice: 0},
            {title: "Hardcover", addedPrice: 100},
            {title: "Deluxe", addedPrice: 200}
        ]
    },
    {
        id: 4,
        title: "Patanjali Yoga Sutras",
        author: "Swami Vivekananda",
        price: 199,
        condition: "new",
        description: "Patanjali Yoga Sutras is a collection of 196 Indian sutras (aphorisms) on the theory and practice of yoga. The Yoga Sutras were compiled prior to 400 CE by Sage Patanjali who synthesized and organized knowledge about yoga from older traditions.",
        publisher: "Advaita Ashrama",
        image: "/features/feature4.jpg",
        rating: 4,
        category: "spiritual",
        options: [
            {title: "Paperback", addedPrice: 0},
            {title: "Hardcover", addedPrice: 100},
        ]
    },
    {
        id: 5,
        title: "Kautalya's Arthashastra",
        author: "Kautalya",
        price: 299,
        condition: "new",
        description: "The Arthashastra is an ancient Indian treatise on statecraft, economic policy and military trategy authored by Chanakya (350-283 BCE).",
        publisher: "Penguin Classics",
        image: "/features/feature5.jpg",
        rating: 5,
        category: "spiritual",
        options: [
            {title: "Paperback", addedPrice: 0},
            {title: "Hardcover", addedPrice: 100},
        ]
    },
    {
        id: 6,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        price: 399,
        condition: "used",
        description: "Say you’ve spent 47 hours this week at work; 56 hours sleeping; 7 hours in the bathroom; 4 hours eating; 2 hours in transit. That leaves you with 52 hours of free time. How are you going to spend it? If you’re like most people, you’ll probably spend a good chunk of it reading. And if you’re like most people, you’ll probably spend a good chunk of that reading nonfiction.",
        publisher: "Penguin Classics",
        image: "/features/feature6.jpg",
        rating: 4.5,
        category: "science",
        options: [
            {title: "Paperback", addedPrice: 0},
        ]
    },
    {
        id: 7,
        title: "Ikigai: The Japanese secret to a long and happy life",
        author: "Héctor García",
        price: 299,
        condition: "used",
        description: "The people of Japan believe that everyone has an ikigai – a reason to jump out of bed each morning. And according to the residents of the Japanese island of Okinawa – the world’s longest-living people – finding it is the key to a longer and more fulfilled life.",
        publisher: "Penguin Classics",
        image: "/features/feature7.jpg",
        rating: 4,
        category: "science",
        options: [
            {title: "Paperback", addedPrice: 0},
        ]
    }

]



export const menus: Menu[] = [
    {
        id: 1,
        slug: "classic",
        title: "Classic",
        description: "Classic books are timeless and famous books. They are works of literature that are still popular and worth reading in the present day.",
        image: "/menu/classic.jpeg",
        color: "white",
        bg: "bg-green-400"
    },
    {
        id: 2,
        slug: "spiritual",
        title: "Spiritual",
        description: "Spiritual books are those that focus on spiritual growth and development. They are books that help you to understand yourself and the world around you.",
        image: "/menu/spiritual.jpeg",
        color: "black",
        bg: "bg-white"
    },
    {
        id: 3,
        slug: "science",
        title: "Science",
        description: "Science books are those that focus on science and technology. They are books that help you to understand the world around you.",
        image: "/menu/sci-fi.jpeg",
        color: "white",
        bg: "bg-green-400"
    },
    {
        id: 4,
        slug: "self-help",
        title: "Self Help",
        description: "Self-help books are those that focus on self-improvement and personal growth. They are books that help you to understand yourself and the world around you.",
        image: "/menu/selfhelp.jpg",
        color: "white",
        bg: "bg-green-400"
    },
    {
        id: 5,
        slug: "fiction",
        title: "Fiction",
        description: "Fiction books are those that focus on fiction and fantasy. They are books that help you to understand the world around you.",
        image: "/menu/fiction.jpeg",
        color: "black",
        bg: "bg-white"
    },
    {
        id: 6,
        slug: "non-fiction",
        title: "Non Fiction",
        description: "Non-fiction books are those that focus on non-fiction and non-fiction. They are books that help you to understand the world around you.",
        image: "/menu/non-fiction.jpeg",
        color: "white",
        bg: "bg-green-400"
    },

]

export const classics: Product = [
    {
        id: 1,
        title: "Origin of Species",
        author: "Charles Darwin",
        price: 259,
        condition: "new",
        description: "On the Origin of Species, published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology.",
        publisher: "Penguin Classics",
        image: "/features/feature1.jpg",
        rating: 4.5,
        category: "classic",
        options: [
            {title: "Paperback", addedPrice: 0},
            {title: "Hardcover", addedPrice: 100},
            {title: "Deluxe", addedPrice: 200}
        ]
    },
    {
        id: 2,
        title: "The greatest works",
        author: "Charles Dickens",
        price: 399,
        condition: "new",
        description: "The greatest works of Charles Dickens, including Oliver Twist, Great Expectations, A Tale of Two Cities, David Copperfield and A Christmas Carol.",
        publisher: "Penguin Classics",
        image: "/features/feature2.jpg",
        rating: 4,
        category: "classic",
        options: [
            {title: "Paperback", addedPrice: 0},
            {title: "Hardcover", addedPrice: 100},
            {title: "Deluxe", addedPrice: 200}
        ]
    },
    {
        id: 3,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        price: 299,
        condition: "new",
        description: "The Picture of Dorian Gray is a Gothic and philosophical novel by Oscar Wilde, first published complete in the July 1890 issue of Lippincott's Monthly Magazine.",
        publisher: "Penguin Classics",
        image: "/features/feature3.jpg",
        rating: 3.5,
        category: "classic",
        options: [
            {title: "Paperback", addedPrice: 0},
            {title: "Hardcover", addedPrice: 100},
            {title: "Deluxe", addedPrice: 200}
        ]
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 299,
        condition: "new",
        description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
        publisher: "Penguin Classics",
        image: "/menu/classic.jpeg",
        rating: 4.5,
        category: "classic",
        options: [
            {title: "Paperback", addedPrice: 0},
            {title: "Hardcover", addedPrice: 100},
            {title: "Deluxe", addedPrice: 200}
        ]
    },
    {
        id: 5,
        title: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
        price: 299,
        condition: "new",
        description: "Adventures of Huckleberry Finn is a novel by Mark Twain, first published in the United Kingdom in December 1884 and in the United States in February 1885.",
        publisher: "Penguin Classics",
        image: "/menu/classic.jpeg",
        rating: 4.5,
        category: "classic",
        options: [
            {title: "Paperback", addedPrice: 0},
            {title: "Hardcover", addedPrice: 100},
            {title: "Deluxe", addedPrice: 200}
        ]
    },
    {
        id: 6,
        title: "The Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        price: 299,
        condition: "new",
        description: "The Adventures of Sherlock Holmes is a collection of twelve short stories by Arthur Conan Doyle, first published on 14 October 1892.",
        publisher: "Penguin Classics",
        image: "/menu/classic.jpeg",
        rating: 4.5,
        category: "classic",
        options: [
            {title: "Paperback", addedPrice: 0},
            {title: "Hardcover", addedPrice: 100},
            {title: "Deluxe", addedPrice: 200}
        ]
    },
    {
        id: 7,
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        price: 299,
        condition: "new",
        description: "Adventures of Huckleberry Finn is a novel by Mark Twain, first published in the United Kingdom in December 1884 and in the United States in February 1885.",
        publisher: "Penguin Classics",
        image: "/menu/classic.jpeg",
        rating: 4.5,
        category: "classic",
        options: [
            {title: "Paperback", addedPrice: 0},
            {title: "Hardcover", addedPrice: 100},
            {title: "Deluxe", addedPrice: 200}
        ]
    },
    {
        id: 8,
        title: "The Call of the Wild",
        author: "Jack London",
        price: 299,
        condition: "new",
        description: "The Call of the Wild is a short adventure novel by Jack London, published in 1903 and set in Yukon, Canada, during the 1890s Klondike Gold Rush, when strong sled dogs were in high demand.",
        publisher: "Penguin Classics",
        image: "/menu/classic.jpeg",
        rating: 4.5,
        category: "classic",
        options: [
            {title: "Paperback", addedPrice: 0},
            {title: "Hardcover", addedPrice: 100},
            {title: "Deluxe", addedPrice: 200}
        ]
    }

]
