import CustomizedLayout from "@/components/layout/customized-layout";
import React from "react";
import { useRouter } from "next/router";

const SingleProduct = () => {
  const router = useRouter();

  // Retrieve state from router
  const state =
    router.asPath !== router.pathname ? router.query : router.query.state;
  const decodedData =
    state && state.data ? JSON.parse(decodeURIComponent(state.data)) : null;

  console.log("DECODED_DATA ", decodedData);

  return <section>SingleProduct</section>;
};

SingleProduct.getLayout = (page) => <CustomizedLayout>{page}</CustomizedLayout>;

export default SingleProduct;
