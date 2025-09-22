import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { StoryDialog } from "./uiComponent/StoryDialog";
import { useDispatch, useSelector } from "react-redux";
import { openDialog } from "./store/features/storySlice";
import { setCurrentPage } from "./store/features/pageSlice";
import { openEnterForm } from "./store/features/enter";
import { EnterForm } from "./components/enter";
import bgpic from "./assets/bgpic.png";
import LiquidGlass from "liquid-glass-react";


export function Home() {
  const dispatch = useDispatch();
  const { isDialogOpen } = useSelector((state) => state.story);
  const { isLoggedin } = useSelector((state) => state.login);

  const [Hover, setHover] = useState(false);

  return (
    <div
      style={{ backgroundImage: `url(${bgpic})` }}
      className={`h-screen bg-cover bg-center w-full flex items-center justify-center flex-col transition-all duration-100 ${
        isDialogOpen ? "blur-sm" : ""
      }`}
    >
      <div className="mb-4 -mt-28 text-green-900 rounded-full px-4 py-2 border border-white/30 bg-white/10 backdrop-blur-md shadow-xl">
        Anonymous. Authentic. Real.
      </div>

      <div className="flex align-center items-center flex-col justify-center mb-8">
        <h1 className="scroll-m-20 text-center text-6xl font-extrabold tracking-tight text-balance mb-4">
          console.life
        </h1>

        <p className="text-xl text-black text-muted-foreground max-w-xl text-center">
          Real stories from real developers. No profiles. No bias.
          <br />
          Just authentic experiences from the trenches of code.
        </p>
      </div>
      <div className="flex gap-4 flex-row">
        <Button
          className="px-6 py-6 rounded-xl text-md border border-white/20 bg-white/5 backdrop-blur-sm shadow-lg hover:bg-white/20 hover:shadow-xl transition"
          variant="ghost"
          size="lg"
          onClick={
            isLoggedin
              ? () => dispatch(openDialog())
              : () => dispatch(openEnterForm())
          }
        >
          Share your story
        </Button>
        <Button
          onClick={() => dispatch(setCurrentPage("browser"))}
          variant="ghost"
          size="lg"
          className="px-6 py-6 rounded-xl text-md border border-white/20 bg-white/5 backdrop-blur-sm shadow-lg hover:bg-white/20 hover:shadow-xl transition"
        >
          Read stories
        </Button>
      </div>

      <StoryDialog />

      <div className="w-full max-w-sm">
        <EnterForm />
      </div>
    </div>
  );
}
