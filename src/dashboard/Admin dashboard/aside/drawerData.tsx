import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaUserCheck } from "react-icons/fa6";


export type DrawerData = {
    id: string;
    name: string;
    icon: React.ComponentType<{ size?: number }>;
    link: string;
}

export const adminDrawerData: DrawerData[] = [

    {
        id: "booking",
        name: "Booking",
        icon: FaTasks,
        link: "booking"
    },
    {
        id: "manageUsers",
        name: "manageUsers",
        icon: FiUsers,
        link: "manage-users"
    },
    {
        id: "profile",
        name: "Profile",
        icon: FaUserCheck,
        link: "profile"
    },
    {
        id: "aside",
        name: "aside",
        icon: TbBrandGoogleAnalytics,
        link: "aside"
    },

]