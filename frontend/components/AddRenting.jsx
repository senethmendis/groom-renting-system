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
} from "./ui/card";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

const AddRenting = ({ refetchData }) => {
  const today = new Date().toJSON().slice(0, 10);
  const [deleting, setDeleting] = React.useState(true);
  const [inputs, setInputs] = React.useState({
    name: "",
    nic: "",
    number: "",
    address: "",
    productName: "",
    productCode: "",
    notes: "",
    rentedDate: today,
    returnDate: "",
    price: 0.0,
  });
  console.log(inputs);

  const clearInputs = () => {
    setInputs({
      name: "",
      nic: "",
      number: 0,
      address: "",
      productName: "",
      productCode: "",
      notes: "",
      rentedDate: "",
      returnDate: "",
      price: 0.0,
    });
  };

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value !== undefined ? value : "",
    }));
  };

  const isEmpy = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  const handleClickAddNewRent = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.NEXT_PUBLIC_URL + "/rentings", inputs);
      console.log("New Rent Added!", inputs);
      // refetch data to update the tables
      refetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card className="max-w-full col-span-1 md:col-span-2">
        <CardHeader>
          <CardTitle className="text-xl">Add New Rent</CardTitle>

          <CardDescription className="flex justify-between items-center">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col space-y-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="john"
                    name="name"
                    required
                    type="text"
                    onChange={handleInputChanges}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="number">NIC</Label>
                  <Input
                    name="nic"
                    type="text"
                    id="number"
                    placeholder="V or XXXXXX"
                    required
                    onChange={handleInputChanges}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">Phone</Label>
                  <Input
                    name="number"
                    id="first-name"
                    placeholder="07X XXX XXXX"
                    required
                    type="tel"
                    onChange={handleInputChanges}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    name="address"
                    id="address"
                    type="text"
                    required
                    placeholder="N53, London"
                    onChange={handleInputChanges}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="product_name">Product Name</Label>
                  <Input
                    id="product_name"
                    placeholder="Black Coart"
                    required
                    name="productName"
                    type="text"
                    onChange={handleInputChanges}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="product_code">Product code</Label>
                  <Input
                    name="productCode"
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

              {/* date issuse here */}
              <div className="grid grid-cols-1 gap-4">
                <Label htmlFor="returnDate">Return Date</Label>
                <Input
                  required
                  id="returnDate"
                  type="date"
                  placeholder="0.00"
                  name="returnDate"
                  onChange={handleInputChanges}
                />
              </div>
              <div className="grid  gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="total_price">Total Price</Label>
                  <Input
                    required
                    id="total_price"
                    type="number"
                    placeholder="0.00"
                    name="price"
                    onChange={handleInputChanges}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                onClick={(e) => {
                  handleClickAddNewRent(e);
                }}
              >
                Add New Rent
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => clearInputs()}
              >
                Clear
              </Button>

              <Separator orientation="vertical" color="black" />

              <Button variant="destructive">
                {deleting ? (
                  ""
                ) : (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}

                {deleting ? "Delete" : "Deleting..."}
              </Button>
              <Button>Edit</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default AddRenting;
