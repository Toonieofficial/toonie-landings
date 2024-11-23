'use client';
import Image from "next/image";
import Button from '@/components/Button';
import Title from '@/components/Title';
import WhyToonie from '@/components/landing/whytoonie';
import VerticalTabs from '@/components/landing/VerticalTabs';
import Exclusive from "@/components/landing/exclusive";

export default function Home(){
  return (
    <div className="container block justify-between items-center mx-auto mt-[270px] mb-[250px]">
        <div className="block md:flex w-full">
            <div className="w-full md:w-3/5 container bg-black justify size-auto items-center">
                <Title lheight="100px">Empower Your Financial Future with Toonie</Title>
                <p className="mt-5 max-w-[600px] clear-both text-[25px] text-zinc-700">Your gateway to secure, innovative, and accessible cryptocurrency and financial services</p>
            </div>
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
                <Image src="/intro.png" alt="financial-managment" className="rounded-[15px]" width={510} height={510} />
            </div>
        </div>
        <div className="block md:flex w-full mt-[250px] z-20">
            <div className="w-full md:w-3/5 container bg-black justify size-auto items-center">
                <Title lheight="100px">Toonie Token Airdrop</Title>
                <p className="mt-2 clear-both text-[25px]  text-zinc-700">Get 20 Free Toonie Tokens in 4 Easy Steps:</p>
                <div className="mt-[70px]">          
                    <Button variant="solid" href="/about">Get My Welcome Toonie Token!</Button>
                </div>
            </div>
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
                <Image src="/airdrop.png" alt="financial-managment" className="rounded-[15px]" width={510} height={510} />
            </div>
        </div>
        <WhyToonie/>
        <div className="flex w-full items-center justify-center ml-0 mt-[200px] transition duration-300 mb-20">
            <Image src="/toonie.png" alt="toonie"  width={1450} height={510} />
        </div>
        <div className="block mt-[200px] ml-0 md:ml-5 w-full">
            <div className="w-fullcontainer bg-black justify size-auto items-center">
                <Title lheight="100px">Our Core Services</Title>
                <p className="mt-5 max-w-[600px] clear-both text-[25px]  text-zinc-700">Explore our most popular offerings</p>
            </div>
            <div className="mt-[50px]">          
                <Button variant="solid" href="/about">Get Started</Button>
            </div>
        </div>
        <VerticalTabs />
        <div className="block ml-5 mt-[100px] md:flex w-full">
            <div className="w-full md:w-2/5 container justify size-auto items-center z-10">
                <Title lheight="100px" fontSize="55px">Invest Early with Toonie’s ICO</Title>
                <p className="mt-5 max-w-[400px] clear-both text-[25px] text-zinc-700">Be among the first to own Toonie Tokens and participate in the future of digital finance</p>
            </div>
            <div className="w-full md:w-3/5 mx-auto mr-10 md:justify-start z-9">
                <iframe src="https://my.spline.design/websitelandingtooniecharactertoken-44a752fd6774b5e21b0d0b080f1d4f3f/" className="absolute left-[600px] " width={450} height={450} ></iframe>
            </div>
        </div>
        <Exclusive/>
    </div>

  );
}
