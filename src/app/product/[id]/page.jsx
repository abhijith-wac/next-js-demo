import React from "react";
import { getProductDetail } from "@/app/lib/getProductDetail";
import ProductDetails from "./ProductDetails";

export default async function ProductPage({ params }) {
  const { id } = await params; // ✅ Correct
  const product = await getProductDetail(id);

  return <ProductDetails product={product} />;
}
