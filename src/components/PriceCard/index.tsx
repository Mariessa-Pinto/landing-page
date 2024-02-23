import Button from "../Button";

export default function PriceCard(props: IPriceCard) {
    return (
        <div className={`flex flex-col gap-5 w-price bg-white rounded-3xl border-blue border-2 p-10`}>
            <h2 className={`font-outfit text-h3 font-bold`}>{props.item}</h2>
            {/*Insert Spline*/}
            <p className={`font-outfit text-base`}>{props.description}</p>
            <p className={`font-outfit text-h1 font-bold`}>{props.price}</p>
            <div className={`flex justify-center w-full`}>
                <Button text='Donate Now' link='/' border='border-red' bg='bg-red' txt='text-white'  />
            </div>
        </div>
    )
}