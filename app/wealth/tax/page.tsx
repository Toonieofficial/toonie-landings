import Image from "next/image";
import Button from '@/components/Button';
import Title from '@/components/Title';

export default function Home(){
  return (
    <div className="container block justify-between items-center mx-auto mt-[170px] mb-[250px]">
        <div className="block md:flex w-full">
            <div className="w-full md:w-3/5 container bg-black justify size-auto items-center ml-0 md:ml-20">
                <Title lheight="100px">Tax Services with Toonie</Title>
                <p className="mt-8 clear-both text-[25px]  text-zinc-700">Maximize Savings, Simplify Taxes</p>
                <div className="mt-[60px]">          
                    <Button variant="solid" href="/about">Get Started</Button>
                </div>
            </div>
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
                <Image src="/hero.png" alt="financial-managment" className="rounded-[15px]" width={610} height={610} />
            </div>
        </div>
        <div className="container flex w-full items-center justify-center mx-auto mt-[200px] mb-20">
            <div className="w-[1150px] rounded-[15px] bg-[url('/tax.png')] py-20 bg-no-repeat bg-center bg-contain mx-auto">
                <p className="text-justify text-[56px] max-w-[1100px] justify-end text-white font-sans">Toonie makes managing taxes easy and efficient. From filing to strategic planning, our expert services help you stay compliant, save money, and reduce stress.</p>
            </div>
        </div>

        <div className="container flex w-full items-center justify-center mx-auto ml-0 md:ml-20 mt-[200px] mb-20 ">
            <div className="w-full md:w-1/2 mx-auto mr-10 md:justify-start pb-[75px] border-b-2 border-solid border-white border-indigo-500">
                <Title fontSize="55px" lheight="70px">Tax Filing</Title>
                <p className="mt-1 clear-both text-[25px] text-zinc-700">Accurate and Hassle-Free</p>
                <p className="mt-10 clear-both text-[19px] text-white">Get your taxes done right with our expert filing services. Maximize your refund with minimal effort.</p>
            </div>
            <div className="w-full md:w-1/2 container ml-0 md:ml-20 pb-[50px] border-b-2 border-solid border-white border-indigo-500">
                <div className="w-full md:w-1-2 mx-auto mr-10 md:justify-start">
                    <Title fontSize="55px" lheight="70px">Tax Planning</Title>
                    <p className="mt-1 clear-both text-[25px] text-zinc-700">Optimize Your Taxes, Maximize Your Savings</p>
                    <p className="mt-10 clear-both text-[19px] text-white">Plan strategically and keep more of your earnings. We tailor tax-saving strategies to fit your financial goals and investments.</p>
                </div>
            </div>
        </div>
        <div className="container flex w-full items-center justify-center mx-auto ml-0 md:ml-20 mt-[100px] mb-20 ">
            <div className="w-full md:w-1/2 mx-auto mr-10 md:justify-start pb-[50px] border-b-2 border-solid border-white border-indigo-500">
                <Title fontSize="55px" lheight="70px">Corporate & Freelance Tax Services</Title>
                <p className="mt-1 clear-both text-[25px] text-zinc-700">Simple Tax Solutions for Your Business</p>
                <p className="mt-10 clear-both text-[19px] text-white">Navigate taxes as a business owner or freelancer with ease. We simplify deductions, credits, and filing to save you time and money.</p>
            </div>
            <div className="w-full md:w-1/2 container ml-0 md:ml-20 pb-[50px] border-b-2 border-solid border-white border-indigo-500">
                <div className="w-full md:w-1-2 mx-auto mr-10 md:justify-start">
                    <Title fontSize="55px" lheight="70px">Tax Advice & Debt Relief</Title>
                    <p className="mt-1 clear-both text-[25px] text-zinc-700">Expert Guidance for Tax Relief and Advice</p>
                    <p className="mt-10 clear-both text-[19px] text-white">Navigate taxes as a business owner or freelancer with ease. We simplify deductions, credits, and filing to save you time and money.</p>
                </div>
            </div>
        </div>

    </div>

  );
}
