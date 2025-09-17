"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function RegistrationPanel() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    clientName: "",
    age: "",
    college: "",
    year: "",
    sex: "",
    graduatingYear: "2027",
    campusLivingStatus: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    // Store client name in localStorage
    if (id === "clientName") {
      localStorage.setItem("clientName", value);
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      {/* Main Content */}
      <img
        src="side.png"
        alt=""
        className="absolute -left-22 -top-20 z-50 h-[115%]"
      />
      <div className="max-w-6xl container ml-[21.25rem] px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="black-han-sans text-5xl font-bold text-[#fa793f] tracking-wider">
            REGISTRATION PANEL
          </h1>
        </div>

        {/* Form Sections */}
        <div className="inter grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20 z-20 relative">
          {/* Left Section */}
          <div className="border-2 border-dashed border-[#fa793f] p-8 rounded-lg bg-transparent">
            <div className="space-y-6">
              {/* Client Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="clientName"
                  className="text-sm font-medium text-[#666666] uppercase tracking-wide"
                >
                  CLIENT NAME
                </Label>
                <Input
                  id="clientName"
                  placeholder="Type here"
                  className="border-[#c4c4c4] focus:border-[#7a5cfa] focus:ring-[#7a5cfa]"
                  value={formData.clientName}
                  onChange={handleInputChange}
                />
                <p className="text-xs text-[#666666]">Assistive Text</p>
              </div>

              {/* Enter Your Age */}
              <div className="space-y-2">
                <Label
                  htmlFor="age"
                  className="text-sm font-medium text-[#666666] uppercase tracking-wide"
                >
                  ENTER YOUR AGE
                </Label>
                <Input
                  id="age"
                  placeholder="Age in years"
                  className="border-[#c4c4c4] focus:border-[#7a5cfa] focus:ring-[#7a5cfa]"
                  value={formData.age}
                  onChange={handleInputChange}
                />
                <p className="text-xs text-[#666666]">Assistive Text</p>
              </div>

              {/* Enter Name of Your College */}
              <div className="space-y-2">
                <Label
                  htmlFor="college"
                  className="text-sm font-medium text-[#666666] uppercase tracking-wide"
                >
                  ENTER NAME OF YOUR COLLEGE
                </Label>
                <div className="relative">
                  <Input
                    id="college"
                    placeholder="Name of college"
                    className="border-[#c4c4c4] focus:border-[#7a5cfa] focus:ring-[#7a5cfa]"
                    value={formData.college}
                    onChange={handleInputChange}
                  />
                  <p className="text-xs text-[#666666]">Assistive Text</p>
                </div>
              </div>

              {/* Which Year Are You In */}
              <div className="space-y-2">
                <Label
                  htmlFor="year"
                  className="text-sm font-medium text-[#666666] uppercase tracking-wide"
                >
                  WHICH YEAR ARE YOU IN?
                </Label>
                <Input
                  id="year"
                  placeholder="Current study year"
                  className="border-[#c4c4c4] focus:border-[#7a5cfa] focus:ring-[#7a5cfa]"
                  value={formData.graduatingYear}
                  onChange={handleInputChange}
                />
                <p className="text-xs text-[#666666]">Assistive Text</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="border-2 border-dashed border-[#fa793f] p-8 rounded-lg bg-transparent">
            <div className="space-y-6">
              {/* Sex */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-[#666666] uppercase tracking-wide">
                  SEX
                </Label>
                <Select
                  value={formData.sex}
                  onValueChange={(value) => handleSelectChange("sex", value)}
                >
                  <SelectTrigger className="text-black w-full border-[#c4c4c4] focus:border-[#7a5cfa] focus:ring-[#7a5cfa]">
                    <SelectValue placeholder="Dropdown option" />
                  </SelectTrigger>
                  <SelectContent className="w-full z-50 bg-white text-black">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Graduating Year */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-[#666666] uppercase tracking-wide">
                  GRADUATING YEAR
                </Label>
                <Select
                  defaultValue="2027"
                  value={formData.graduatingYear}
                  onValueChange={(value) =>
                    handleSelectChange("graduatingYear", value)
                  }
                >
                  <SelectTrigger className="text-black w-full border-[#c4c4c4] focus:border-[#7a5cfa] focus:ring-[#7a5cfa]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="w-full z-50 bg-white text-black">
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                    <SelectItem value="2028">2028</SelectItem>
                    <SelectItem value="2029">2029</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Campus Living Status */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-[#666666] uppercase tracking-wide">
                  CAMPUS LIVING STATUS
                </Label>
                <div className="relative">
                  <Select
                    value={formData.campusLivingStatus}
                    onValueChange={(value) =>
                      handleSelectChange("campusLivingStatus", value)
                    }
                  >
                    <SelectTrigger className="text-black w-full border-[#c4c4c4] focus:border-[#7a5cfa] focus:ring-[#7a5cfa]">
                      <SelectValue placeholder="Select One" />
                    </SelectTrigger>
                    <SelectContent className="w-full z-50 bg-white text-black">
                      <SelectItem
                        value="hostler"
                        className="bg-[#fa793f] text-white font-medium data-[highlighted]:bg-[#fa793f] data-[highlighted]:text-white"
                      >
                        HOSTLER
                      </SelectItem>
                      <SelectItem value="day-scholar">DAY SCHOLAR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0">
        <img src="Vector5.png" alt="" className="absolute -bottom-14 left-20" />

        {/* Next Button */}
        <div className="absolute bottom-8 left-[58rem] transform -translate-x-1/2">
          <Button
            onClick={() => router.push("/role")}
            className="bg-[#fa793f] hover:bg-[#fa793f]/90 text-white p-6 rounded-lg font-medium text-xl"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
