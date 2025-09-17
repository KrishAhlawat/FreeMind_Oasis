"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Video, BarChart3 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#ffffff] overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between p-6 relative z-10">
        <div className="flex items-center gap-3">
          <span className="text-white text-lg">
            <img
              src="image 21.svg"
              className="size-48 relative -top-8 -left-8"
            />
          </span>
          <h1 className="amita absolute left-24 top-8 text-4xl !font-extrabold text-[#000000]">
            FreeMind Oasis
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="absolute inset-0">
        {/* Orange Gradient Background */}
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <img src="group.png" alt="" />
        </div>

        <img
          src="Vector.png"
          alt=""
          className="absolute size-96 top-56 left-0"
        />

        <div className="relative z-10 flex items-center min-h-[calc(100vh-120px)]">
          {/* Left Side - Character and Feature Cards */}
          <div className="flex-1 relative">
            {/* 3D Character */}
            <div className="relative w-full h-[40rem] top-24 -left-32">
              <img
                src="m5.png"
                alt="Professional counselor character"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute top-16 right-8 space-y-4">
              <Card className="p-4 bg-white shadow-lg border-0 w-72 relative top-20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#000000] rounded flex items-center justify-center">
                    <Video className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#000000] text-sm">
                      Video Consultation with
                    </p>
                    <p className="font-semibold text-[#000000] text-sm">
                      Professional Counsellors.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-white shadow-lg border-0 w-72 relative top-44">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#000000] text-lg">
                      5,000+ Counsellors
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 fill-[#febb43] text-[#febb43]" />
                      <span className="text-sm text-[#000000] font-medium">
                        4.5
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="absolute bottom-16 right-16">
              <Card className="p-4 bg-white shadow-lg border-0 w-72 relative -top-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#000000] rounded flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#000000] text-sm">
                      Keep track of your
                    </p>
                    <p className="font-semibold text-[#000000] text-sm">
                      mental health.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Side - Main Content */}
          <div className="flex-1 pl-8 pr-16">
            <div className="max-w-lg">
              <h2 className="text-5xl font-bold text-[#1f263e] leading-tight mb-6">
                Your Mental Wellness,{" "}
                <span className="block">Just One Click Away</span>
              </h2>

              <p className="text-lg text-[#2c3e50] mb-8 leading-relaxed">
                Schedule appointments, view your mental health records, and
                consult top healthcare providers - all in one seamless platform.
              </p>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-[#1f263e] hover:bg-[#2c3e50] text-white px-8 py-3 rounded-lg font-semibold"
                  onClick={() => router.push("/sign-up")}
                >
                  Sign Up
                </Button>
                <Button
                  size="lg"
                  className="bg-[#fa793f] hover:bg-[#febb43] text-white px-8 py-3 rounded-lg font-semibold"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
          <img
            src="Group 236.png"
            alt=""
            className="absolute top-[25rem] -z-10 opacity-65 left-20"
          />
        </div>
      </div>
    </div>
  );
}
