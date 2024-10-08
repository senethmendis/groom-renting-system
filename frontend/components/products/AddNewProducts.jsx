"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddNewProducts = () => {
  const [inputs, setInputs] = React.useState({
    product_name: "",
    product_code: "",
    notes: "",
  });

  const clearInputs = () => {
    setInputs({
      product_name: "",
      product_code: "",
      notes: "",
    });
  };

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value !== undefined ? value : "",
    }));
  };

  const handleClickAddNewProduct = async (e) => {
    e.preventDefault();
    try {
      if (
        inputs.notes == "" ||
        inputs.product_code == "" ||
        inputs.product_name == ""
      ) {
        toast("Fill the fields", {
          theme: "dark",
        });
      } else {
        await axios.post(process.env.NEXT_PUBLIC_URL + "/products", inputs);
        console.log("New Rent Added!");
        toast("New Rent Added");

        // refetch data to update the tables
        // refetchData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="max-w-full col-span-1 md:col-span-1">
      <CardHeader>
        <CardTitle className="text-xl">Add New Products</CardTitle>
        <CardDescription className="flex justify-between items-center">
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col space-y-4">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="product_name">Product Name</Label>
                <Input
                  id="product_name"
                  placeholder="Black Coart"
                  required
                  name="product_name"
                  type="text"
                  onChange={handleInputChanges}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="product_code">Product code</Label>
                <Input
                  name="product_code"
                  id="product_code"
                  type="text"
                  required
                  placeholder="RTNXXX"
                  onChange={handleInputChanges}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="notes">Notes or Changes</Label>
              <Textarea
                name="notes"
                id="notes"
                className="min-h-32"
                placeholder="type your notes regarding rent"
                onChange={handleInputChanges}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              onClick={(e) => {
                handleClickAddNewProduct(e);
              }}
            >
              Add New Product
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => clearInputs()}
            >
              Clear
            </Button>
          </div>
        </form>
      </CardContent>
      <ToastContainer
        theme="dark"
        hideProgressBar
        position="bottom-right"
        autoClose={2000}
      />
    </Card>
  );
};

export default AddNewProducts;
