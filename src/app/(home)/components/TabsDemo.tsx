"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    {
      title: "E-Commerce",
      value: "ecommerce",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Simplemart - Fully functional e-commerce</p>
          <ImageContainer
            src="/images/best-projects/simplemart.png"
            href="https://mern-simple-mart.onrender.com/"
          />
        </div>
      )
    },
    {
      title: "Credmarg",
      value: "investment",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Bringing you Alternate investments</p>
          <ImageContainer
            src="/images/best-projects/credmarg.png"
            href="https://credmarg.com/"
          />
        </div>
      )
    },
    {
      title: "Genius",
      value: "ai",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Ai Generation</p>
          <ImageContainer
            src="/images/best-projects/genius.png"
            href="https://ai-saas-blush-ten.vercel.app/"
          />
        </div>
      )
    }
  ];

  return (
    <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-40 gap-10">
      <h2 className="font-bold text-4xl text-white">Best Project</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

function ImageContainer({ src, href }: { src: string; href: string }) {
  return (
    <Link href={href ?? ""} target="_blank">
      <Image
        src={src}
        alt="dummy image"
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto "
      />
    </Link>
  );
}
