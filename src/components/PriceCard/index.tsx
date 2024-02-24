import Button from "../Button";
import Spline from '@splinetool/react-spline';

export default function PriceCard(props: IPriceCard) {
    return (
        <div className={`flex flex-col gap-5 items-center md:w-price bg-white rounded-3xl border-blue border-2 p-8 h-700 justify-around`}>
            <h2 className={`font-outfit text-h3 font-bold`}>{props.item}</h2>
                <div>
                    <Spline scene={props.spline}/>
                </div>
            <p className={`font-outfit text-base`}>{props.description}</p>
            <p className={`font-outfit text-h1 font-bold`}>{props.price}</p>
            <div className={`flex justify-center w-full`}>
                <Button text='Donate Now' link='/' border='border-red' bg='bg-red' txt='text-white'  />
            </div>
        </div>
    )
}