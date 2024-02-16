import { Link } from "react-scroll";


export const MobileMenu = ({ open, setOpen }) => {

  const handleMenuClick = () => {
    setOpen(false); // Cierra el menú al hacer clic en un elemento
  };

  return (
    <div>
        <ul
        className={`md:flex md:items-center bg-custom md:pb-0 mt-[-56px] md:mt-0 fixed md:static md:z-auto z-10 w-full h-full md:w-auto md:pl-0 transition-all duration-500 ease ${open ? 'left-0' :'left-[-1000px]'}`}
      >
          <li className="mt-24 md:mt-0">
            {/* <img className="scale-50 my-6 md:my-0" src={fblight} alt="facebook-icon" /> */}
            <Link
              to="home"
              smooth={true}
              activeClass="active"
              spy={true}
              offset={-200}
              className='cursor-pointer menu-link'
              onClick={() => handleMenuClick()}
            >
              <span className="text-[28px] md:text-[18px] p-5">Home</span>
            </Link>
          </li>

          <li className="mt-4 md:mt-0">
            {/* <img className="scale-50 my-6 md:my-0" src={iglight} alt="instagram-icon" /> */}
            <Link
              to="about"
              smooth={true}
              activeClass="active"
              spy={true}
              offset={0}
              className='cursor-pointer menu-link'
              onClick={() => handleMenuClick()}
            >
             <span className="text-[28px] md:text-[18px] p-5">About</span>
            </Link>
          </li>

          <li className="mt-4 md:mt-0">
            <Link
              to="services"
              smooth={true}
              spy={true}
              offset={0}
              onClick={() => handleMenuClick()}
              activeClass="active"
              className='cursor-pointer menu-link'
            >
             <span className="text-[28px] md:text-[18px] p-5">Services</span>
            </Link>
            {/* <img className="scale-50 my-6 md:my-0" src={gitlight} alt="github-icon" /> */}
          </li>

          <li className="mt-4 md:mt-0">
            {/* <img className="scale-50 my-6 md:my-0" src={lkdlight} alt="linkedin-icon" /> */}
            <Link
              to="work"
              smooth={true}
              activeClass="active"
              spy={true}
              offset={0}
              className='cursor-pointer menu-link'
              onClick={() => handleMenuClick()}
            >
             <span className="text-[28px] md:text-[18px] p-5">Work</span>
            </Link>
          </li>

          <li className="mt-4 md:mt-0">
            {/* <img className="scale-50 my-6 md:my-0" src={lkdlight} alt="linkedin-icon" /> */}
            <Link
              to="contact"
              smooth={true}
              activeClass="active"
              spy={true}
              offset={0}
              className='cursor-pointer menu-link'
              onClick={() => handleMenuClick()}
            >
             <span className="text-[28px] md:text-[18px] p-5">Contact</span>
            </Link>
          </li>

          <p className="hidden text-center mt-10 text-sm">Follow Me</p>


          <div className="decoration md:hidden flex flex-col ml-10 mt-64">
            <h5 className="text-sm text-gray-400 mb-1">Socials</h5>
            <ul className="flex gap-4 text-sm">
              <li>
                <a href="">
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
      </ul>

    </div>

  )
}
