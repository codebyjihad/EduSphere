'use client'
import React, { useState } from "react";
import {
    FaHome,
    FaVideo,
    FaPlusCircle,
    FaEnvelope,
    FaBell,
    FaCog,
    FaMoon,
    FaSun,
    FaUserCircle,
} from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
import { useProvider } from "@/context/AuthProvider";

type MenuItem = {
    name: string;
    icon: React.ReactNode;
    url: string;
};

const menuItems: MenuItem[] = [
    { name: "Home", icon: <FaHome />, url: "/" },
    { name: "Reels", icon: <FaVideo />, url: "/reels" },
    { name: "Create", icon: <FaPlusCircle />, url: "/create" },
    { name: "Notifications", icon: <FaBell />, url: "/notifications" },
     { name: "Messages", icon: <FaEnvelope />, url: "/messages" },
];

const Sidebar = () => {

    const [user, setUser] = useState<boolean>(false)
    const {toggleDarkMode ,theme } = useProvider()


    return (
        <div className="fixed top-0  h-screen w-56 bg-background text-foreground flex flex-col justify-between border-r border-border">

            {/* Logo & Menu */}
            <div>
                <div className="text-2xl font-bold p-6 border-b border-border">
                    Next<span className="text-primary">Aura</span>
                </div>

                <div className="flex flex-col mt-4">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            className="flex items-center px-6 py-3 hover:bg-secondary transition-colors"
                        >
                            <span className="text-xl mr-4">{item.icon}</span>
                            <span>{item.name}</span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="p-6 border-t border-border">
                {/* Dark Mode Button (UI only) */}
                <button onClick={toggleDarkMode} className="flex items-center mb-4 px-4 py-2  rounded-2xl bg-secondary  cursor-pointer hover:bg-secondary/70 transition-colors w-full">
                    {
                        theme === 'dark' ? <div className="flex items-center gap-2">
                         <FaSun/>
                         <span>Light Mode</span></div>: <div className="flex items-center gap-2">
                          <FaMoon className="mr-2" />
                          <span>Dark Mode</span>
                    </div>
                    }
                </button>

                {
                    user ?
                        <div className="flex items-center px-4 py-2 rounded cursor-pointer hover:bg-secondary transition-colors">
                            <FaUserCircle className="text-2xl mr-3" />
                            <div>
                                <div className="text-sm text-gray-500">View Profile</div>
                            </div>
                            <FaCog className="ml-auto" />
                        </div>
                        : <Link href='/login' className="w-full">
                             <Button className="w-full">Login</Button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Sidebar;