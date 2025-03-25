"use client";

import { BreadCrumbCustom } from "@/components/BreadCrumpCustom";
import PageWrapper from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Mail } from "lucide-react";
import Image from "next/image";
import ContactUsAnimation from "@/public/animation/ContactUsAnimation.json";
import dynamic from "next/dynamic";

export default function ContactForm() {
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
  return (
    <PageWrapper className=" pt-20 ">
      <div className=" max-w-[1280px] mx-auto">
        <BreadCrumbCustom
          currentPage={"contact us"}
          previousPages={[{ name: "HOME", url: "/" }]}
        />
        <h1 className=" py-10 text-center text-4xl font-bold  mb-4">
          GET IN TOUCH
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-6  h-full flex flex-col items-start justify-center">
            <div>
              <h2 className="  text-xl font-bold ">Your merch, made easy</h2>
              <p className="  text-base ">
                From startups to enterprise, we&apos;re here to help
              </p>
            </div>

            <div className="space-y-4 ml-10">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-newsecondary  p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="ml-5 flex-1 text- text-sm  font-semibold">
                  ALL-IN-ONE MERCH SUPPORT
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-newsecondary p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="ml-5 flex-1 text- text-sm  font-semibold">
                  DEDICATED EXPERTS
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-newsecondary  p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="ml-5 flex-1 text- text-sm  font-semibold">
                  FREE DESIGN ASSISTANCE
                </span>
              </div>
            </div>
            <div className=" w-full flex items-center justify-center">
              <div className=" w-[30%]">
                <Lottie animationData={ContactUsAnimation} loop={true} />
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-newsecondary rounded-3xl p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <label className="text-xs font-bold">Name</label>
                <Input className="bg-white rounded-full" />
              </div>
              <div>
                <label className="text-xs font-bold">Company</label>
                <Input className="bg-white rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold">Phone</label>
                <Input className="bg-white rounded-full" type="tel" />
              </div>
              <div>
                <label className="text-xs font-bold">Business Email</label>
                <Input className="bg-white rounded-full" type="email" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold">Message</label>
              <Textarea className="bg-white rounded-lg  resize-none h-32" />
            </div>

            <Button className="w-32 mx-auto block rounded-full bg-gray-800 hover:bg-gray-700">
              SUBMIT
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className=" flex items-center justify-center">
          <div className="mt-8  bg-newprimary w-[300px] px-10 rounded-full text-white  py-5 mb-10">
            <div className="">
              <div className=" flex flex-row  mb-3">
                <Mail className="w-6 h-6" />
                <div className="flex-1">
                  <h1 className="  w-full text-center text-xs font-semibold">
                    info@xpromo.com.au
                  </h1>
                </div>
              </div>
              <div className=" flex flex-row items-center">
                <div className="">
                  <Image
                    src="/nav/teliphone-white.png"
                    width={30}
                    height={30}
                    alt="phone"
                    className="w-6 h-6"
                  />
                </div>

                <div className="flex-1 ">
                  <h1 className="  text-center w-full italic text-xs font-semibold">
                    1300 123 456
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
