import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HouseBackdrop from "./HouseBackdrop";

export default function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <HouseBackdrop />
      <Navbar />
      <main className="relative flex-1" style={{ zIndex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
