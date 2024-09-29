"use client";
import axios from "axios";
import React, { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/router";

export const description =
  "A product edit page. The product edit page has a form to edit the product details, stock, product category, product status, and product images. The product edit page has a sidebar navigation and a main content area. The main content area has a form to edit the product details, stock, product category, product status, and product images. The sidebar navigation has links to product details, stock, product category, product status, and product images.";

const page = ({ params }) => {
  const [data, setData] = React.useState([]);

  const getProductDetails = async () => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_URL + `/products/${params.id}`
    );

    setData(res.data);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      {data.map((product) => (
        <div
          className="mx-auto grid w-full flex-1 auto-rows-max gap-4"
          key={product.product_id}
        >
          <div className="flex items-center gap-4">
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              {product.product_name}
            </h1>
            <Badge
              variant="outline"
              className={`ml-auto sm:ml-0 ${
                product.status ? "" : "text-red-500"
              }`}
            >
              {product.status ? "In stock" : "Out of stock"}
            </Badge>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Product</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        className="w-full"
                        defaultValue="Gamer Gear Pro Controller"
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="name">Code</Label>
                      <Input
                        id="name"
                        type="text"
                        className="w-full"
                        defaultValue={product.product_code}
                        disabled
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="description">Note</Label>
                      <Textarea
                        id="description"
                        defaultValue={product.note}
                        className="min-h-32"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card
              className="overflow-hidden  col-span-2"
              x-chunk="dashboard-07-chunk-4"
            >
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>
                  Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="500"
                    width="500"
                    priority
                    src="/static/static.jpg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">Save Product</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
