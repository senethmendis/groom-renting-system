import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import axios from "axios";
import { toast } from "sonner";

const PopUpOptions = ({ rent }) => {
  const [inputs, setInputs] = React.useState({
    name: rent.customer_name,
    nic: rent.customer_nic,
    number: rent.customer_number,
    address: rent.customer_address,
    productName: rent.product_name,
    productCode: rent.product_code,
    notes: rent.note,
    rentedDate: rent.rented_date,
    returnDate: rent.return_date,
    price: rent.renting_price,
  });

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

  const handleClickAddNewRent = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.NEXT_PUBLIC_URL + "/rentings", inputs);
      console.log("New Rent Added!", inputs);
      toast("New Rent Added");
      // refetch data to update the tables
      refetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAnRenting = (id) => {
    try {
      axios.delete(`/rentings/${id}`);
      alert("Rent closed");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <Card className="max-w-full col-span-1 md:col-span-2">
      <CardHeader></CardHeader>
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
                  value={rent.customer_name}
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
                  value={rent.customer_nic}
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
                  value={rent.customer_number}
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
                  value={rent.customer_address}
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
                  value={rent.product_name}
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
                  value={rent.product_code}
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
                value={rent.note}
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
                value={rent.returned_date}
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
                  value={rent.renting_price}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                className="w-full"
                onClick={(e) => {
                  console.log(e);
                }}
              >
                Update
              </Button>
              <Button
                variant="destructive"
                className="w-full"
                onClick={() => handleDeleteAnRenting(rent.renting_id)}
              >
                Delete
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PopUpOptions;
