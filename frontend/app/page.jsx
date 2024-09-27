import ChartAndStates from "@/components/dashboard/ChartAndStates";
import Countings from "@/components/dashboard/Countings";

export default function Home() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
        <Countings />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <ChartAndStates />
      </div>
    </div>
  );
}
