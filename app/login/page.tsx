import { Button } from "@/components/ui/button";
import Link from "next/link";

const LogPages = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly lg:justify-around h-screen bg-background md:p-4">
      <div className="mx-auto md:mx-0 p-3 text-center md:text-left">
        <h1 className="text-3xl font-medium">
          Welcome <span className="font-extrabold">Back</span>
        </h1>
        <p className="text-foreground/70">
          Sign in and start your journey with NextAura social media platform
        </p>
      </div>
      <div className="w-[90%] sm:w-[30%] md:w-[50%] lg:w-[30%] border px-8 py-10 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Login into NextAura</h3>
        <form action="" className="flex flex-col">
          <input
            type="email"
            placeholder="Email address"
            className="px-1 py-2 border border-border rounded-lg mb-2 bg-background"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-1 py-2 border border-border rounded-lg mb-2 bg-background"
          />
          <div className="flex md:flex-row justify-between mb-2">
            <div className="flex gap-1">
              <input type="checkbox" name="remember" />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </div>
            <span className="font-semibold cursor-pointer text-sm">
              Forgot Password?
            </span>
          </div>
          <Button className="cursor-pointer py-5 text-md">Log in</Button>
        </form>
        <p className="text-sm pt-2">
          Don't have an account?
          <Link href="/register" className="font-bold cursor-pointer text-primary">Register</Link>
        </p>
        <div>
            <p className="py-3 flex items-center text-sm text-foreground before:flex-1 before:border-t before:border-border before:me-6 after:flex-1 after:border-t after:border-border after:ms-6">
              Or Log In with
            </p>
            <div className="flex gap-2">
              <Button className="w-full py-5 text-md cursor-pointer bg-foreground hover:bg-foreground text-white dark:text-black">Google</Button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default LogPages;
