// Fetch products outside the component
export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};