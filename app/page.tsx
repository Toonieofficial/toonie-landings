import Image from "next/image";
import Button from '@/components/Button';
import Title from '@/components/Title';
import WhyToonie from '@/components/whytoonie';

export default function Home(){
  return (
    <div className="container block justify-between items-center mx-auto mt-[270px] mb-[250px]">
        <div className="block md:flex w-full">
            <div className="w-full md:w-3/5 container bg-black justify size-auto items-center ml-0 md:ml-20">
                <Title lheight="100px">Empower Your Financial Future with Toonie</Title>
                <p className="mt-5 max-w-[600px] clear-both text-[25px]  text-zinc-700">Your gateway to secure, innovative, and accessible cryptocurrency and financial services</p>
            </div>
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
                <Image src="/intro.png" alt="financial-managment" className="rounded-[15px]" width={510} height={510} />
            </div>
        </div>
        <div className="block md:flex w-full mt-[250px]">
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
        <WhyToonie />

    </div>

  );
}
