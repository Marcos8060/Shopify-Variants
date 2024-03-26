import { IoHome } from "react-icons/io5";
import { HiBuildingStorefront } from "react-icons/hi2";


export const menus = [
  {
    label: "Home",
    href: "/",
    icon: <IoHome className="" />,
  },
  {
    label: "Products",
    href: "/dashboard/product",
    icon: <HiBuildingStorefront className="" />,
  },
];

const option_names = [
    {
        size:[
            {
                value: 'small'
            },
            {
                value: 'medium'
            },
        ]
    },
    {
        color:[
            {
                value: 'black'
            },
            {
                value: 'red'
            },
        ]
    },
    {
        material:[
            {
                value: 'khaki'
            },
            {
                value: 'jeans'
            },
        ]
    },
    {
        style:[
            {
                value: 'modern'
            },
            {
                value: 'vintage'
            },
        ]
    },
]
