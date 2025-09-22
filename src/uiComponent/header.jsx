import { Button } from "../components/ui/button";
import { Globe, House, Sun, SunMedium } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { openDialog } from "../store/features/storySlice";
import { setCurrentPage } from "@/store/features/pageSlice";
import { Toggle } from "@/components/ui/toggle";
import { openEnterForm } from "@/store/features/enter";
import LiquidGlass from "liquid-glass-react";

export function Header() {
  const dispatch = useDispatch();

  const { isLoggedin } = useSelector((state) => state.login);
  const { currentPage } = useSelector((state) => state.page);

  return (
    <header className="fixed top-10 left-0 right-0">
      <div className="container mx-auto px-16 flex items-center justify-between p">
        <a href="/" className="text-2xl font-bold">
          console.life
        </a>

        <div className="flex gap-4">
          <Button
            onClick={() => {
              dispatch(setCurrentPage("home"));
            }}
            variant="ghost"
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border backdrop-blur-md transition
    ${
      currentPage === "home"
        ? "bg-white/10 border-white/20 shadow-xl hover:bg-white/20 hover:border-white/40 hover:shadow-md"
        : "bg-white/5 border-white/20 hover:bg-white/10"
    }`}
          >
            <House className="w-4 h-4" />
            Home
          </Button>

          <Button
            onClick={() => {
              dispatch(setCurrentPage("browser"));
            }}
            variant="ghost"
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border backdrop-blur-md transition
    ${
      currentPage === "browser"
        ? "bg-white/20 border-white/40 shadow-xl hover:bg-white/20 hover:border-white/40 hover:shadow-md"
        : "bg-white/5 border-white/20  hover:bg-white/10"
    }`}
          >
            <Globe className="w-4 h-4" />
            Browse
          </Button>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Toggle>
            <SunMedium />
          </Toggle>
          {isLoggedin ? (
            <Button>Log Out</Button>
          ) : (
            <Button
              className="flex items-center gap-2 px-6 py-3 rounded-lg border backdrop-blur-md transition bg-white/10 border-white/20 shadow-xl hover:bg-white/20 hover:border-white/40 hover:shadow-md"
              variant="ghost"
              onClick={() => dispatch(openEnterForm())}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
