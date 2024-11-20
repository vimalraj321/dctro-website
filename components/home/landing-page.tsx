import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Hero } from "./hero";
import { Services } from "./services/service";
import { Contact } from "./contact";
import { ReviewMarquee } from "./reviews/review";

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* <About /> */}
        <div className="mt-2">
          <Services />
        </div>

        {/* <About /> */}
        <div className="mt-32">
          <ReviewMarquee />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
