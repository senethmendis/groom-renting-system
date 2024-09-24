import React from "react";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Check, Clock8, SquareChartGantt, SquareX } from "lucide-react";
import PopUpOptions from "./PopUpOptions";

export const RentingTable = ({ renting }) => {
  return (
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
                      <div className="flex gap-4">
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <SquareChartGantt color="grey" size={18} />
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Edit Details of the Rentings
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                <PopUpOptions rent={rent} />
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        <div>
                          <div className="font-medium flex gap-2 items-center">
                            {rent.customer_name}
                          </div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {rent.customer_nic}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {" "}
                      {rent.ranting_status == 0 ? (
                        <SquareX size={15} color="red" />
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
  );
};
