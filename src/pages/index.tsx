import Header from "@/components/Header";
import IntroCard from "@/components/IntroCard";
import PriceCard from "@/components/PriceCard";
import Features from "@/components/Features";
import SignUp from "@/components/SignUp";
import Footer from "@/components/Footer";
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between bg-circle bg-no-repeat bg-top-right lg:bg-top-right-lg lg:bg-100%`}>
      <Header />
      <div className={`w-11/12 lg:w-9/12 flex flex-col-reverse lg:flex-row md:items-center justify-between pb-10 pt-10 lg:pb-28 lg:pt-32`}>
        <IntroCard />
        <div className={`hidden md:block lg:pt-5`}>
          <Spline scene="https://prod.spline.design/qFuStBSM4XEI-iRT/scene.splinecode" />
        </div>
      </div>
      <div className={`w-11/12 lg:w-9/12 py-10 lg:py-28`}>
        <h2 className={`font-outfit text-h2 font-bold text-black lg:text-white pb-5`}>How You Can Help</h2>
        <div className={`flex flex-col lg:flex-row items-center justify-center gap-5`}>
          <PriceCard 
            spline="https://prod.spline.design/fzHKH8sqfVRvzcFl/scene.splinecode"       
            item='Throw Charlie a Bone' 
            description="Support Charlie's happiness with a bone purchase! Charlie, a lovable two-year-old German Shepherd in shelter care, eagerly awaits a tasty treat. Your donation ensures Charlie and other shelter dogs receive love and care." 
            price='$19.99' 
          />
          <PriceCard 
            spline="https://prod.spline.design/N6W2irMDALdFYqfC/scene.splinecode"       
            item='Feed Spot' 
            description="Help nourish Spot and friends with a food purchase! Spot, a furry companion in shelter care, relies on your support for meals and well-being. Your donation ensures shelters can provide essential sustenance to animals awaiting adoption." 
            price='$79.99' 
          />
          <PriceCard 
            spline="https://prod.spline.design/du6kumV7bQgrbUXp/scene.splinecode"       
            item='Help Max Sleep' 
            description="Provide Max with a cozy retreat by purchasing a crate! Max, a precious companion in shelter care, seeks comfort and security. Your donation enables shelters to offer cozy sleeping arrangements to animals like Max, ensuring they feel safe and relaxed while awaiting their furever homes." 
            price='$119.99' 
          />
        </div>
      </div>
      <div className={`w-11/12 lg:w-9/12 py-10 lg:py-28`}>
        <h2 className={`font-outfit text-h2 font-bold pb-5`}>Features</h2>
        <div>
          <Features />
        </div>
      </div>
      <div className={`w-11/12 py-10 lg:w-9/12 lg:pb-28 lg:pt-20`}>
        <h2 className={`font-outfit text-h2 font-bold pb-5`}>Keep Up With Rescue Radar</h2>
        <div>
          <SignUp />
        </div>
      </div>
        <Footer />
    </main>
  );
}
