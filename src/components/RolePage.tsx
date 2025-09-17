"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RoleSelection() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState("");
  const handleNext = () => {
    //if user clicks on the student card, then redirect to /student, if counsellor then /counsellor, if volunteer then /volunteer
    if (selectedRole === "student") {
      router.push("/student");
    } else if (selectedRole === "counsellor") {
      router.push("/counsellor");
    } else if (selectedRole === "volunteer") {
      router.push("/volunteer");
    } else {
      alert("Please select a role to proceed.");
    }
  };
  return (
    <div className="min-h-screen bg-[#2c3e50] relative overflow-hidden">
      {/* Decorative rocket */}
      <div className="absolute left-8 top-20">
        <img
          src="image 21.png"
          alt="Rocket ship"
          className="w-[32rem] h-[32rem] relative z-20 -top-40 right-16"
        />
      </div>

      {/* Decorative clouds */}
      <div className="absolute right-8 top-16">
        <img
          src="image 28.png"
          alt="Cloud"
          className="w-40 h-24 relative right-32 -top-10"
        />
      </div>
      <div className="absolute right-6 top-28">
        <img
          src="image 28.png"
          alt="Cloud"
          className="w-60 h-36 relative top-8 right-8 z-20"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8">
        {/* Title */}
        <h1 className="black-han-sans text-[#fa793f] text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Choose Your Role To Get Started
        </h1>

        {/* Role cards container */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl w-full mb-12">
          {/* Student Card */}
          <div
            onClick={() => setSelectedRole("student")}
            className={`bg-[#ed374d] rounded-3xl z-30 p-8 flex-1 relative max-h-[450px] flex flex-col justify-between cursor-pointer transition-all duration-200 ${
              selectedRole === "student"
                ? "ring-4 ring-white ring-opacity-50"
                : ""
            }`}
          >
            <div>
              <img src="01.png" alt="" />
              <h2 className="relative -top-10 pacifico text-[#000000] text-3xl font-bold mb-6 font-serif text-center">
                Student
              </h2>
              <p className="relative -top-10 inter text-[#000000] text-lg leading-relaxed text-left">
                Access personalized mental health resources, book counselling
                sessions, track your progress, and find a safe space to share
                your feelings.
              </p>
            </div>
            <div className="absolute bottom-4 right-4">
              <img
                src="image 67.png"
                alt="Student character"
                className="w-48 h-80 relative top-40 left-28 z-30"
              />
            </div>
          </div>

          {/* Counsellor Card */}
          <div
            onClick={() => setSelectedRole("counsellor")}
            className={`relative top-10 bg-[#fa793f] rounded-3xl p-8 flex-1 max-h-[450px] flex flex-col justify-between cursor-pointer transition-all duration-200 ${
              selectedRole === "counsellor"
                ? "ring-4 ring-white ring-opacity-50"
                : ""
            }`}
          >
            <div>
              <img src="02.png" alt="" />
              <h2 className="relative -top-10 text-center pacifico text-[#000000] text-3xl font-bold mb-6 font-serif">
                Counsellor
              </h2>
              <p className="relative -top-10 inter text-[#000000] text-lg leading-relaxed text-center">
                Provide professional psychological support to students through
                scheduled consultations, maintain case notes, and track student
                progress over time.
              </p>
            </div>
            <div className="absolute bottom-4 right-4">
              <img
                src="meow.png"
                alt="Counsellor character"
                className="w-56 h-80 relative left-36 z-30 top-20"
              />
            </div>
          </div>

          {/* Volunteer Card */}
          <div
            onClick={() => setSelectedRole("volunteer")}
            className={`bg-[#f7f651] rounded-3xl p-8 flex-1 relative max-h-[450px] flex flex-col justify-between cursor-pointer transition-all duration-200 ${
              selectedRole === "volunteer"
                ? "ring-4 ring-white ring-opacity-50"
                : ""
            }`}
          >
            <div>
              <img src="03.png" alt="" className="" />
              <h2 className="relative -top-10 text-center pacifico text-[#000000] text-3xl font-bold mb-6 font-serif">
                Volunteer
              </h2>
              <p className="relative -top-10 inter text-[#000000] text-lg leading-relaxed text-right">
                Offer empathetic listening, peer support, and mental health
                awareness while guiding students to professional help when
                needed.
              </p>
            </div>
          </div>
        </div>

        {/* Done button */}
        <Button
          onClick={handleNext}
          className="relative top-10 bg-[#fa793f] hover:bg-[#e6692d] text-[#ffffff] p-6 rounded-lg text-xl font-semibold border-none"
        >
          Done
        </Button>
      </div>
    </div>
  );
}
