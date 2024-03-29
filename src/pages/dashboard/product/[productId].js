import CustomizedLayout from "@/components/layout/customized-layout";
import React from "react";
import { useRouter } from "next/router";
import AddProduct from "@/components/dashboard/product/add-product";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const SingleProduct = () => {
  const router = useRouter();
  const { item } = router.query;
  const product = item ? JSON.parse(item) : null;

  return (
    <>
      <section className="flex items-center gap-4 mb-4">
        <div>
          <Link href="/dashboard/product">
            <IoIosArrowRoundBack className="text-2xl font-bold cursor-pointer bg-primary text-white rounded" />
          </Link>
        </div>
        <div>
          <h1 className="text-xl font-bold">{product?.product_name}</h1>
        </div>
      </section>
      <section className="flex gap-4">
        <div className="w-3/12">
          <img className="rounded-xl " src={product.img} alt="" />
        </div>
        <div className="space-y-2">
          <p className="text-sm">
            {" "}
            Name:{" "}
            <span className="text-xs font-bold">{product?.product_name}</span>
          </p>
          <p className="text-sm">
            {" "}
            Status: <span className="text-xs font-bold">{product?.status}</span>
          </p>
          <p className="text-sm">
            Price: <span className="text-xs font-bold">Ksh {product?.price}</span>
          </p>
          <p className="text-sm">
            Vendor: <span className="text-xs font-bold">{product?.vendor}</span>
          </p>
          <p className="text-sm">
            Inventory:{" "}
            <span className="text-xs font-bold">{product?.inventory}</span>
          </p>
          <p className="text-sm">
            Delivery:{" "}
            <span className="text-xs font-bold">{product?.delivery}</span>
          </p>
        </div>
      </section>
      <AddProduct />
    </>
  );
};

SingleProduct.getLayout = (page) => <CustomizedLayout>{page}</CustomizedLayout>;

export default SingleProduct;
