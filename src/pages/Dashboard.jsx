import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-6">
        
        <div className=" bg-orange-500">

          <Card title="Available Position" value="24" subtext="4 Urgently needed" highlight="4 Urgently needed" />
        </div>

        <div>

          <Card title="Job Open" value="10" subtext="4 Active hiring" highlight="4 Active hiring" />
        </div>

        <div>

          <Card title="New Employees" value="24" subtext="4 Departments" highlight="4 Department"/>
        </div>

        <div>

          <Card title="Talent Request" value="16" subtext="6 Men, 10 Women" highlight="+5% Past month" />
        </div>

        

    
        </div>

        {/* Total Employees & Talent Request */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 duration-5">
            <h2 className="text-lg font-bold">Total Employees</h2>
            <p className="text-3xl font-bold mt-2">216</p>
            <p className="text-gray-500 mt-1">120 Men, 96 Women</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 duration-5">
            <h2 className="text-lg font-bold">Talent Request</h2>
            <p className="text-3xl font-bold mt-2">16</p>
            <p className="text-gray-500 mt-1">6 Men, 10 Women</p>
          </div>
        </div>

        {/* Announcements */}
        <div className=" mt-6 border-black rounded-lg">
          <h2 className="text-lg font-bold mb-4 ">Announcements</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>Outing schedule for every department</p>
            <p className="text-gray-500 text-sm mt-1">5 minutes ago</p>

          </div>

          <div className="bg-white p-4 rounded-lg shadow-md mt-2">
            <p>Meeting HR Department</p>
            <p className="text-gray-500 text-sm mt-1">Yesterday, 12:30 PM</p>

          </div>

          <div className="bg-white p-4 rounded-lg shadow-md mt-2">
            <p>IT Department need two more talents for UX/UI Designer position</p>
            <p className="text-gray-500 text-sm mt-1">Yesterday, 09:15 AM</p>

          </div>

          <h1 className="flex justify-center mt-5 text-red-500">See All Announcement</h1>

          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
