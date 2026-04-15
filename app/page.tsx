import Image from "next/image";
import profileImage from "../public/p2.png";
import graphisDesign from "../public/design.png";
import code from "../public/code.png";

import {BsFillMoonStarsFill } from "react-icons/bs";
import {IoLogoGithub} from "react-icons/io";
import { FaLinkedin,FaYoutube} from "react-icons/fa";

export default function Home() {
  return (

      <main className=" font-poppins bg-yellow-50 min-h-screen px-10">

        <section> 
          {/* nav and hero section*/}

          <nav className="py-10 flex justify-between">
            <h1 className="text-sm">Developed b adomic arts</h1>
            <ul className="flex items-center">
              {/* icon */}
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl mx-5" />
              </li>
              <li>
                <a href=""
                className="bg-yellow-400 text-black px-4 py-2 border-none rounded-md"
                >Resume</a>
              </li>
            </ul>
          </nav>

          {/* hero */ }
          <div className="text-center p-10">
            <h1 className="text-5xl font-bold text-yellow-400">Adomic arts</h1>
            <h3 className="text-2xl py-4">Mobile Apps and website developer</h3>
            <p className="text-sm py-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae hic consequatur quos voluptatum ratione inventore quo voluptas tempore error, quas molestiae eos, dignissimos minima saepe. Explicabo nisi eum fugit.</p>
          </div>
          {/* social */}
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <a href="">
              <IoLogoGithub/>
            </a>
            <a href="">
              <FaLinkedin/>
            </a>
            <a href="">
              <FaYoutube/>
            </a>

          </div>

         <div className="m-auto relative bg-gradient-to-b from-yellow-200 w-80 h-80 p-5 mt-20 rounded-full">
  <Image src={profileImage} alt="Profile Image" layout="fill" objectFit="cover" />
</div>
        </section>

        <section>
          <div>
            <h2  className="text-5xl py-10 font-bold opacity-60">Services I offer</h2>
             <p className="text-sm py-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae hic consequatur quos voluptatum ratione inventore quo voluptas tempore error, quas molestiae eos, dignissimos minima saepe. Explicabo nisi eum fugit.</p>
          </div>

          <div>
            <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image src={graphisDesign} alt="design image" width={100} height={100} className="inline"/>
              <h2 className="text-2xl font-bold">Graphic Design</h2>
              <p className="text-sm py-2 text-gray-800 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam quia eaque, magnam ipsam facilis dolore distinctio natus tempore, similique corrupti.</p>
            </div>

             <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image src={code} alt="design image" width={100} height={100} className="inline"/>
              <h2 className="text-2xl font-bold">Graphic Design</h2>
              <p className="text-sm py-2 text-gray-800 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam quia eaque, magnam ipsam facilis dolore distinctio natus tempore, similique corrupti.</p>
            </div>

             <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image src={graphisDesign} alt="design image" width={100} height={100} className="inline"/>
              <h2 className="text-2xl font-bold">Graphic Design</h2>
              <p className="text-sm py-2 text-gray-800 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam quia eaque, magnam ipsam facilis dolore distinctio natus tempore, similique corrupti.</p>
            </div> 
          </div>
        </section>

      </main>

  );
}
