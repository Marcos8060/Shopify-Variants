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

export const products = [
    {
        img: '/sneaker.jpg',
        product_name: 'Sneaker',
        price: '2300',
        inventory: ' 3 In Stock',
        vendor: 'Stephen',
        status: 'active',
        delivery: 'Within 5 working days'
    },
    {
        img: '/macbook.jpg',
        product_name: 'Mac Book',
        price: '75000',
        inventory: 'Inventory not Tracked',
        vendor: 'Jared',
        status: 'active',
        delivery: 'Within 2 working days'
    },
    {
        img: '/bike.jpg',
        product_name: 'Mtb Bike',
        price: '45000',
        inventory: '7 In Stock',
        vendor: 'Micheal',
        status: 'active',
        delivery: 'Within one week'
    },
    {
        img: '/sneaker.jpg',
        product_name: 'Sneaker',
        price: '2300',
        inventory: ' 3 In Stock',
        vendor: 'Stephen',
        status: 'active',
        delivery: 'Within 5 working days'
    },
]
