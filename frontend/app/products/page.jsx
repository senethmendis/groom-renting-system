import React from "react";

import AddNewProducts from "@/components/products/AddNewProducts";
import ProductTable from "@/components/products/ProductTable";

const Products = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-5">
      <AddNewProducts />
      <ProductTable />
    </div>
  );
};

export default Products;
