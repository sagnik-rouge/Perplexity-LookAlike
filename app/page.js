"use client";

import AppSidebar from "@/components/Homepage/AppSidebar";
import Homepage from "@/components/Homepage/Homepage";
import { useState } from "react";

const Page = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex bg-[#202222]">
      <div className="">
        <AppSidebar onCollapse={setIsSidebarCollapsed} />
      </div>

      <div
        className={`${
          isSidebarCollapsed ? "md:ml-[5rem]" : "md:ml-[13rem]"
        } transition-all duration-300 mt-4 mb-4 mr-4 max-h-[90%] w-full bg-[#191A1A] md:rounded-lg border-[0.1px] border-slate-600 overflow-hidden`}
      >
        <Homepage />
      </div>
    </div>
  );
};

export default Page;
