import ChartAndStates from "@/components/dashboard/ChartAndStates";
import Countings from "@/components/dashboard/Countings";
import DashboardSystem from "@/components/dashboard/DashboardSystem";

const Home = () => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
        <Countings />
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <ChartAndStates />
        <DashboardSystem />
      </div>
    </div>
  );
};

export default Home;
