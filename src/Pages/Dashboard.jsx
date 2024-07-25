import RecentTickets from "../Components/RecentTickets";
import TopConsultants from "../Components/TopConsultants";
import ChartSection from "../Components/ChartSection";
import TopSessions from "../Components/TopSessions";
import Stat from "../Components/Stat";
import MentalSupportSlider from "../Components/MentalSupportSlider";

const Dashboard = () => {
  return (
    <>
      {/* Stats */}
      <Stat />

      {/* Recent Tickets and Top Consultants */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/*Recent table here */}
        <RecentTickets />

        {/*consultants table here */}
        <TopConsultants />
      </div>

      {/* Chart and Top Session Picks */}
      <div className="grid grid-cols-2 gap-6 ">
        {/* chart component here */}
        <ChartSection />

        {/* chart component here */}
        <TopSessions />
      </div>

      <div className="grid grid-cols-1  mt-12 mb-12">
        <h1 className="text-3xl font-bold mb-6">Recent Blog Posts </h1>
        <MentalSupportSlider />
      </div>
    </>
  );
};

export default Dashboard;
