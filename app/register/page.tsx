import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly lg:justify-around h-screen bg-background md:p-4">
      <div className="mx-auto md:mx-0 p-3 text-center md:text-left">
        <h1 className="text-3xl font-medium">
          Welcome to <span className="font-extrabold">NextAura</span>
        </h1>
        <p className="text-foreground/70">
          Sign in and start your journey with NextAura social media platform
        </p>
      </div>
      <div className="w-[90%] sm:w-[30%] md:w-[50%] lg:w-[30%] border px-8 py-10 rounded-2xl">
        <h3 className="text-2xl font-bold">Create an account</h3>
        <p className="mb-4 text-foreground/70">
          Already have an account?
          <Link href="/login" className="font-bold cursor-pointer text-primary">Log in</Link>
        </p>
        <form action="" className="flex flex-col">
          <label
            htmlFor=""
            className="flex flex-col lg:flex-row lg:gap-2 w-full items-center justify-between"
          >
            <input
              type="text"
              placeholder="Name"
              className="px-1 py-2 border border-border rounded-lg mb-2 bg-background w-full"
            />
          </label>
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
          <div className="flex md:flex-row gap-1 mb-4">
            <div className="flex gap-1">
              <input type="checkbox" name="terms" />
              <label htmlFor="terms" className="text-sm">
                I agree to the
              </label>
            </div>
            <span className="font-semibold cursor-pointer text-sm">
              terms & conditions
            </span>
          </div>
          <Button className="py-5 text-md cursor-pointer">create Account</Button>
        </form>
        <div>
          <p className="py-3 flex items-center text-sm text-foreground before:flex-1 before:border-t before:border-border before:me-6 after:flex-1 after:border-t after:border-border after:ms-6">
            Or register with
          </p>
          <div className="flex gap-2">
            <Button className="w-full py-5 text-md cursor-pointer bg-foreground hover:bg-foreground text-white dark:text-black">Google</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
