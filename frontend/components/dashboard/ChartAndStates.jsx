"use client";
import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export const description = "A simple pie chart";
import { chartConfig } from "../../utility/chart";
import React, { useEffect } from "react";
import axios from "axios";

const ChartAndStates = () => {
  const [chartData, setChartData] = React.useState([]);

  const getSystemInfo = async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_URL + "/system");
    const data = res.data;
    setChartData([
      {
        filedName: "Targeted",
        visitors: data.target_income,
        fill: "var(--color-chrome)",
      },
      {
        filedName: "Current",
        visitors: data.monthly_income,
        fill: "var(--color-safari)",
      },
    ]);
  };

  useEffect(() => {
    getSystemInfo();
  }, []);

  return (
    <Card className="grid">
      <CardHeader className="items-center pb-0">
        <CardTitle>Income</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
              hideLabel
            />
            <Pie data={chartData} dataKey="visitors" nameKey="filedName" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

//hideLabel

export default ChartAndStates;
