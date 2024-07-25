import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { data } from "../Constants";

const ChartSection = () => {
  return (
    <div className="w-full overflow-hidden max-w-3xl mx-auto bg-white rounded-2xl shadow-md ">
      <AreaChart
        width={600}
        height={350}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="dataset1"
          stackId="1"
          stroke="#ffc0cb"
          fill="#ffc0cb"
        />
        <Area
          type="monotone"
          dataKey="dataset2"
          stackId="1"
          stroke="#87CEFA"
          fill="#87CEFA"
        />
      </AreaChart>
    </div>
  );
};

export default ChartSection;
