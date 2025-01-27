import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import CuartoAno from "./pages/CuartoAno";
import QuintoAno from "./pages/QuintoAno";
import SextoAno from "./pages/SextoAno";
import SeptimoAno from "./pages/SeptimoAno";
import OctavoAno from "./pages/OctavoAno";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/4to-ano" element={<CuartoAno />} />
                <Route path="/5to-ano" element={<QuintoAno />} />
                <Route path="/6to-ano" element={<SextoAno />} />
                <Route path="/7mo-ano" element={<SeptimoAno />} />
                <Route path="/8vo-ano" element={<OctavoAno />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;