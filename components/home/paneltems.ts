import { FaBookOpen, FaChartLine } from "react-icons/fa";
import { MdCheckCircleOutline, MdOutlineCircle } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { GiAtom, GiSpellBook } from "react-icons/gi";
import { IoLanguageOutline } from "react-icons/io5";


export  const exploreItems = [
    { icon: FaBookOpen, label: "All Problems", color: "text-blue-400" },
    { icon: FaChartLine, label: "Trending", color: "text-yellow-400" },
    { icon: MdCheckCircleOutline, label: "Solved", color: "text-green-400" },
    { icon: MdOutlineCircle, label: "Unsolved", color: "text-purple-400" },
  ];

 export  const categoryItems = [
    { icon: BsCodeSlash, label: "Programming", color: "text-cyan-400" },
    { icon: MdOutlineCircle, label: "Mathematics", color: "text-amber-400" },
    { icon: IoLanguageOutline, label: "English", color: "text-indigo-400" },
    { icon: MdOutlineCircle, label: "Physics", color: "text-blue-400" },
    { icon: FaBookOpen, label: "General", color: "text-green-400" },
  ];