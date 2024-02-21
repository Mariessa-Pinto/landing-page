import Button from "../Button";

export default function PriceCard(props: IPriceCard) {
    return (
        <div>
            <h2>{props.item}</h2>
            {/*Insert Spline*/}
            <p>{props.description}</p>
            <p>{props.price}</p>
            <Button text='Donate Now' link='/' border='border-red' bg='bg-red' />
        </div>
    )
}