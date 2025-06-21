import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  closeEnterForm,
  setLoggedinStatus,
  setFormRegister,
} from "@/store/features/enter";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export function EnterForm({ className, ...props }) {
  const dispatch = useDispatch();
  const { isEnterFormOpen, isRegisterFormOpen } = useSelector(
    (state) => state.login
  );

  const handleClose = () => {
    dispatch(closeEnterForm());
    dispatch(setFormRegister(false));
  };

  const handleEnter = (e) => {
    e.preventDefault();
    console.log(enterData);
  };

  const [enterData, setEnterData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEnterData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <Dialog open={isEnterFormOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[420px]">
        <div className={cn("flex flex-col gap-4", className)} {...props}>
          <div className="space-y-1">
            <DialogTitle className="text-xl">
              {isRegisterFormOpen ? "Register" : "Login"}
            </DialogTitle>
            <DialogDescription className="text-sm">
              {isRegisterFormOpen
                ? "Enter your email below to register your account"
                : "Enter your email below to login to your account"}
            </DialogDescription>
          </div>
          <form onSubmit={handleEnter}>
            <div className="flex flex-col gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="email" className="text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  value={enterData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-1.5">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-sm">
                    Password
                  </Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={enterData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              {isRegisterFormOpen ? (
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              ) : (
                <Button type="submit" className="w-full">
                  Login
                </Button>
              )}
            </div>
            {isRegisterFormOpen ? (
              <div className="mt-3 text-center text-xs">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    dispatch(setFormRegister(false));
                  }}
                  className="underline underline-offset-4"
                >
                  Login
                </span>
              </div>
            ) : (
              <div className="mt-3 text-center text-xs">
                Don&apos;t have an account?{" "}
                <span
                  onClick={() => {
                    dispatch(setFormRegister(true));
                  }}
                  className="underline underline-offset-4"
                >
                  Sign up
                </span>
              </div>
            )}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
