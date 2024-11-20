import { Services } from "@/components/home/services/service";
import { Navbar } from "@/components/ui/navbar";
import { div } from "framer-motion/client";

export default function ServicesPage() {
  return (
    <div className="">
      <Navbar />
      <div className="mt-10 max-w-6xl mx-auto px-5">
        <Services />
      </div>
    </div>
  );
}
