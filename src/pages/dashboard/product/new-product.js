import React from "react";
import CustomizedLayout from "@/components/layout/customized-layout";
import { IoIosArrowRoundBack } from "react-icons/io";
import AddProduct from "@/components/dashboard/product/add-product";
import Link from "next/link";

const NewProduct = () => {
  return (
    <section>
      <div className="flex items-center gap-4">
        <Link href="/dashboard/product">
          <IoIosArrowRoundBack className="text-2xl font-bold cursor-pointer bg-primary text-white rounded" />
        </Link>
        <h1 className="text-xl">Add Product</h1>
      </div>
      <AddProduct />
    </section>
  );
};

NewProduct.getLayout = (page) => <CustomizedLayout>{page}</CustomizedLayout>;

export default NewProduct;
