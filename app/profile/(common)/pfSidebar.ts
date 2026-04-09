import { IconType } from "react-icons";

import { MdOutlineAccountCircle } from "react-icons/md";
import { FaUserFriends, FaCookie, FaLock, FaBell, FaLanguage, FaSave } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
import { IoLogoIonitron } from "react-icons/io";
import { MdPrivacyTip, MdHelpOutline, MdHistory } from "react-icons/md";


export type ProfileItem = {
  id: number;
  name: string;
  href: string;
  icone: IconType;
};


export const ProfileData: ProfileItem[] = [
  {
    id: 1,
    name: "My Account",
    href: "/profile/setting",
    icone: MdOutlineAccountCircle,
  },
  {
    id: 2,
    name: "Friends",
    href: "/profile/setting/friends",
    icone: FaUserFriends,
  },
  {
    id: 3,
    name: "Blocked Account",
    href: "/profile/setting/blocked_account",
    icone: ImBlocked,
  },
  {
    id: 4,
    name: "Themes",
    href: "/profile/setting/themes",
    icone: FaCookie,
  },
  {
    id: 5,
    name: "Nitro",
    href: "/profile/setting/nitro",
    icone: IoLogoIonitron,
  },
  {
    id: 6,
    name: "Personal Details",
    href: "/profile/setting/personal_details",
    icone: MdOutlineAccountCircle,
  },
  {
    id: 7,
    name: "Security",
    href: "/profile/setting/security",
    icone: FaLock,
  },
  {
    id: 8,
    name: "Privacy",
    href: "/profile/setting/privacy",
    icone: MdPrivacyTip,
  },
  {
    id: 9,
    name: "Language",
    href: "/profile/setting/language",
    icone: FaLanguage,
  },
  {
    id: 10,
    name: "Help & Support",
    href: "/profile/setting/help",
    icone: MdHelpOutline,
  },
  {
    id: 11,
    name: "Activity Log",
    href: "/profile/setting/activity",
    icone: MdHistory,
  },
  {
    id: 12,
    name: "Saved",
    href: "/profile/setting/saved",
    icone: FaSave,
  },
];