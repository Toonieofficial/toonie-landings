import Image from "next/image";
import Button from '@/components/Button';
import Title from '@/components/Title';

export default function Home(){
  return (
    <div className="container block justify-between items-center mx-auto mt-[170px] mb-[250px]">
        <div className="block md:flex w-full">
            <div className="w-full md:w-3/5 container bg-black justify size-auto items-center ml-0 md:ml-20">
                <Title lheight="100px">Investment Services with Toonie</Title>
                <p className="mt-2 clear-both text-[25px]  text-zinc-700">Invest Smart, Grow Wealth</p>
                <div className="mt-[70px]">          
                    <Button variant="solid" href="/about">Get Started</Button>
                </div>
            </div>
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
                <Image src="/invesment.png" alt="financial-managment" className="rounded-[15px]" width={610} height={610} />
            </div>
        </div>
        <div className="container flex w-full items-center justify-center mx-auto mt-[200px] mb-20">
            <div className="rounded-[15px] bg-[url('/testback.png')] py-[100px] bg-no-repeat bg-center bg-contain mx-auto">
                <p className="text-justify text-[38px] max-w-[800px] justify-end text-white">Toonie offers a range of investment solutions to help you grow your wealth. Whether you seek expert advice or want to take charge, we provide the tools and accounts you need to succeed.</p>
            </div>
        </div>

        <div className="container flex w-full items-center justify-center mx-auto ml-0 md:ml-20 mt-[250px] mb-20 ">
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start pb-[75px] border-b-2 border-solid border-white border-indigo-500">
                <Title fontSize="55px" lheight="70px">TFSA</Title>
                <p className="mt-1 clear-both text-[25px] text-zinc-700">Tax-Free Growth</p>
                <p className="mt-10 text-justify clear-both text-[19px] text-white">Boost your returns with a TFSA. Enjoy tax-free growth on investments for both short-term and long-term goals</p>
            </div>
            <div className="w-full md:w-2/5 container ml-0 md:ml-20 pb-[79px] border-b-2 border-solid border-white border-indigo-500">
                <div className="w-full md:w-1-2 mx-auto mr-10 md:justify-start">
                    <Title fontSize="55px" lheight="70px">RRSP</Title>
                    <p className="mt-1 clear-both text-[25px] text-zinc-700">Plan for Retirement</p>
                    <p className="mt-10  text-justify clear-both text-[19px] text-white">Build a secure retirement with an RRSP. Benefit from tax-deductible contributions and tax-deferred growth.</p>
                </div>
            </div>
            <div className="w-full md:w-2/5 container ml-0 md:ml-20 pb-[50px] border-b-2 border-solid border-white border-indigo-500">
                <div className="w-full md:w-1-2 mx-auto mr-10 md:justify-start">
                    <Title fontSize="55px" lheight="70px">RESP</Title>
                    <p className="mt-1 clear-both text-[25px] text-zinc-700">Save for Education</p>
                    <p className="mt-10 text-justify clear-both text-[19px] text-white">Support your child’s education with an RESP. Access government grants and tax-deferred growth for a strong financial start.</p>
                </div>
            </div>
        </div>
        <div className="container flex w-full items-center justify-center mx-auto ml-0 md:ml-20 mt-[100px] mb-20 ">
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start pb-[50px] border-b-2 border-solid border-white border-indigo-500">
                <Title fontSize="55px" lheight="70px">FHSA</Title>
                <p className="mt-1 clear-both text-[25px] text-zinc-700">Save for a Home</p>
                <p className="mt-10 text-justify clear-both text-[19px] text-white">Reach your homeownership goals with an FHSA. Combine tax-free growth with RRSP and TFSA benefits</p>
            </div>
            <div className="w-full md:w-2/5 container ml-0 md:ml-20 pb-[50px] border-b-2 border-solid border-white border-indigo-500">
                <div className="w-full md:w-1-2 mx-auto mr-10 md:justify-start">
                    <Title fontSize="55px" lheight="70px">HISA</Title>
                    <p className="mt-1 clear-both text-[25px] text-zinc-700">Boost Savings</p>
                    <p className="mt-10 text-justify clear-both text-[19px] text-white">Earn more with a HISA. Enjoy high interest rates and easy access to your funds.</p>
                </div>
            </div>
            <div className="w-full md:w-2/5 container ml-0 md:ml-20 pb-[50px] ">
                <div className="w-full md:w-1-2 mx-auto mr-10 md:justify-start">
                </div>
            </div>
        </div>
        
    </div>

  );
}
