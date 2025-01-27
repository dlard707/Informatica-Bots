import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const Navigation = () => {
  return (
    <>
      <Sidebar>
        <SidebarHeader className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Informática & Bots</h2>
            <SidebarTrigger>
              <Menu className="h-6 w-6" />
            </SidebarTrigger>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <nav className="space-y-2 p-4">
            <Link
              to="/"
              className="block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/4to-ano"
              className="block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              4to Año
            </Link>
            <Link
              to="/5to-ano"
              className="block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              5to Año
            </Link>
            <Link
              to="/6to-ano"
              className="block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              6to Año
            </Link>
            <Link
              to="/7mo-ano"
              className="block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              7mo Año
            </Link>
            <Link
              to="/8vo-ano"
              className="block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              8vo Año
            </Link>
          </nav>
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export default Navigation;