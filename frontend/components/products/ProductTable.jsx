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
import { Button } from "../ui/button";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

const ProductTable = () => {
  const [products, setProducts] = React.useState([]);
  const fetchProductsData = async () => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_URL + "/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelteteProduct = async (id) => {
    try {
      await axios.delete(process.env.NEXT_PUBLIC_URL + `/products/${id}`);
      console.log("Product Delete!");
      fetchProductsData();
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
                <TableHead className="table-cell">Product Code</TableHead>
                <TableHead className="hidden md:table-cell">Note</TableHead>
                <TableHead className="hidden md:table-cell">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((prod) => (
                <TableRow className="bg-accent" key={prod.product_id}>
                  <TableCell>{prod.product_id}</TableCell>

                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      {prod.product_name}
                    </Badge>
                  </TableCell>
                  <TableCell className="table-cell">
                    {prod.product_code}
                  </TableCell>
                  <TableCell className=" md:table-cell flex flex-row items-center justify-between gap-6">
                    {prod.note}
                  </TableCell>
                  <TableCell className=" md:table-cell flex flex-row items-center justify-between gap-6">
                    <Button
                      variant="outline"
                      onClick={() => handleDelteteProduct(prod.product_id)}
                    >
                      <Trash2 size={15} color="red" />
                    </Button>

                    <Link href={`/products/${prod.product_id}`}>
                      <Button variant="outline">
                        <Pencil size={15} color="black" />
                      </Button>
                    </Link>
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
