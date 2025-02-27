import React from "react";
import { getProductDetail } from "@/app/lib/getProductDetail";
import ProductDetails from "./components/ProductDetails";


export default async function ProductPage({ params }) {
  const { id } = await params; // ✅ Correct
  const product = await getProductDetail(id);

  return <ProductDetails product={product} />;
}
