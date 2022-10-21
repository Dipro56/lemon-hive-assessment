
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import styles from './../../styles/home.module.css'
import Image from 'next/image';
import logo from './../../public/assets/logo.png'


const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const toggleBar = () => {
    if (toggle) setToggle(false);
    else setToggle(true);
    console.log(toggle);
  }



  return (
    <div className='flex justify-center'>
      <div className='container items-center justify-center'>
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Image src={logo}></Image>
          </div>

          {
            toggle ? (<div className="w-full flex  flex-grow lg:flex lg:items-center lg:w-auto  ">
              <div className="text-lg  lg:flex-grow lg:flex lg:justify-around lg:align-items-center ">
                <a
                  href="#responsive-header"

                  className={`${styles['text-link']} block mt-4 lg:inline-block lg:mt-0 text-black mr-4 p-3`}
                >
                  About Us
                </a>
                <a
                  href="#responsive-header"
                  className={`${styles['text-link']} block mt-4 lg:inline-block lg:mt-0 text-black mr-4 p-3`}
                >
                  What We Do
                </a>

                <a
                  href="#responsive-header"
                  className={`${styles['text-link']} block mt-4 lg:inline-block lg:mt-0 text-black mr-4 p-3`}
                >
                  Our Work
                </a>
                <a
                  href="#responsive-header"
                  className={`${styles['text-link']} block mt-4 lg:inline-block lg:mt-0 text-black mr-4 p-3`}
                >
                  Blog
                </a>
                <a
                  href="#responsive-header"
                  className={`${styles['text-link']} block mt-4 lg:inline-block lg:mt-0 text-black mr-4 p-3`}
                >
                  Say Hi
                </a>

              </div>

            </div>) : (<div className={` w-full flex-grow lg:flex lg:items-center lg:w-auto hidden`}>
              <div className="text-sm lg:flex-grow">
                <div className="text-lg  lg:flex-grow lg:flex lg:justify-around lg:align-items-center ">
                  <a
                    href="#responsive-header"
                    className={`${styles['text-link']} block mt-4 lg:inline-block lg:mt-0 text-black mr-4 p-3`}
                  >
                    About Us
                  </a>
                  <a
                    href="#responsive-header"
                    className={`${styles['text-link']} block mt-4 lg:inline-block lg:mt-0 text-black mr-4 p-3`}
                  >
                    What We Do
                  </a>

                  <a
                    href="#responsive-header"
                    className={`${styles['text-link']} block mt-4 lg:inline-block lg:mt-0 text-black mr-4 p-3`}
                  >
                    Our Work
                  </a>
                  <a
                    href="#responsive-header"
                    className={`${styles['text-link']} block mt-4 lg:inline-block lg:mt-0 text-black mr-4 p-3`}
                  >
                    Blog
                  </a>
                  <a
                    href="#responsive-header"
                    className={`${styles['text-link']} block mt-4 lg:inline-block lg:mt-0 text-black mr-4 p-3`}
                  >
                    Say Hi
                  </a>

                </div>


              </div>

            </div>)
          }
          <div className="block ">
            <button onClick={toggleBar} className="flex items-center px-3 py-2 border rounded text-black border-black">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
