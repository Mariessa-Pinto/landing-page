import Button from "../Button";

export default function SignUp() {
    return (
        <div className={`flex flex-row`}>
            <div className={`flex flex-col`}>
                <h3>Suscribe to the Rescue Newsletter</h3>
                <label htmlFor="nameInput">Name</label>
                <input id="nameInput" type="text" placeholder="Enter your name" />
                <label htmlFor="emailInput">Email:</label>
                <input id="emailInput" type="email" placeholder="Enter your email" />
                <div className={`flex flex-row`}>
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">I agree to receive emails</label>
                </div>
                <Button text='Sign Up' link='/' border='border-red' bg='bg-red' />
            </div>
            {/**Insert Spline*/}
        </div>
    )
}