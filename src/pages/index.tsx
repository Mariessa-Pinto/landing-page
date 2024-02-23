import Header from "@/components/Header";
import IntroCard from "@/components/IntroCard";
import PriceCard from "@/components/PriceCard";
import Features from "@/components/Features";
import SignUp from "@/components/SignUp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between bg-circle bg-no-repeat bg-top-right`}>
      <Header />
      <div className={`w-9/12 flex items-start py-32`}>
        <IntroCard />
      </div>
      <div className={`w-9/12 py-32`}>
        <h2 className={`font-outfit text-h2 font-bold text-white pb-5`}>How You Can Help</h2>
        <div className={`flex flex-row items-center justify-center gap-5`}>
          <PriceCard item='Throw Charlie a Bone' description="Support Charlie's happiness with a bone purchase! Charlie, a lovable two-year-old German Shepherd in shelter care, eagerly awaits a tasty treat. Your donation ensures Charlie and other shelter dogs receive love and care." price='$19.99' />
          <PriceCard item='Feed Spot' description="Help nourish Spot and friends with a food purchase! Spot, a furry companion in shelter care, relies on your support for meals and well-being. Your donation ensures shelters can provide essential sustenance to animals awaiting adoption." price='$79.99' />
          <PriceCard item='Help Max Sleep' description="Provide Max with a cozy retreat by purchasing a crate! Max, a precious companion in shelter care, seeks comfort and security. Your donation enables shelters to offer cozy sleeping arrangements to animals like Max, ensuring they feel safe and relaxed while awaiting their furever homes." price='$119.99' />
        </div>
      </div>
      <div className={`w-9/12 py-32`}>
        <h2 className={`font-outfit text-h2 font-bold text-white pb-5`}>Features</h2>
        <div>
          <Features />
        </div>
      </div>
      <div className={`w-9/12 py-32`}>
        <h2 className={`font-outfit text-h2 font-bold pb-5`}>Keep Up With Rescue Radar</h2>
        <div>
          <SignUp />
        </div>
      </div>
        <Footer />
    </main>
  );
}
