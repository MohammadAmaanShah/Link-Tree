"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
const Generate = () => {
  const searchParams = useSearchParams();

  const [links, setLinks] = useState([{ link: "", linktext: "" }]);

  const [handle, sethandle] = useState(searchParams.get("handle"));
  const [pic, setpic] = useState("");
  const [desc, setdesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };
  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };
  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      link: links,
      pic: pic,
      handle: handle,
      desc: desc,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let r = await fetch("http://localhost:3000/api/add", requestOptions);

    const result = await r.json();
    if (result.success) {
      toast.success(result.message);
      setpic("");
      sethandle("");
      setLinks([{ link: "", linktext: "" }]);
    } else {
      toast.error(result.message, "wegwe");
    }
  };
  return (
    <div className="bg-[#E9C0E9] min-h-screen  w-100%  grid  md:grid-cols-2 grid-cols-1">
      <div className=" flex justify-center items-center flex-col  text-gray-600 pt-30 pb-15 px-10  ">
        <div className=" flex w-full flex-col backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl md:px-5 px-2  ">
          <h1 className="font-bold  text-3xl text-center">
            Create your LinkTree
          </h1>
          <div className="item">
            <h2 className="font-semibold text-xl">Step 1: Claim your Handle</h2>
            <div className="mx-4">
              <input
                value={handle || ""}
                onChange={(e) => {
                  sethandle(e.target.value);
                }}
                className="px-4 py-2 my-1 focus:outline-pink-500 rounded-full  bg-white"
                type="text"
                placeholder="Choose a Handle"
              />
            </div>
          </div>
          <div className="item">
            <h2 className="font-semibold text-xl ">Step 2: Add Links</h2>
            {links &&
              links.map((item, index) => {
                return (
                  <div key={index} className="mx-4">
                    <input
                      value={item.linktext || ""}
                      onChange={(e) => {
                        handleChange(index, item.link, e.target.value);
                      }}
                      className="px-4 py-2  my-1 mr-2 focus:outline-pink-500 rounded-full bg-white"
                      type="text"
                      placeholder={` Enter link text ${index + 1}`}
                    />
                    <input
                      value={item.link || ""}
                      onChange={(e) => {
                        handleChange(index, e.target.value, item.linktext);
                      }}
                      className="px-4 py-2  my-1 focus:outline-pink-500 rounded-full bg-white"
                      type="text"
                      placeholder="Enter link"
                    />
                    <hr className="bg-white h-0.5 rounded-full my-1 w-full outline-0 border-0" />
                  </div>
                );
              })}
            <button
              onClick={() => addLink()}
              className="p-5  mx-4 py-2 my-3 bg-slate-900 text-white font-bold rounded-3xl"
            >
              + Add Link
            </button>
          </div>

          <div className="item">
            <h2 className="font-semibold text-xl">
              Step 3: Add Picture and Description
            </h2>
            <div className="mx-4 flex flex-col">
              <input
                value={pic || ""}
                onChange={(e) => {
                  setpic(e.target.value);
                }}
                className="px-4 py-2  my-1 focus:outline-pink-500 rounded-full bg-white"
                type="text"
                placeholder="Enter link to your Picture"
              />
              <input
                value={desc || ""}
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
                className="px-4 py-2  my-1 focus:outline-pink-500 rounded-full bg-white"
                type="text"
                placeholder="Enter description"
              />
              <button
                disabled={pic == "" || handle == "" || links[0].linktext == ""}
                onClick={() => {
                  submitLinks();
                }}
                className="disabled:bg-slate-500 p-5 py-2  w-fit my-5 bg-slate-900 text-white font-bold rounded-3xl"
              >
                Create your LinkTree
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="   bg-[#E9C0E9] flex  justify-center ">
        <img
          className=" w-[50%] object-contain mt-10"
          src="/generate.png"
          alt="Generate your links"
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Generate;
