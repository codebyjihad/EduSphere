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
    { name: "Home", icon: <FaHome />, url: "/" },,
    { name: "Notifications", icon: <FaBell />, url: "/notifications" },
     { name: "Messages", icon: <FaEnvelope />, url: "/messages" },
];

const Sidebar = () => {

    const [user, setUser] = useState<boolean>(true)
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
                        <Link
                            key={index}
                            href={item.url}
                            className="flex items-center px-6 py-3 hover:bg-secondary transition-colors"
                        >
                            <span className="text-xl mr-4">{item.icon}</span>
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="p-6 border-t border-border">
                   {
                    user ?
                        <div className="flex items-center px-4 py-2 rounded cursor-pointer hover:bg-secondary transition-colors">
                            <FaUserCircle className="text-2xl mr-3" />
                            <div className="flex items-center gap-2"> 
                                <div className="text-sm text-gray-500">View Profile</div>
                                <Link href='/profile'> <FaCog className="ml-auto" /></Link>
                            </div>
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