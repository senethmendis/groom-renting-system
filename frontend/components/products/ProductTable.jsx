"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import axios from "axios";

const ProductTable = () => {
  const [products, setProducts] = React.useState([]);
  const fetchProductsData = async () => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_URL + "/products");
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <Card x-chunk="dashboard-05-chunk-3" className="col-span-1 md:col-span-2">
      <CardHeader className="px-7">
        <CardTitle>Products</CardTitle>
        <CardDescription>Add Products to the inventory</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-full rounded-md border p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>IDX</TableHead>
                <TableHead className="hidden sm:table-cell">
                  Product Name
                </TableHead>
                <TableHead className="hidden sm:table-cell">
                  Product Code
                </TableHead>
                <TableHead className="hidden md:table-cell">Note</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((prod) => (
                <TableRow key={prod.product_id} className="bg-accent">
                  <TableCell>{prod.product_id}</TableCell>

                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      {prod.product_name}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {prod.product_code}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {prod.note}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ProductTable;
