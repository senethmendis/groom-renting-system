"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import axios from "axios";

const Countings = () => {
  const [countings, setCountings] = React.useState([]);

  const getCountingData = async () => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_URL + "/dashboard");
      setCountings(res.data);
    } catch (error) {
      console.log(error, "Faild Fetching counting data");
    }
  };

  useEffect(() => {
    getCountingData();
  }, []);

  return (
    <>
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>Rentings</CardDescription>
          <CardTitle className="text-4xl">
            {countings["rentingsCount"]}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            Total Count of Rentings
          </div>
        </CardContent>
        <CardFooter>
          <Progress
            value={countings["rentingsCount"]}
            aria-label="25% increase"
          />
        </CardFooter>
      </Card>
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>Products</CardDescription>
          <CardTitle className="text-4xl">
            {countings["productsCount"]}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            Total Products Count
          </div>
        </CardContent>
        <CardFooter>
          <Progress
            value={countings["productsCount"]}
            aria-label="25% increase"
          />
        </CardFooter>
      </Card>
    </>
  );
};

export default Countings;
