import Link from "next/link";

const LargeButton = ({ text, link, border, bg, txt }: IButton) => {
    return (
        <Link href={link}>
            <button className={`rounded-full border-2 w-56 h-11 ${border} font-outfit ${txt} text-h4 font-medium ${bg} shadow-lg lg:text-wh2`}>
                {text}
            </button>
        </Link>
    );
}

export default LargeButton;