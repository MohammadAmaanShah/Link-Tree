"use client";



import { usePathname } from "next/navigation";
import { useState,useEffect } from "react";
import Link from "next/link";
const Navbar = () => {
  const [phoneNav, setPhoneNav] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setPhoneNav(false);
    }
  }, []);
  const pathname = usePathname();

  const shownnavbar = ["/", "/generate"].includes(pathname);
  return (
    <>
      {shownnavbar && (
        <div className=" z-30 bg-white w-[90vw] flex items-center justify-between md:px-7 px-4 md:py-5 h-15 rounded-full fixed top-10 right-[5vw]">
          {phoneNav ? (
            <>
              <div className="flex items-center gap-6 ">
                  <img
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
              className="h-6 "
            />
                <ul className="flex items-center text-black gap-3">
                  <li>Products</li>
                  <li>Template</li>
                  <li>Marketplace</li>
                  <li><Link  href ='/learn'>Learn</Link></li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div className="flex items-center gap-3  ">
                <button className="login px-2 py-3 bg-gray-200 text-black font-semibold rounded-md ">
                  Login{" "}
                </button>
                <button className="signup px-3 py-3 bg-gray-800 rounded-full font-semibold text-white">
                  Sign up free
                </button>
              </div>
            </>
          ) : (
            <>
            <img
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
              className=" md:h-6  h-4 "
            />
          <Link  href ='/learn'>Learn</Link>
          </>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
