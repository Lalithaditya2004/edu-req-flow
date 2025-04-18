
import { useState } from "react";
import { Bell, Menu, X, Users, BookUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen dark-gradient">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full glass border-border/40">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-foreground hover:bg-secondary"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <h1 className="text-xl font-semibold text-foreground">Requirements Portal</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-secondary">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-secondary">
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform glass border-r border-border/40 transition-transform duration-200 ease-in-out",
          !sidebarOpen && "-translate-x-full"
        )}
      >
        <nav className="space-y-2 p-4">
          <Link to="/dashboard">
            <Button 
              variant="ghost" 
              className={cn(
                "w-full justify-start text-foreground hover:bg-secondary",
                location.pathname === "/dashboard" && "bg-secondary"
              )}
            >
              Dashboard
            </Button>
          </Link>
          <Link to="/requests/new">
            <Button 
              variant="ghost" 
              className={cn(
                "w-full justify-start text-foreground hover:bg-secondary",
                location.pathname === "/requests/new" && "bg-secondary"
              )}
            >
              New Request
            </Button>
          </Link>
          <Link to="/faculty/dashboard">
            <Button 
              variant="ghost" 
              className={cn(
                "w-full justify-start text-foreground hover:bg-secondary",
                location.pathname === "/faculty/dashboard" && "bg-secondary"
              )}
            >
              <BookUser className="mr-2 h-4 w-4" />
              Faculty Dashboard
            </Button>
          </Link>
          <Link to="/admin/dashboard">
            <Button 
              variant="ghost" 
              className={cn(
                "w-full justify-start text-foreground hover:bg-secondary",
                location.pathname === "/admin/dashboard" && "bg-secondary"
              )}
            >
              <Users className="mr-2 h-4 w-4" />
              Admin Dashboard
            </Button>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "min-h-[calc(100vh-4rem)] transition-all duration-200 ease-in-out",
          sidebarOpen ? "ml-64" : "ml-0",
          "pt-16 px-4"
        )}
      >
        <div className="container mx-auto py-6 animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
