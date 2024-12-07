import React from "react";

const Sidebar = () => {
  const menuItems = [
    "Dashboard",
    "Recruitment",
    "Schedule",
    "Employee",
    "Department",
    "Support",
    "Settings",
  ];

  return (
    <div className="bg-gray-800 text-white w-64 h-screen flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-8">Vasitum</h1>
      <ul className="space-y-6">
        {menuItems.map((item, index) => (
          <li key={index} className="text-gray-300 hover:text-white cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
