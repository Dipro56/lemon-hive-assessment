import type { NextPage } from 'next';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar/Navbar';
import bg_shaded from './../public/assets/bg_shaded.png';
import styles from '../styles/home.module.css'


const Home: NextPage = () => {
  const hello = () => {
    console.log("Hello")
  }


  return (
    // <div style={{
    //   backgroundImage: `url(${bg_shaded})`,
    //   width: '100%',
    //   height: '100%',
    // }}>
    //     <Navbar />
    //     <button onClick={hello} className='bg-green-600 p-5'>Hello</button>
    // </div>
    <div className={styles['bg-shaded']}>  
      <Navbar />
      <button onClick={hello} className='bg-green-600 p-5'>Hello</button>
    </div>
  );
};

export default Home;
