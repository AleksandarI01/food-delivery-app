type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Premium Burger",
    desc: "Premium juicy burger with our secret sauce.",
    img: "/featured/burger1.jpg",
    price: 22.5,
    options: [
      {
        title: "Medium",
        additionalPrice: 0,
      },
      {
        title: "Large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 2,
    title: "Fish Burger",
    desc: "Fish burger with tartar sauce and an avocado twist.",
    img: "/featured/burger2.jpg",
    price: 20.5,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },
      {
        title: "Large",
        additionalPrice: 3,
      },
    ],
  },
  {
    id: 3,
    title: "Smash Burger",
    desc: "Real American style smash burger with a creamy sauce.",
    img: "/featured/burger3.jpg",
    price: 17.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },
      {
        title: "Large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 4,
    title: "Chicken Burger",
    desc: "Fried chicken with goat cheese.",
    img: "/featured/burger1.jpg",
    price: 21.0,
    options: [
      {
        title: "Medium",
        additionalPrice: 0,
      },
      {
        title: "Large",
        additionalPrice: 3,
      },
    ],
  },
];

// Menu Page data:

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pasta",
    title: "Fresh Pasta",
    desc: "Experience the exquisite taste of our fresh pasta, handcrafted with the finest ingredients to deliver authentic Italian flavors",
    img: "/menuPage/menuPasta.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Indulge in the mouthwatering delight of our juicy burgers, each bite bursting with savory flavors.",
    img: "/menuPage/menuBurger.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Savor the irresistible goodness of our pizzas, featuring a melty blend of the finest cheeses.",
    img: "/menuPage/menuPizza.png",
    color: "white",
  },
];

// all pizzas:

export const pizzas: Products = [
  {
    id: 1,
    title: "Margherita",
    desc: "margherita description",
    price: 15,
    img: "/pizzas/pizza1.png",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },
    ],
  },
  {
    id: 2,
    title: "2",
    desc: "2 description",
    price: 15,
    img: "/pizzas/pizza2.png",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },
    ],
  },
  {
    id: 3,
    title: "3",
    desc: "3 description",
    price: 15,
    img: "/pizzas/pizza3.png",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },
    ],
  },
  {
    id: 4,
    title: "4",
    desc: "4 description",
    price: 15,
    img: "/pizzas/pizza4.png",
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },
    ],
  },
];

// Single Product

export const singleProduct: Product = {
  id: 1,
  title: "Margherita",
  desc: "margherita description",
  img: "/pizzas/pizza1.png",
  price: 15,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 2,
    },
  ],
};
