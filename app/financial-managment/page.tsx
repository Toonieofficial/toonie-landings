import Image from "next/image";
import Button from '@/components/Button';
import Title from '@/components/Title';

export default function Home() {
  return (
    <div className="container block md:flex justify-between items-center mx-auto mt-20 mb-20">
        <div className="w-full md:w-3/5 block justify-center md:justify-start mb-10 md:mb-0 ml-auto">
            <Title>Welcome to Toonie Holding</Title>
            <Button variant="solid" href="/about">Solid Button</Button>
        </div>
    </div>
  );
}
