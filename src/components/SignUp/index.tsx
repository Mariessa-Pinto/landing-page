import Button from "../Button";
import Spline from '@splinetool/react-spline';

export default function SignUp() {
    return (
        <div className={`flex flex-col-reverse lg:flex-row justify-between w-full bg-white rounded-3xl border-blue border-2 p-10 lg:p-14`}>
            <div className={`flex flex-col gap-5`}>
                <h3 className={`font-outfit text-h3 font-bold`}>Suscribe to the Rescue Newsletter</h3>
                <div className={`flex flex-col gap-2`}>
                    <div className={`flex flex-col`}>
                        <label htmlFor="nameInput" className={`font-outfit text-h4`}>Name</label>
                        <input id="nameInput" type="text" placeholder="Enter your name" className="border-2 p-1 rounded-md border-blue" />
                    </div>
                    <div className={`flex flex-col`}>
                        <label htmlFor="emailInput" className={`font-outfit text-h4`}>Email</label>
                        <input id="emailInput" type="email" placeholder="Enter your email" className="border-2 p-1 rounded-md border-blue" />
                    </div>
                    <div className={`flex flex-row pb-2`}>
                        <input type="checkbox" id="checkbox"/>
                        <label htmlFor="checkbox" className={`font-outfit text-base pl-2`}>I agree to receive emails</label>
                    </div>
                </div>
                <Button text='Sign Up' link='/' border='border-red' bg='bg-red' txt='text-white'  />
            </div>
            <div className={`hidden lg:block lg:flex lg:items-center`}>
                <Spline scene="https://prod.spline.design/0cv18eklZTb2QMGS/scene.splinecode" />
            </div>
        </div>
    )
}