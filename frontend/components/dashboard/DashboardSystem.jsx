import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const DashboardSystem = () => {
  return (
    <Card x-chunk="dashboard-05-chunk-1">
      <CardHeader className="pb-2">
        <CardDescription>Set a goal for the month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Input
            id="product_name"
            placeholder="30,000"
            required
            name="product_name"
            type="number"
            disabled
          />
          <Button variant={"ghost"}>Set Goal</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardSystem;
