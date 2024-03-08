import HeroSection from "base/app/components/landing/HeroSection";
import Image from "next/image";
import Featured from "../featured/Featured";
import ModelList from "base/app/components/shared/ModelList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10">
        <HeroSection />
        <Featured/>
        <ModelList/>
    </main>
  );
}
