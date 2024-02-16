
// import logo from "../../public/assets/logo.svg";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";


export const Header = () => {

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (

    <nav className="w-full top-0 left-0 md:flex items-center justify-between py-6 md:px-10 px-7 bg-custom z-30 relative">

      <div className="flex justify-end md:justify-between items-center ">

        <a href="#" className="">
          <span className="text-sm md:text-lg text-gray-400">© Code by Sebas</span>
        </a>

        {/* BOTONES MENU */}
        <section className="flex md:hidden fixed left-6 md:static z-20">
          { (open)
            ? (
              <button
                className="transform rotate-90 transition-all duration-300 bg-blue-500 rounded-full p-4"
                onClick={handleToggle}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            )

            : (
              <button
                className="transform rotate-0 transition-all duration-300"
                onClick={handleToggle}
              >
                <Bars2Icon className="h-6 w-6" />
              </button>
              )
          }
        </section>
      </div>

      <MobileMenu open={open} setOpen={setOpen}/>
    </nav>
  )
}


