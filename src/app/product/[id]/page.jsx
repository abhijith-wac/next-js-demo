import Image from "next/image";

const getProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
};

export default async function ProductPage({ params }) {
  const { id } = await params; 
  const product = await getProduct(id); 

  return (
    <div>
      <h1>{product.title}</h1>
      <Image src={product.thumbnail} alt={product.title} width={300} height={300} />
    </div>
  );
}
