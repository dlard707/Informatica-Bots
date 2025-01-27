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
            <h2 className="text-lg font-semibold text-primary">Informática & Bots</h2>
            <SidebarTrigger>
              <Menu className="h-8 w-8 text-primary hover:text-primary/80 transition-colors cursor-pointer" />
            </SidebarTrigger>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <nav className="space-y-2 p-4">
            <Link
              to="/"
              className="block px-4 py-2 rounded-md hover:bg-accent transition-colors text-foreground hover:text-accent-foreground"
            >
              Home
            </Link>
            <Link
              to="/4to-ano"
              className="block px-4 py-2 rounded-md hover:bg-accent transition-colors text-foreground hover:text-accent-foreground"
            >
              4to Año
            </Link>
            <Link
              to="/5to-ano"
              className="block px-4 py-2 rounded-md hover:bg-accent transition-colors text-foreground hover:text-accent-foreground"
            >
              5to Año
            </Link>
            <Link
              to="/6to-ano"
              className="block px-4 py-2 rounded-md hover:bg-accent transition-colors text-foreground hover:text-accent-foreground"
            >
              6to Año
            </Link>
            <Link
              to="/7mo-ano"
              className="block px-4 py-2 rounded-md hover:bg-accent transition-colors text-foreground hover:text-accent-foreground"
            >
              7mo Año
            </Link>
            <Link
              to="/8vo-ano"
              className="block px-4 py-2 rounded-md hover:bg-accent transition-colors text-foreground hover:text-accent-foreground"
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