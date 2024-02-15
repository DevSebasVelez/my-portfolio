
import logo from "../../public/assets/logo.svg";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";


export const Header = () => {

  const [open, setOpen] = useState(false);

  return (

    <nav className="w-full top-0 left-0 md:flex items-center justify-between py-4 md:px-10 px-7 bg-custom z-10">

      <div className="flex justify-between items-center mx-8">
        <a href="#">
          <img className="scale-125 ml-6 md:ml-0" src={logo} alt="" />
        </a>

        <section className="md:hidden">
         <button
            className={`${open === false && "hidden"}`}
            onClick={() => {setOpen(!open)}}>
          <XMarkIcon className="h-6 w-6" />
         </button>

         <button
            className={`${open === true && "hidden"}`}
            onClick={() => {setOpen(!open)}}>
          <Bars2Icon className="h-6 w-6" />
         </button>
        </section>
      </div>

      <MobileMenu open={open}/>
    </nav>
  )
}


