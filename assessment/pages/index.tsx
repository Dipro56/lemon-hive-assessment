import type { NextPage } from 'next';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/home.module.css'
import sideImage from '../public/assets/side_image.png'
import heroImage from '../public/assets/hero_image.png'
import scrollPic from '../public/assets/scroll_pic.png'

const Home: NextPage = () => {
  const hello = () => {
    console.log("Hello")
  }


  return (
    <div className={`${styles['bg-shaded']} `}>
      <Navbar />

      <div>
        <div className={` ${styles['grid-container']} `}>
          <div className={` ${styles['item1']}`}>
            <div className='p-10  flex justify-end items-center'>
              <p className='lg:text-9xl md:text-7xl sm:text-5xl min-[320px]:text-3xl min-[250px]:text-xl font-bold text-end '>React <br /> Conference </p>
            </div>
            <div className='flex justify-end'>
              <div >    <div className=' ms-10 flex-end lg:pl-28'>
                <Image src={sideImage}></Image>
              </div></div>
              <div className='' > <div className='pt-10'><p className={`text-start lg:text-xl md:text-lg sm:text-md min-[320px]:text-sm min-[250px]:text-sm ${styles['poppins-font']} `}>Lorem uis diam turpis quam id fermentum.<br /> In quis diam turpis quam id fermentum..<br />id fermentum.In quis diam turpis quam id fermentum.</p>
              </div>
                <div className=' flex justify-start '>    <button className='bg-yellow-500 lg:text-xl md:text-md sm:text:sm [320px]:text-sm min-[250px]:text-sm pt-3 pb-3 px-10 rounded-full mt-5'>Buy Tickets</button></div>
                <div className='mt-10 flex justify-end px-14'> <Image src={scrollPic}></Image></div>
              </div>


            </div>

          </div>

          <div ><div className={`pt-56  flex justify-start`}>
            <Image src={heroImage}></Image>
          </div></div>

        </div>
      </div>

      <div className='flex justify-center'>
        <div className={` ${styles['schedule-section']} container `}>
          <div className='bg-pink-100 p-5'>
            <p className='text-3xl font-bold text-start'>Event Schedule</p>
            <div> <p className={`${styles['poppins-font']} text-md  text-start mt-3`}>Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum.</p></div>
          </div>
          <div className="overflow-x-auto relative ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Product name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Color
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Category
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                  </th>
                  <td className="py-4 px-6">
                    Sliver
                  </td>
                  <td className="py-4 px-6">
                    Laptop
                  </td>
                  <td className="py-4 px-6">
                    $2999
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                  </th>
                  <td className="py-4 px-6">
                    White
                  </td>
                  <td className="py-4 px-6">
                    Laptop PC
                  </td>
                  <td className="py-4 px-6">
                    $1999
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                  </th>
                  <td className="py-4 px-6">
                    Black
                  </td>
                  <td className="py-4 px-6">
                    Accessories
                  </td>
                  <td className="py-4 px-6">
                    $99
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
