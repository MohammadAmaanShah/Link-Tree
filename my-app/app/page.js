"use client";

import Image from "next/image";
import localFont from "next/font/local";

import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import Link from "next/link";
// import history from "@/components/linktree";
export const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--fonts-poppins",
  weight: "100 900",
});

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/add");
      const d = await res.json();
      setData(d.result);
    }
    load();
  }, []);

  const router = useRouter();
  const [text, setText] = useState("");

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };
  return (
    <>
      <section className="min-h-screen bg-[#d2e823] grid md:grid-cols-2  ">
        <div className=" text-green-600 flex items-start gap-4 flex-col justify-center md:px-20 py-5 px-3 pt-30 min-h-screen max-w-screen">
          <p
            className={`${poppins.className} md:text-6xl text-3xl text-[#254f1a]`}
          >
            A link in bio
            <br /> built for you.
          </p>
          <p className="  text-[#254f1a] font-semibold">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex gap-3 flex-col md:flex-row">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="h-10 px-3  bg-white text-black outline-none rounded-md"
              placeholder="Enter Your Link"
            />
            <button
              onClick={() => {
                createTree();
              }}
              className="bg-pink-400 rounded-full px-3 py-2 text-black font-semibold text-sm"
            >
              Claim your Linktree
            </button>
          </div>
          <hr className=" bg-[#254f1a] h-1 w-full rounded-md" />
          <div className="space-y-3  ">
            <p
              className={`${poppins.className} md:text-3xl text-3xl text-[#254f1a] underline`}
            >
              {/* {" "} */}
              {/* Your LinksTrees{" "} */}
            </p>
            {/* {data &&
              data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#254f1a]  px-3 py-1 rounded-md  text-white font-semibold underline "
                  >
                    <Link href={`/${item.handle}`}> {item.handle}</Link>
                  </div>
                );
              })} */}
          </div>
        </div>
        <div className="flex justify-center bg-[#254f1a]  ">
          <img src="home.png" className="max-h-[70%]  mt-25" />
        </div>
      </section>
    </>
  );
}
