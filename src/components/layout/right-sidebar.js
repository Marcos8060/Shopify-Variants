import React from "react";

const RightSideBar = () => {
  return (
    <section className="space-y-4">
      <div className="bg-white shadow p-4 rounded space-y-2 w-full">
        <h1 className="font-bold text-sm">Product Status</h1>
        <input
          className="border border-gray rounded block focus:outline-none px-3 py-2 text-xs w-full"
          value="Active"
          type="text"
        />
        <p className="text-xs">
          This product will be available to 1 sales channel
        </p>
        <div className="border-b border-gray"></div>
        <h1 className="font-bold text-xs uppercase">Sales Channels and Apps</h1>
        <div className="flex items-center gap-2">
          <input className="w-4 h-4 cursor-pointer" type="checkbox" />
          <p className="text-xs">Online Store</p>
        </div>
        <p className="text-blue-600 text-xs">Schedule availability</p>
      </div>

      <div className="bg-white shadow p-4 rounded space-y-2 w-full">
        <h1 className="font-bold text-sm">Product Organization</h1>
        <input
          className="border border-gray rounded block focus:outline-none px-3 py-2 text-xs w-full"
          placeholder="Search types"
        />
        <input
          className="border border-gray rounded block focus:outline-none px-3 py-2 text-xs w-full"
          placeholder="Vendor"
        />
        <input
          className="border border-gray rounded block focus:outline-none px-3 py-2 text-xs w-full"
          placeholder="Find or create tags"
        />
      </div>
    </section>
  );
};

export default RightSideBar;
