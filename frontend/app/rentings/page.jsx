"use client";
import React, { useEffect } from "react";
import axios from "axios";
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
import AddRenting from "@/components/AddRenting";
import { Check, Clock8 } from "lucide-react";

const Renting = () => {
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
      {/* left side adding renting details */}
      <AddRenting refetchData={getRentingData} />

      {/* renting table */}
      <Card x-chunk="dashboard-05-chunk-3" className="col-span-1 md:col-span-3">
        <CardHeader className="px-7">
          <CardTitle>Rentings</CardTitle>
          <CardDescription>Rented orders from your store.</CardDescription>
        </CardHeader>
        <CardContent>
          {renting.length > 0 ? (
            <ScrollArea className="h-full rounded-md border p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Status
                    </TableHead>
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
                        {rent.ranting_status == 0 ? (
                          <Clock8 size={15} />
                        ) : (
                          <Check color="#37eb43" size={15} />
                        )}
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
                      <TableCell className="text-right">
                        {rent.renting_price} Rs
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          ) : (
            <p className="px-1">No Data Available!</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Renting;
