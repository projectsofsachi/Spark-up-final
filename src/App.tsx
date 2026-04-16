import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Register from "./pages/Register.tsx";
import RegisterThankYou from "./pages/RegisterThankYou.tsx";
import Events from "./pages/Events.tsx";
import Glimpses from "./pages/Glimpses.tsx";
import Team from "./pages/Team.tsx";
import SkillUpgrade from "./pages/SkillUpgrade.tsx";
import SkillUpgradeLogin from "./pages/SkillUpgradeLogin.tsx";
import SkillUpgradeSignup from "./pages/SkillUpgradeSignup.tsx";
import SkillUpgradeDashboard from "./pages/SkillUpgradeDashboard.tsx";
import Rulebook from "./pages/Rulebook.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/thankyou" element={<RegisterThankYou />} />
          <Route path="/events" element={<Events />} />
          <Route path="/rulebook/:eventSlug" element={<Rulebook />} />
          <Route path="/glimpses" element={<Glimpses />} />
          <Route path="/team" element={<Team />} />
          <Route path="/skill-upgrade" element={<SkillUpgrade />} />
          <Route path="/skill-upgrade/login" element={<SkillUpgradeLogin />} />
          <Route path="/skill-upgrade/signup" element={<SkillUpgradeSignup />} />
          <Route path="/skill-upgrade/dashboard" element={<SkillUpgradeDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
