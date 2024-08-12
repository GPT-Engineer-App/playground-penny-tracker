import { Home, DollarSign, PiggyBank, CheckSquare } from "lucide-react";
import Index from "./pages/Index.jsx";
import Expenses from "./pages/Expenses.jsx";
import Fundraising from "./pages/Fundraising.jsx";
import Tasks from "./pages/Tasks.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Expenses",
    to: "/expenses",
    icon: <DollarSign className="h-4 w-4" />,
    page: <Expenses />,
  },
  {
    title: "Fundraising",
    to: "/fundraising",
    icon: <PiggyBank className="h-4 w-4" />,
    page: <Fundraising />,
  },
  {
    title: "Tasks",
    to: "/tasks",
    icon: <CheckSquare className="h-4 w-4" />,
    page: <Tasks />,
  },
];
