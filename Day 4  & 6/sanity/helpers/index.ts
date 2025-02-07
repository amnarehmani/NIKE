
import { defineQuery } from "next-sanity"; // Ensure you have this import
import { sanityFetch } from "../lib/live";

export const getSale = async () => {
  const SALE_QUERY = defineQuery(`*[_type == 'sale'] | order(name asc)`);
  
  try {
    const products = await sanityFetch({
      query: SALE_QUERY,
    });

    return products?.data || []; // Ensure it returns an empty array if no products
  } catch (error) {
    console.error("Error fetching sale products:", error);
    return [];
  }
};


export const getAllProducts = async () => {
  const PRODUCTS_QUERY = defineQuery(`*[_type=="product"] | order(name asc)`);
  try {
    const products = await sanityFetch({
      query: PRODUCTS_QUERY,
    });
    return products.data || [];
  } catch (error) {
    console.log("Error fetching all products:", error);
    return [];
  }
};
