"use client";

import React, { useState } from "react";
import AppSidebar from "@/components/Homepage/AppSidebar";
import SearchPage from "@/components/Search/SearchPage";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const searchQuery = params.id.split("--")[0].replace(/-/g, " ");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex bg-[#202222]">
      <div className="fixed top-0 left-0 md:w-64 md:block hidden w-full h-screen bg-transparent">
        <AppSidebar onCollapse={setIsSidebarCollapsed} />
      </div>

      <div
        className={`flex-1 ${
          isSidebarCollapsed ? "md:ml-[5rem]" : "md:ml-[13rem]"
        } transition-all duration-300 mt-4 mb-4 mr-4 max-h-[90%] w-full bg-[#191A1A] md:rounded-lg border-[0.1px] border-slate-600`}
      >
        <SearchPage searchMasterQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Page;
