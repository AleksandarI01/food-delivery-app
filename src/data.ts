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
