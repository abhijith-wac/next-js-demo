// Fetch product details
export const getProductDetail = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch product details");
    }
    return res.json();
  };