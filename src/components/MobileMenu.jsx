import fblight from "../../public/assets/fb-light.svg";
import iglight from "../../public/assets/ig-light.svg";
import gitlight from "../../public/assets/git-light.svg";
import lkdlight from "../../public/assets/link-light.svg";


export const MobileMenu = ({ open }) => {
  return (
    <div
        className={`md:flex md:items-center bg-custom md:pb-0 pb-8 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 transition-all duration-300 ease-in ${open ? 'top-20' :'top-[-490px]'}`}
      >
          <a href="/" className="flex justify-center items-center">
            <img className="scale-50 my-6 md:my-0" src={fblight} alt="facebook-icon" />
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <p className="md:hidden text-sm">Facebook</p>
          </a>
          <a href="/" className="flex justify-center items-center">
            <img className="scale-50 my-6 md:my-0" src={iglight} alt="instagram-icon" />
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <p className="md:hidden text-sm">Instagram</p>
          </a>
          <a href="/" className="flex justify-center items-center">
            <img className="scale-50 my-6 md:my-0" src={gitlight} alt="github-icon" />
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <p className="md:hidden text-sm">GitHub</p>
          </a>
          <a href="/" className="flex justify-center items-center">
            <img className="scale-50 my-6 md:my-0" src={lkdlight} alt="linkedin-icon" />
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <p className="md:hidden text-sm">LinkedIn</p>
          </a>

          <p className="md:hidden text-center mt-10 text-sm">Follow Me</p>
      </div>
  )
}
