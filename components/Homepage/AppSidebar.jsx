"use client";

import { useState } from "react";
import { Brain, Home, History, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "History",
    icon: History,
    href: "/history",
  },
];

export default function AppSidebar({ onCollapse }) {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    const newCollapsedState = !collapsed;
    setCollapsed(newCollapsedState);
    onCollapse(newCollapsedState);
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-[#202222] text-white transition-all duration-300 ${
        collapsed ? "w-[5rem]" : "w-[13rem]"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-start px-4 py-4 gap-3">
        <div className="flex items-center gap-2">
          <Brain size={32} />
          {!collapsed && (
            <span className="text-2xl font-light">Perplexity</span>
          )}
        </div>
        {!collapsed && (
          <Image
            onClick={handleCollapse}
            src={"/collapse.svg"}
            alt="Collapse"
            width={32}
            height={32}
            className="cursor-pointer mr-3"
          />
        )}
      </div>

      {/* Search Button */}
      <button
        onClick={() => alert("Search functionality triggered!")}
        className={`flex items-center gap-4 w-full px-4 py-3 text-gray-300 hover:bg-[#2c2e2e] hover:text-white rounded-md transition-all duration-200 ${
          collapsed ? "justify-center" : ""
        }`}
      >
        <Search size={24} />
        {!collapsed && (
          <span className="ml-2 text-[16px] leading-[24px]">Search</span>
        )}
      </button>

      {/* Navigation Menu */}
      <nav className="mt-4">
        {navItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <button
              className={`flex items-center gap-4 w-full px-4 py-3 text-gray-300 hover:bg-[#2c2e2e] hover:text-white rounded-md transition-all duration-200 ${
                collapsed ? "justify-center" : ""
              }`}
            >
              <item.icon size={24} />
              {!collapsed && (
                <span className="ml-2 text-[16px] leading-[24px]">
                  {item.title}
                </span>
              )}
            </button>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto px-4 py-4 w-full absolute bottom-0 left-0 right-0">
        {!collapsed && (
          <div className="flex flex-col gap-2">
            <button
              className="w-full py-2 bg-cyan-500 hover:bg-cyan-700 rounded-md text-black cursor-pointer"
            >
              Sign Up
            </button>
            <button
              onClick={() => alert("Login triggered!")}
              className="w-full py-2 bg-[#2c2e2e] hover:bg-[#2c2e2e]/70 rounded-md text-white"
            >
              Login
            </button>
          </div>
        )}
        {collapsed && (
          <button
            onClick={handleCollapse}
            className="text-gray-400 hover:text-white transition-transform duration-300"
            aria-label="Toggle Sidebar"
          >
            <Image
              src={"/collapse.svg"}
              alt="Expand"
              width={60}
              height={60}
              className="rotate-180"
            />
          </button>
        )}
      </div>
    </aside>
  );
}
