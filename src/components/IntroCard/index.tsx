import Button from "../Button";

export default function IntroCard() {
    return (
        <div className={`flex flex-col gap-5 w-7/12 bg-white rounded-3xl border-blue border-2 p-10`}>
            <h1 className={`font-outfit text-h1 font-bold`}>Find Your Perfect Furry Friend: Take the Quiz to Discover the Best Breed For You and Adoptable Dogs Nearby!</h1>
            <p className={`font-outfit text-base`}>Are you considering adopting a furry friend but not sure which dog breed suits you best? Rescue Radar is here to help you find the ideal match! Take our quiz to unveil the perfect dog breed tailored to your lifestyle and preferences. Plus, explore a variety of adoptable dogs waiting for their furever homes near you.</p>
            <p className={`font-outfit text-h4 font-semibold pt-5 pb-4`}>Sign up to receive our monthly newsletter</p>
            <Button text='Sign Up' link='/' border='border-blue' bg='bg-white' txt='text-black' />
        </div>
    )
}