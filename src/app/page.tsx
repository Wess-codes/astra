import Hero from "./components/hero";
import Services from "./components/services";
import Testimonials from "./components/testimoials";
import Values from "./components/values";
import Work from "./components/work";

export default function Home() {
  return (
    <>
      <div>
        <main className="overflow-x-hidden p-0 m-0">
        <Hero />
        <Services />
        <Work />
        <Values />
        <Testimonials />
        </main>
      </div>
    </>
  );
}
