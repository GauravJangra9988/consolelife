import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { closeLoginForm } from "@/store/features/loginSlice"
import { useDispatch, useSelector } from "react-redux"

export function LoginForm({
  className,
  ...props
}) {
  const dispatch = useDispatch();
  const {isLoginFormOpen} = useSelector((state) => state.login);

  const handleClose = () => {
    dispatch(closeLoginForm());
  };

  return (
    <Dialog open={isLoginFormOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[420px]">
        <div className={cn("flex flex-col gap-4", className)} {...props}>
          <div className="space-y-1">
            <DialogTitle className="text-xl">Login</DialogTitle>
            <DialogDescription className="text-sm">
              Enter your email below to login to your account
            </DialogDescription>
          </div>
          <form>
            <div className="flex flex-col gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="email" className="text-sm">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-1.5">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-sm">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-xs underline-offset-4 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-3 text-center text-xs">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
