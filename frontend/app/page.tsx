// Code written by Lucas Mouette

import styles from "./page.module.css";
import HomepageSection from "@/components/HomepageSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <HomepageSection />
      </main>
    </div>
  );
}
