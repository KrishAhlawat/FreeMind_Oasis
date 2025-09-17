"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      <img src="Group 237.png" alt="" className="absolute top-0 z-10" />
      <img src="Vector1.png" alt="" className="absolute -top-5" />

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Illustration */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center relative">
              <div className="relative">
                {/* Doctor Illustration Placeholder */}
                <div className="size-[35rem] relative -left-24">
                  <img
                    src="M5_16.png"
                    alt="Friendly doctor character"
                    className="w-full h-full object-contain z-30 relative"
                  />
                </div>
                <img
                  src="Vector3.png"
                  alt=""
                  className="absolute size-[35rem] -top-5 -right-5"
                />

                {/* Speech Bubble */}
                <div className="absolute top-16 text-xl right-0 bg-white rounded-2xl p-7 shadow-lg max-w-2xl">
                  <div className="text-gray-800 font-medium">
                    Hi there👋 Welcome <br /> to{" "}
                    <span className="text-[#fa793f] font-bold">
                      FreeMind Oasis!
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side - Sign Up Form */}
            <div className="z-50 relative lg:w-1/2 p-8 lg:p-12">
              <div className="max-w-md mx-auto z-50 relative">
                <h1 className="relative right-14 black-han-sans text-4xl font-bold text-[#fa793f] mb-8">
                  Sign Up
                </h1>

                <form className="space-y-6 text-2xl relative right-14">
                  {/* Email Field */}
                  <div>
                    <label className="block text-[#2c3e50] font-semibold mb-2 text-lg">
                      Enter Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-full h-14 px-4 border-2 border-[#e0e0e0] rounded-xl text-gray-600 placeholder:text-[#bdc3c7] focus:border-[#fa793f] focus:ring-0"
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-[#2c3e50] font-semibold mb-2 text-lg">
                      Enter Password
                    </label>
                    <Input
                      type="password"
                      placeholder="Enter Your Password"
                      className="w-full h-14 px-4 border-2 border-[#e0e0e0] rounded-xl text-gray-600 placeholder:text-[#bdc3c7] focus:border-[#fa793f] focus:ring-0"
                    />
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label className="block text-[#2c3e50] font-semibold mb-2 text-lg">
                      Confirm Password
                    </label>
                    <Input
                      type="password"
                      placeholder="Confirm Your Password"
                      className="w-full h-14 px-4 border-2 border-[#e0e0e0] rounded-xl text-gray-600 placeholder:text-[#bdc3c7] focus:border-[#fa793f] focus:ring-0"
                    />
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start space-x-3 pt-2">
                    <Checkbox
                      id="terms"
                      className="mt-1 border-2 border-[#bdc3c7] data-[state=checked]:bg-[#fa793f] data-[state=checked]:border-[#fa793f]"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-[#7f8c8d] leading-relaxed"
                    >
                      Creating an account means you're okay with our Terms of
                      Service, Privacy policy and default Notification Settings
                    </label>
                  </div>

                  {/* Sign Up Button */}
                  <Button
                    type="button"
                    className="left-36 relative z-50 w-32 h-14 bg-[#fa793f] hover:bg-[#e67e22] text-white font-semibold text-lg rounded-xl shadow-lg transition-colors duration-200 mt-8"
                    onClick={() => router.push("/registration")}
                  >
                    Sign Up
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
