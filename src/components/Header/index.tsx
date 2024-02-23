import Image from "next/image";
import Button from "../Button";

export default function Header() {
    return (
        <header className={`w-9/12 flex flex-row items-center justify-between mt-5`}>
            <div className={`flex flex-row items-center`}>
                <Image
                    src={'/images/logo.svg'}
                    alt="logo"
                    width={99}
                    height={90}
                />
                <h2 className={`ml-5 font-outfit text-h1 font-bold`}>Rescue Radar</h2>
            </div>
            <div>
                <Button text='Sign Up' link='/' border='border-blue' bg='bg-white' txt='text-black' />
            </div>
        </header>
    )
}