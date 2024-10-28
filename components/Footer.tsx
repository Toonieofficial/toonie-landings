// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="container block md:flex justify-between items-center mx-auto mt-20 mb-20">
        <div className="w-full md:w-3/5 flex justify-center md:justify-start mb-10 md:mb-0 ml-auto">
            <ul className="ml-0 md:ml-20">
                <li>
                    <Link href="/about" className="text-zinc-700 text-[30px] hover:text-blue-800 transition duration-200">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="text-zinc-700 text-[30px] hover:text-blue-800 transition duration-200">
                         Career
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="text-zinc-700 text-[30px] hover:text-blue-800 transition duration-200">
                        Services
                    </Link>
                </li>    
                <li>
                    <Link href="/about" className="text-zinc-700 text-[30px] hover:text-blue-800 transition duration-200">
                        Terms of Service
                    </Link>
                </li> 
            </ul>
        </div>
        <div className="w-full md:w-2/5 mx-auto md:justify-start">
            <p className='clear-both text-zinc-700'>Stay Informed<br/></p>
            <div className='clear-both'></div>
            <p className='clear-both text-zinc-700'>Subscribe to our Newsletter:</p>
            <input 
                type='email' 
                className='w-9/12 mt-5 mx-auto rounded-full text-gray-400 placeholder-toonie text-[15px] border-toonie p-4 bg-black focus:border-toonie hover:placeholder-gray-400 transition duration-200' 
                placeholder='Enter your Email'>
            </input>
        </div>
    </footer>
  );
}
