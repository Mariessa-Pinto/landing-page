import Header from "@/components/Header";
import IntroCard from "@/components/IntroCard";
import PriceCard from "@/components/PriceCard";
import Features from "@/components/Features";
import SignUp from "@/components/SignUp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <Header />
      <div>
        <IntroCard />
      </div>
      <div>
        <h2>How You Can Help</h2>
        <div>
          <PriceCard item='Gain Clarity' description='InnerSight is tailored to individuals with Generalized Anxiety Disorder, helping you untangle the web of your thoughts, feelings, and daily experiences.' price='$19.99' />
          <PriceCard item='Gain Clarity' description='InnerSight is tailored to individuals with Generalized Anxiety Disorder, helping you untangle the web of your thoughts, feelings, and daily experiences.' price='$19.99' />
          <PriceCard item='Gain Clarity' description='InnerSight is tailored to individuals with Generalized Anxiety Disorder, helping you untangle the web of your thoughts, feelings, and daily experiences.' price='$19.99' />
        </div>
      </div>
      <div>
        <h2>Features</h2>
        <div>
          <Features />
        </div>
      </div>
      <div>
        <h2>Keep Up With Rescue Radar</h2>
        <div>
          <SignUp />
        </div>
      </div>
        <Footer />
    </main>
  );
}
