import React from "react";
import { IoWalletSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import useAuth from "../../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: stats = {},
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [], refetch: refetchOrderStats } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  // custom shape for bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom shape for pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  if (isPending) {
    return (
      <p className="text-center h-screen w-screen mx-auto justify-center items-center mt-80">
        <span className="loading loading-bars loading-lg"></span>
      </p>
    );
  }

  return (
    <div className="">
      <div className="py-10 w-11/12 mx-auto">
        <h2 className="text-4xl font-bold logo">
          Hi, welcome {user?.displayName ? user?.displayName : "Back"}{" "}
        </h2>
      </div>
      <div className="w-11/12 mx-auto flex justify-between gap-4">
        <div className="stats shadow hover:scale-105 bg-[#ff2c48fb] transform transition-all duration-500 hover:shadow-lg h-40 w-1/4 flex justify-center text-center">
          <div className="flex justify-between gap-6 items-center text-white">
            <div className="text-5xl">
              <IoWalletSharp />
            </div>
            <div className="text-3xl flex justify-start flex-col items-start">
              <h2 className="font-bold text-4xl">{stats?.revenue}</h2>
              <h3>Revenue</h3>
            </div>
          </div>
        </div>
        <div className="stats bg-[#2c87fffb] shadow hover:scale-105 transform transition-all duration-500 hover:shadow-lg h-40 w-1/4 flex justify-center text-center">
          <div className="flex justify-between gap-6 items-center text-white">
            <div className="text-5xl">
              <FaUsers />
            </div>
            <div className="text-3xl flex justify-start flex-col items-start">
              <h2 className="font-bold text-4xl">{stats?.users}</h2>
              <h3>Users</h3>
            </div>{" "}
          </div>
        </div>
        <div className="stats bg-[#ff8b2cfb] shadow hover:scale-105 transform transition-all duration-500 hover:shadow-lg h-40 w-1/4 flex justify-center text-center">
          <div className="flex justify-between gap-6 items-center text-white">
            <div className="text-5xl">
              <MdFastfood />
            </div>
            <div className="text-3xl flex justify-start flex-col items-start">
              <h2 className="font-bold text-4xl">{stats?.menuItems}</h2>
              <h3>Products</h3>
            </div>{" "}
          </div>
        </div>
        <div className="stats bg-[#2cff8bfb] shadow hover:scale-105 transform transition-all duration-500 hover:shadow-lg h-40 w-1/4 flex justify-center text-center">
          <div className="flex justify-between gap-6 items-center text-white">
            <div className="text-5xl">
              <FaTruck />
            </div>
            <div className="text-3xl flex justify-start flex-col items-start">
              <h2 className="font-bold text-4xl">{stats?.orders}</h2>
              <h3>Orders</h3>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="flex my-6 w-11/12 h-[550px] mx-auto bg-white p-6">
        <div className="w-1/2">
          <BarChart
            width={700}
            height={500}
            data={chartData}
            fill="#ffff"
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Legend></Legend>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={180}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
