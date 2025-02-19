import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Coffee } from "./pages/coffee";
import { Pizza } from "./pages/pizza";
import { SillyHeader } from "./components/silly-header";
import { SillyFooter } from "./components/silly-footer";

const Routes = () => (
  <div className="flex min-h-screen flex-col">
    <SillyHeader />
    <main className="flex-1">
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/pizza" element={<Pizza />} />
      </RouterRoutes>
    </main>
    <SillyFooter />
  </div>
);

export { Routes };