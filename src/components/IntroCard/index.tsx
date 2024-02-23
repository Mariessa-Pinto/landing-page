import Button from "../Button";

export default function IntroCard() {
    return (
        <div className={`flex flex-col gap-5 w-7/12 bg-white rounded-3xl border-blue border-2 p-10`}>
            <h1 className={`font-outfit text-h1 font-bold`}>Anxiety Journaling Made Easy: Write Your Thoughts, Let AI Handle the Rest</h1>
            <p className={`font-outfit text-base`}>Do you struggle with General Anxiety Disorder or know someone who does? Innersight is here to empower you on your journey to managing your anxiety. We designed a digital journaling app that goes beyond traditional journaling techniques. Innersight is your daily companion to untangling your web of thoughts. </p>
            <p className={`font-outfit text-h4 font-semibold pt-5 pb-4`}>Sign up to receive our monthly newsletter</p>
            <Button text='Sign Up' link='/' border='border-blue' bg='bg-white' txt='text-black' />
        </div>
    )
}