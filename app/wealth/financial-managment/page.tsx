import Image from "next/image";
import Button from '@/components/Button';
import Title from '@/components/Title';

export default function Home(){
  return (
    <div className="container block justify-between items-center mx-auto mt-[170px] mb-20">
        <div className="block md:flex w-full">
            <div className="w-full md:w-3/5 container bg-black justify size-auto items-center ml-0 md:ml-20">
                <Title>Financial Management with Toonie</Title>
                <p className="mt-2 clear-both text-[25px]  text-zinc-700">Master Your Money, Secure Your Future</p>
                <div className="mt-[70px]">          
                    <Button variant="solid" href="/about">Get Started</Button>
                </div>
            </div>
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
                <Image src="/financial-managment.jpg" alt="financial-managment" className="rounded-[15px]" width={510} height={510} />
            </div>
        </div>
        <div className="container flex w-full items-center justify-center mx-auto mt-[200px]  mb-20">
            <Image src="/training-paning.png" alt="financial-managment"  width={1210} height={510} />
        </div>
        <div className="container flex w-full items-center justify-center mx-auto mt-[200px] ml-0 md:ml-20 mb-20">
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
                 <Image src="/training.png" alt="training" className="rounded-[15px]" width={410} height={510} />
            </div>
            <div className="w-full md:w-3/5 container bg-black justify mr-10 size-auto items-center ml-0 md:ml-20">
                <Title fontSize="55px">Training</Title>
                <p className="mt-1 clear-both text-[25px] text-zinc-700">Financial Confidences</p>
                <p className="mt-10 clear-both text-[18px] text-white">Learn to budget, invest, and manage your money with Toonie’s easy courses. Start today and take control of your financial future.</p>
                <div className="mt-[70px]">  
                    <Button variant="solid" href="/about">Start Learning Now</Button>        
                </div>
            </div>
        </div>
        <div className="container flex w-full items-center justify-center mx-auto ml-0 md:ml-20 mt-[200px] mb-20">
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
                 <Image src="/planning.png" alt="training" className="rounded-[15px]" width={410} height={510} />
            </div>
            <div className="w-full md:w-3/5 container bg-black justify mr-10 size-auto items-center ml-0 md:ml-20">
                <Title fontSize="55px">Planning</Title>
                <p className="mt-1 clear-both text-[25px] text-zinc-700">Your Financial Roadmap</p>
                <p className="mt-10 clear-both text-[18px] text-white">Achieve your goals with a customized financial plan. From saving for milestones to securing retirement, we tailor strategies just for you.</p>
                <div className="mt-[70px]">  
                    <Button variant="solid" href="/about">Create Your Plan</Button>        
                </div>
            </div>
        </div>
        <div className="container flex w-full items-center justify-center mx-auto ml-0 md:ml-20 mt-[200px] mb-20">
            <div className="w-full md:w-2/5 mx-auto mr-10 md:justify-start">
                 <Image src="/mentoring.png" alt="training" className="rounded-[15px]" width={410} height={510} />
            </div>
            <div className="w-full md:w-3/5 container bg-black justify mr-10 size-auto items-center ml-0 md:ml-20">
                <Title fontSize="55px">Mentoring</Title>
                <p className="mt-1 clear-both text-[25px] text-zinc-700">Expert Guidance</p>
                <p className="mt-10 clear-both text-[18px] text-white">Get personalized advice from our mentors. Make smart decisions and grow your wealth with a financial expert by your side.</p>
                <div className="mt-[70px]">  
                    <Button variant="solid" href="/about">Start Learning Now</Button>        
                </div>
            </div>
        </div>
    </div>

  );
}
