import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import Link from "next/link";
import localFont from "next/font/local";

export const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--fonts-poppins",
  weight: "100 900",
});
const page = async ({ params }) => {
  const { handle } = await params;
  const client = await clientPromise;

  const db = client.db("linktree");
  const collection = db.collection("links");

  const item = await collection.findOne({ handle: handle });

  if (!item) {
    return notFound();
  }

  return (
    <>
      <div className="min-h-screen bg-[#d2e823] w-full grid md:grid-cols-2 py-5 ">
        <div className="px-5 pt-20   ">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl md:p-10 p-5 w-full ">
          <p
            className={`${poppins.className} md:text-6xl text-3xl  text-[#254f1a] md:leading-16 leading-10`}
          >
            All My Links in <br /> One Place
          </p>
          <p className={` font-semibold text-lg   text-[#254f1a]  `}>
            Welcome to my digital hub — a curated space where all of my
            important links, projects, updates, and social platforms come
            together. Here, you’ll find everything I’m building, sharing, and
            creating across the web, all in one easy-to-explore place. Whether
            you’re here to connect, collaborate, follow my journey, or simply
            learn more about what I do, you’re in the right spot. Feel free to
            browse around, check out my work, and reach out anytime — I’d love
            to connect.
          </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 pt-20 ">
          <img className="rounded-full h-40 " src={item.pic} alt="image" />
          <span className={`${poppins.className} md:text-3xl text-xl  text-[#254f1a]`}>
            {item.handle}
          </span>
          <p className="font-semibold text-lg ">{item.desc}</p>
          <div className=" max-h-[40%] overflow-y-auto space-y-2  w-full text-center flex items-center flex-col">
            {item &&
              item.link.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="px-5 py-3 bg-white rounded-md min-w-[70%] shadow-2xs"
                  >
                    <Link className="text-lg font-semibold " href={item.link}>
                      {item.linktext[0].toUpperCase()}
                      {item.linktext.slice(1)}
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
