import Image from "next/image";
import Button from '@/components/Button';
import Title from '@/components/Title';

export default function Home() {
  return (
    <div className="container block md:flex justify-between items-center mx-auto mt-20 mb-20">
        <div className="w-full md:w-3/5 container bg-black justify size-auto items-center ml-10">
            <Title>Financial Management with Toonie</Title>
            <p className="mt-2 clear-both text-lg text-zinc-700">Master Your Money, Secure Your Future</p>
            <div className="mt-[70px]">          
                  <Button variant="solid" href="/about">Solid Button</Button>
            </div>
        </div>
        <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
            <Image src="/financial-managment.jpg" alt="financial-managment" className="rounded-[15px]" width={510} height={510} />
        </div>
    </div>


  );
}
