const LogPages = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly lg:justify-around h-screen bg-background md:p-4">
      <div className="mx-auto md:mx-0 p-3 text-center md:text-left">
        <h1 className="text-3xl font-medium">
          Welcome to <span className="font-extrabold">NextAura</span>
        </h1>
        <p className="text-gray-800">
          Sign in and start your journey with NextAura social media platform
        </p>
      </div>
      <div className="w-[90%] sm:w-[30%] md:w-[50%] lg:w-[30%] border px-8 py-10 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Login into NextAura</h3>
        <form action="" className="flex flex-col">
          <input
            type="email"
            placeholder="Email address"
            className="px-1 py-2 border border-gray-300 rounded-lg mb-2 bg-gray-100"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-1 py-2 border border-gray-300 rounded-lg mb-2 bg-gray-100"
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
          <input
            type="submit"
            value="Login"
            className="bg-blue-600 hover:bg-blue-800 transition-all duration-300 px-4 py-2 rounded-lg text-white font-bold w-full cursor-pointer"
          />
        </form>
        <p className="text-sm">
          Don't have an account?
          <span className="font-bold cursor-pointer">Register</span>
        </p>
        <div>
            <p className="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-400 before:me-6 after:flex-1 after:border-t after:border-gray-400 after:ms-6">Or Login with</p>
            <div className="flex gap-2">
              <button className="text-gray-800 bg-gray-100 hover:bg-gray-300 transition-all duration-300 px-4 py-2 rounded-lg font-bold w-full cursor-pointer border border-gray-300">Google</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default LogPages;
