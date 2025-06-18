import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { StoryDialog } from "./uiComponent/StoryDialog";
import { useDispatch, useSelector } from "react-redux";
import { openDialog } from "./store/features/storySlice";
import { setCurrentPage } from "./store/features/pageSlice";
import { openLoginForm } from "./store/features/loginSlice";
import { LoginForm } from "./components/login-form";


export function Home() {
  const dispatch = useDispatch();
  const { isDialogOpen } = useSelector((state) => state.story);
  const {isLoggedin} = useSelector((state)=> state.login)

  const [Hover, setHover] = useState(false);

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center flex-col transition-all duration-100 ${
        isDialogOpen ? "blur-sm" : ""
      }`}
    >
      <div className="mb-4 border rounded-full px-2 py-1">
        Anonymous. Authentic. Real.
      </div>
      <div className="flex align-center items-center flex-col justify-center mb-8">
        <h1 className="scroll-m-20 text-center text-6xl font-extrabold tracking-tight text-balance mb-2">
          console.log
        </h1>
        <h2
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`tscroll-m-20 text-center text-4xl font-extrabold ${
            Hover ? "tracking-widest" : "tracking-tight"
          } transition-all duration-100 text-balance mb-4`}
        >
          Log your Dev journey
        </h2>
        <p className="text-xl text-muted-foreground max-w-xl text-center">
          Real stories from real developers. No profiles. No bias. Just
          authentic experiences from the trenches of code.
        </p>
      </div>
      <div className="flex gap-4 flex-row">
        <Button
          size="lg"
          className="px-8 py-6 rounded-xl"
          onClick={isLoggedin ? () => dispatch(openDialog()) : () => dispatch(openLoginForm())}
        >
          Share your story
        </Button>
        <Button
          onClick={() => dispatch(setCurrentPage("browser"))}
          variant="outline"
          size="lg"
          className="px-8 py-6 rounded-xl"
        >
          Read stories
        </Button>
      </div>

      <StoryDialog />
      
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    
    </div>
  );
}
