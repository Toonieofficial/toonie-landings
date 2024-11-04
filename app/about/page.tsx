import Image from "next/image";
import Button from '@/components/Button';
import Title from '@/components/Title';

export default function Home(){
  return (
    <div className="container block justify-between items-center mx-auto mt-[170px] mb-[250px]">
        <div className="container flex w-full items-center justify-center mx-auto mt-[200px] mb-20">
            <div className="w-full rounded-[15px] bg-[url('/amin.png')] py-10 bg-no-repeat bg-right-top bg-[length:460px_460px] mx-auto">
                <Title fontSize="85px" lheight="100px">
                “Our mission is to empower all Canadians with secure, accessible financial education and personal advice.”
                </Title>
                <p className="mt-10 clear-both text-[30px]  text-zinc-700">Amin Ghasemi, CEO</p>
            </div>
        </div>

        <div className="container flex w-full  justify-center mx-auto mt-[200px] mb-20 ">
            <div className="w-full md:w-1/2  mr-10 md:justify-start ">
                <Title fontSize="85px" lheight="100px">Who We Are</Title>
            </div>
            <div className="w-full md:w-1/2 container pb-[50px] ">
                <div className="w-full md:w-1-2 mx-auto mr-10 md:justify-start">
                    <p className="mt-5 leading-[35px] text-justify clear-both text-[20px] text-white">
                    Toonie is more than just a financial platform—it’s a community committed to financial education and innovation. We understand that navigating the world of finance can be complex and sometimes overwhelming. That’s why we’ve built Toonie to offer not just a service, but a complete financial toolkit that combines expert education, seamless solutions, and personalized guidance.                    </p>
                </div>
            </div>
        </div>
        
        <div className="container flex w-full  justify-center mx-auto mt-[200px] mb-20 ">
            <div className="w-full md:w-1/2 mx-auto mr-10 md:justify-start ">
                <Title fontSize="85px" lheight="100px">What We Offer</Title>
            </div>
            <div className="w-full md:w-1/2 container pb-[50px] ">
                <div className="w-full md:w-1-2 mx-auto mr-10 md:justify-start">
                    <p className="mt-5 leading-[35px]  text-justify clear-both text-[20px] text-white">
                    Tooniversity: Our dedicated financial education platform, Tooniversity, is designed to empower you with knowledge and tools to make informed financial decisions.
                    <br></br>
                    Comprehensive Financial Services: From banking and insurance to investment, tax, and wealth management, we cover all aspects of your financial life.
                    <br></br>
                    Secure and Regulated Solutions: With robust adherence to FINTRAC regulations and AML/KYC support, your security and compliance are our top priorities.
                    <br></br>
                    Innovative Exchange and Brokerage Services: High-performance trading platforms, extensive investment options, and transparent low spreads ensure you get the best possible trading experience.                    </p>
                </div>
            </div>
        </div>   
        <div className="container flex w-full items-center justify-center mx-auto mt-[200px] mb-20">
            <div className="w-full rounded-[15px] bg-[url('/joinbanner.jpg')] p-10 pb-20 bg-no-repeat bg-center bg-cover mx-auto">
                <h3 className="mt-10 clear-both text-[85px] font-bold text-[#002EFF] ">
                  Join Us
                </h3>
                <p className=" clear-both text-[30px] text-[#002EFF] pl-2 ">
                  Be part of a financial revolution. Join the Toonie community today and experience a new way to manage and grow your finances. Whether you’re looking to invest, learn, or simply make your financial life easier, Toonie is here to guide you every step of the way.
                </p>
                <div className="mt-[50px]">          
                    <Button variant="solid" href="/career">Get Started</Button>
                </div>
            </div>
        </div>
    </div>

  );
}