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

const ChartAndStates = () => {
  const chartData = [
    { browser: "Renting", visitors: 10, fill: "var(--color-chrome)" },
    { browser: "Products", visitors: 5, fill: "var(--color-safari)" },
  ];

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
            <Pie data={chartData} dataKey="visitors" nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

//hideLabel

export default ChartAndStates;
