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
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Renting = () => {
  const [rentedDate, setrentedDate] = React.useState();
  const [returnDate, setreturnDate] = React.useState();
  const [renting, setRenting] = React.useState([]);

  const getRentingData = async () => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_URL + "/rentings");
      setRenting(res.data);
    } catch (error) {
      console.log(error, "Faild Fetching renting data");
    }
  };

  useEffect(() => {
    getRentingData();
  }, []);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4">
      <Card className="max-w-full col-span-1 md:col-span-2">
        <CardHeader>
          <CardTitle className="text-xl">Add New Rent</CardTitle>

          <CardDescription className="flex justify-between items-center">
            <p>Enter your information to create an account</p>
            <Badge>RTNXX4</Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="john" required type="text" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="number">NIC</Label>
                <Input
                  type="text"
                  id="number"
                  placeholder="V or XXXXXX"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Phone</Label>
                <Input
                  id="first-name"
                  placeholder="07X XXX XXXX"
                  required
                  type="number"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" type="text" placeholder="N53, London" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="product_name">Product Name</Label>
                <Input
                  id="product_name"
                  placeholder="Black Coart"
                  required
                  type="text"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="product_code">Product code</Label>
                <Input id="product_code" type="text" placeholder="RTNXXX" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Notes or Changes</Label>
              <Textarea
                id="description"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                className="min-h-32"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Popover className="grid">
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !rentedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {rentedDate ? (
                      format(rentedDate, "PPP")
                    ) : (
                      <span>Rented date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={rentedDate}
                    onSelect={setrentedDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Popover className="grid">
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !returnDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {returnDate ? (
                      format(returnDate, "PPP")
                    ) : (
                      <span>Return date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={setreturnDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button type="submit" className="w-full">
              Add New Rent
            </Button>
            <Button variant="outline" className="w-full">
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* renting table */}
      <Card x-chunk="dashboard-05-chunk-3" className="col-span-1 md:col-span-3">
        <CardHeader className="px-7">
          <CardTitle>Rentings</CardTitle>
          <CardDescription>Rented orders from your store.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-full rounded-md border p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden sm:table-cell">Status</TableHead>
                  <TableHead className="hidden sm:table-cell">Tel</TableHead>

                  <TableHead className="hidden md:table-cell">
                    Rented Date
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Return Date
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Rent Code
                  </TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {renting.map((rent) => (
                  <TableRow key={rent.renting_id} className="bg-accent">
                    <TableCell>
                      <div className="font-medium">{rent.customer_name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {rent.customer_nic}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {rent.ranting_status == 0 ? "Not Returned" : "Returned"}
                    </TableCell>

                    <TableCell className="hidden sm:table-cell">
                      <Badge className="text-xs" variant="secondary">
                        {rent.customer_number}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      2023-06-23
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      2023-06-23
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      T{rent.rent_code}
                    </TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Renting;
