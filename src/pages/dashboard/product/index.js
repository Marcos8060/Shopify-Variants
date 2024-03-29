import { products } from "@/assets/menu";
import CustomizedLayout from "@/components/layout/customized-layout";
import Link from "next/link";
import React from "react";
import { IoEye } from "react-icons/io5";

const Product = () => {
  return (
    <section className="space-y-8">
      <h1 className="text-xl font-bold">Products</h1>
      <section className=" bg-white shadow rounded-xl">
        <div className="flex items-center justify-between p-2 font-bold text-sm">
          <div className="w-2/12">
            <p className="text-center">Product</p>
          </div>
          <div className="w-2/12">
            <p className="text-center">Price</p>
          </div>
          <div className="w-2/12">
            <p className="text-center">Status</p>
          </div>
          <div className="w-2/12">
            <p className="text-center">Inventory</p>
          </div>
          <div className="w-2/12">
            <p className="text-center">Vendor</p>
          </div>
          <div className="w-2/12">
            <p className="text-center">Action</p>
          </div>
        </div>
        {products.map((item, index) => (
          <section
            className="flex text-xs items-center justify-between gap-4 py-1 border-t px-2"
            key={index}
          >
            <div className="w-2/12">
              <div className="flex items-center justify-start gap-2 w-10/12">
                <img className="w-[4vw] rounded-xl" src={item.img} alt="" />
                <span>{item.product_name}</span>
              </div>
            </div>
            <div className="w-2/12 ">
              <p className="text-center">{item?.price}</p>
            </div>
            <div className="w-2/12 ">
              <p className="bg-secondary w-4/12 mx-auto rounded-3xl px-3 py-1 font-bold">
                {item?.status}
              </p>
            </div>
            <div className="w-2/12 ">
              <p className="text-center">{item?.inventory}</p>
            </div>
            <div className="w-2/12">
              <p className="text-center">{item.vendor}</p>
            </div>
            <div className="w-2/12">
              <Link href={{ pathname: `/dashboard/product/${index}`, query: { item: JSON.stringify(item) } }}>
                <IoEye className="text-xl mx-auto" />
              </Link>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};

Product.getLayout = (page) => <CustomizedLayout>{page}</CustomizedLayout>;

export default Product;
