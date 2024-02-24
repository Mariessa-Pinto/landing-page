import Spline from '@splinetool/react-spline';

export default function Features() {
    return (
        <div className={`flex flex-col gap-10 lg:gap-20 w-full bg-white rounded-3xl border-blue border-2 p-10 lg:p-28`}>
            <div className={`flex gap-10 lg:gap-0 flex-col lg:flex-row`}>
                <div className={`flex flex-col items-center md:items-start lg:flex-row`}>
                    <div>
                        <Spline scene="https://prod.spline.design/EXU5VOWROn4x6oqv/scene.splinecode" />
                    </div>
                    <div className={`flex flex-col w-full pt-2 lg:pt-0 lg:w-8/12 lg:pl-3`}>
                        <h3 className={`font-outfit text-h3 font-bold`}>Best Breed For You Quiz</h3>
                        <p className={`font-outfit text-base`}>Discover your ideal canine companion with our interactive quiz. Answer a series of questions tailored to your preferences and lifestyle, and let our algorithm match you with the perfect dog breed suited to your unique personality and needs.</p>
                    </div>
                </div>
                <div className={`flex flex-col items-center md:items-start lg:flex-row`}>
                    <div>
                    <Spline scene="https://prod.spline.design/85xo1TzoUqdLMnh2/scene.splinecode" />
                    </div>
                    <div className={`flex flex-col w-full pt-2 lg:pt-0 lg:w-8/12 lg:pl-3`}>
                        <h3 className={`font-outfit text-h3 font-bold`}>List of Adoptable Dogs</h3>
                        <p className={`font-outfit text-base`}>Explore a curated list of dogs available for adoption in your area. Filter through various breeds, ages, and sizes to find the perfect match for your family and lifestyle. Each profile provides detailed information about the dog, making it easier for you to find your new furry friend.</p>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col gap-10 lg:gap-20 lg:gap-0 lg:flex-row`}>
                <div className={`flex flex-col items-center md:items-start lg:flex-row`}>
                    <div>
                        <Spline scene="https://prod.spline.design/tYana-oxbM0RQCkH/scene.splinecode" />
                    </div>
                    <div className={`flex flex-col w-full pt-2 lg:pt-0 lg:w-8/12 lg:pl-3`}>
                        <h3 className={`font-outfit text-h3 font-bold`}>Submit Application to Adopt</h3>
                        <p className={`font-outfit text-base`}>Ready to give a shelter dog a forever home? Submit your adoption application directly through our platform. Our streamlined process makes it easy for you to provide essential information and begin the journey towards welcoming your new pet into your home.</p>
                    </div>
                </div>
                <div className={`flex flex-col items-center md:items-start lg:flex-row`}>
                    <div>
                    <Spline scene="https://prod.spline.design/KoBRJ-DBar6iAFhi/scene.splinecode" />
                    </div>
                    <div className={`flex flex-col w-full pt-2 lg:pt-0 lg:w-8/12 lg:pl-3`}>
                        <h3 className={`font-outfit text-h3 font-bold`}>Learn About Rescues</h3>
                        <p className={`font-outfit text-base`}>Discover the importance of animal rescue and learn about the organizations dedicated to saving and rehoming animals in need. Explore resources, success stories, and educational content to deepen your understanding of rescue efforts and become an advocate for animal welfare.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}