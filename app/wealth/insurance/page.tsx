import Image from "next/image";
import Button from '@/components/Button';
import Title from '@/components/Title';

export default function Home(){
  return (
    <div className="container block justify-between items-center mx-auto mt-[170px] mb-[250px]">
        <div className="block md:flex w-full">
            <div className="w-full md:w-3/5 container bg-black justify size-auto items-center ml-0 md:ml-20">
                <Title>Comprehensive Insurance Solutions</Title>
                <p className="mt-2 clear-both text-[25px]  text-zinc-700">Coverage You Can Count On</p>
                <div className="mt-[70px]">          
                    <Button variant="solid" href="/about">Get Started</Button>
                </div>
            </div>
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
                <Image src="/comper.png" alt="financial-managment" className="rounded-[15px]" width={510} height={510} />
            </div>
        </div>
        <div className="container flex w-full items-center justify-center mx-auto mt-[200px]  mb-20">
            <Image src="/training-paning.png" alt="financial-managment"  width={1210} height={510} />
        </div>

        <div className="container flex w-full items-center justify-center mx-auto ml-0 md:ml-20 mt-[200px] mb-20">
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
                 <Image src="/life.png" alt="life" className="rounded-[15px]" width={410} height={510} />
            </div>
            <div className="w-full md:w-3/5 container bg-black justify mr-10 size-auto items-center ml-0 md:ml-20">
                <Title fontSize="55px">Life Insurance</Title>
                <p className="mt-1 clear-both text-[25px] text-zinc-700">Secure Your Loved Ones</p>
                <p className="mt-10 clear-both text-[18px] text-white">Provide financial security with life insurance options tailored to your needs. Protect your family’s future today.</p>
                <div className="mt-[70px]">  
                    <Button variant="solid" href="/about">Explore Life Insurance</Button>        
                </div>
            </div>
        </div>
        <div className="container flex w-full items-center justify-center mx-auto mt-[200px] ml-0 md:ml-20 mb-20">
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
                 <Image src="/health.png" alt="health" className="rounded-[15px]" width={410} height={510} />
            </div>
            <div className="w-full md:w-3/5 container bg-black justify mr-10 size-auto items-center ml-0 md:ml-20">
                <Title fontSize="55px">Health Insurance</Title>
                <p className="mt-1 clear-both text-[25px] text-zinc-700">Stay Protected</p>
                <p className="mt-10 clear-both text-[18px] text-white">Access essential care without the financial strain. From medical to critical illness coverage, stay protected through life’s ups and downs.</p>
                <div className="mt-[70px]">  
                    <Button variant="solid" href="/about">Discover Health Insurance</Button>        
                </div>
            </div>
        </div>
        <div className="container flex w-full items-center justify-center mx-auto ml-0 md:ml-20 mt-[200px] mb-20">
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
                 <Image src="/disability.png" alt="disability" className="rounded-[15px]" width={410} height={510} />
            </div>
            <div className="w-full md:w-3/5 container bg-black justify mr-10 size-auto items-center ml-0 md:ml-20">
                <Title fontSize="55px">Disability Insurance</Title>
                <p className="mt-1 clear-both text-[25px] text-zinc-700">Income Security</p>
                <p className="mt-10 clear-both text-[18px] text-white">Ensure a steady income if injury or illness prevents you from working. Protect your financial stability with reliable coverage.</p>
                <div className="mt-[70px]">  
                    <Button variant="solid" href="/about">Learn About Disability Insurance</Button>        
                </div>
            </div>
        </div>
        <div className="container flex w-full items-center justify-center mx-auto ml-0 md:ml-20 mt-[200px] mb-20">
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
                 <Image src="/critical.png" alt="critical" className="rounded-[15px]" width={410} height={510} />
            </div>
            <div className="w-full md:w-3/5 container bg-black justify mr-10 size-auto items-center ml-0 md:ml-20">
                <Title fontSize="55px">Critical Illness Insurance</Title>
                <p className="mt-1 clear-both text-[25px] text-zinc-700">Financial Support</p>
                <p className="mt-10 clear-both text-[18px] text-white">Get a lump sum payout upon diagnosis of a serious illness, so you can focus on recovery without financial stress.</p>
                <div className="mt-[70px]">  
                    <Button variant="solid" href="/about">Understand Critical Illness Insurance</Button>        
                </div>
            </div>
        </div>
        
    </div>

  );
}
