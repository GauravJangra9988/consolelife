import { Button } from "../components/ui/button";
import { Globe, House, Sun, SunMedium } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { openDialog } from "../store/features/storySlice";
import { setCurrentPage } from "@/store/features/pageSlice";
import { Toggle } from "@/components/ui/toggle";
import { openEnterForm } from "@/store/features/enter";

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
            variant={currentPage === "home" ? "default" : "outline"}
          >
            <House />
            Home
          </Button>
          <Button
            onClick={() => {
              dispatch(setCurrentPage("browser"));
            }}
            variant={currentPage === "browser" ? "default" : "outline"}
          >
            <Globe />
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
            <Button onClick={() => dispatch(openEnterForm())}>Login</Button>
          )}
        </div>
      </div>
    </header>
  );
}
