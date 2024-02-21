import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);
    return (
        <footer className={`w-9/12 flex flex-row items-center justify-between`}>
            <div className={`flex flex-row items-center`}>
                <Image
                    src={'/images/logo.svg'}
                    alt="logo"
                    width={40}
                    height={37}
                />
                <p>©Mariessa Pinto {currentYear}</p>
            </div>
            <div className={`flex flex-row gap-20`}>
                <Link href={'https://github.com/Mariessa-Pinto/rescue-radar'}>Rescue Radar Web App</Link>
                <p>Cookie Policy</p>
                <p>Privacy Policy</p>
                <p>User Agreement</p>
            </div>
        </footer>
    )
}