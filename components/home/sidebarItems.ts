import { IoMdNotifications } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { FaBook } from "react-icons/fa";


interface SideBarItem {
    name:string,
    href:string,
    icon:React.ElementType
}


export const sideBarItems:SideBarItem[] = [
    {
        name:"notifications",
        href:'/notifications',
        icon:IoMdNotifications
    },
    {
        name:"Saved",
        href:'/saved',
        icon:FaSave
    },
    {
        name:"Study Plan",
        href:"/study-plan",
        icon:FaBook
    },

]