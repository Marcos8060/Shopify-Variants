import CustomizedLayout from "@/components/layout/customized-layout";
import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <section className="space-y-8">
      <h1 className="text-xl">Products</h1>
      <section className="flex items-center justify-center h-[60vh] bg-white shadow-xl rounded">
        <Link className="" href="/dashboard/product/new-product">
          <button className="bg-primary text-white px-4 py-2 shadow-2xl">
            Add Product
          </button>
        </Link>
      </section>
    </section>
  );
};

Product.getLayout = (page) => <CustomizedLayout>{page}</CustomizedLayout>;

export default Product;
