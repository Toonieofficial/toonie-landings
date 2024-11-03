import Image from "next/image";
import Button from '@/components/Button';
import Title from '@/components/Title';

export default function Home(){
  return (
    <div className="container block justify-between items-center mx-auto mt-[170px] mb-[250px]">
        <div className="block md:flex w-full">
            <div className="w-full md:w-1/2 container bg-black justify mr-[90px] size-auto items-center ml-0 md:ml-20">
                <Title lheight="100px" fontSize="80px">Join Our Team</Title>
                <p className="mt-10 clear-both text-[20px] text-justify text-white">At Toonie, we’re more than just a financial services provider—we’re a dynamic team dedicated to innovation, growth, and making a positive impact in the world of finance. We’re always on the lookout for talented individuals who share our passion for transforming the financial landscape and who are eager to contribute to our mission.</p>
            </div>
            <div className="w-full md:w-1/2 mx-auto mr-10 md:justify-start">
                <Image src="/career.png" alt="financial-managment" className="rounded-[15px]" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>

        <div className="container flex w-full  justify-center mx-auto ml-0 md:ml-20 mt-[200px] mb-20 ">
            <div className="w-full md:w-1/2 mx-auto mr-10 md:justify-start ">
                <Title fontSize="85px" lheight="100px">Why Work with Us?</Title>
            </div>
            <div className="w-full md:w-1/2 container pb-[50px] ">
                <div className="w-full md:w-1-2 mx-auto mr-10 md:justify-start">
                    <p className="mt-5 leading-[35px] text-justify clear-both text-[20px] text-white">
                         Innovative Environment Work at the forefront of the financial and cryptocurrency industries. At Toonie, we embrace new ideas and technologies to drive change and improve our services.<br></br>Collaborative CultureJoin a team of driven and supportive professionals. We believe that collaboration and open communication are key to achieving our goals and fostering a positive workplace.<br></br>Professional GrowthWe are committed to the personal and professional development of our team members. From continuous learning opportunities to career advancement, we invest in your growth.<br></br> Impactful WorkContribute to projects that have a real impact on people’s financial lives. Whether you’re developing new features, enhancing security, or creating educational content, your work will make a difference.
                    </p>
                </div>
            </div>
        </div>
        
        <div className="container flex w-full  justify-center mx-auto ml-0 md:ml-20 mt-[200px] mb-20 ">
            <div className="w-full md:w-1/2 mx-auto mr-10 md:justify-start ">
                <Title fontSize="85px" lheight="100px">Current Openings</Title>
            </div>
            <div className="w-full md:w-1/2 container pb-[50px] ">
                <div className="w-full md:w-1-2 mx-auto mr-10 md:justify-start">
                    <p className="mt-5 leading-[35px]  text-justify clear-both text-[20px] text-white">
                        Marketing Specialist <br></br>Graphic & Motion Graphic Designer <br></br>Product Designer <br></br>Flutter Developer <br></br>Ready to take the next step in your career with Toonie? Submit your resume and cover letter to career@toonieholding.com with the subject line “Application for [Position Title].” We look forward to hearing from you! <br></br>Don’t see a position that fits? We’re always excited to connect with talented individuals. Feel free to reach out and let us know how you can contribute to our team.
                    </p>
                </div>
            </div>
        </div>   
        <div className="container flex w-full items-center justify-center mx-auto mt-[200px]  mb-20">
            <Image src="/section.png" alt="financial-managment"  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
        </div>  
    </div>

  );
}