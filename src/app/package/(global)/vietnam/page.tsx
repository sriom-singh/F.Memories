import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";
const VietnamPackagePage = () => {
  return (
    <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
      <Hero image={["/vietnam.jpg", "/vietnam2.jpg", "/vietnam3.jpg"]} />

      <PackageSummary
        nights={6}
        locations={["3N Hanoi", "2N Da Nang", "1N Ho Chi Minh"]}
        price="₹1,10,000"
        title="Discover Vietnam"
        subtitle="Nature, culture, and history combined."
      />

      <Highlights
        points={[
          "Halong Bay cruise experience.",
          "Golden Bridge at Ba Na Hills.",
          "Historical city tours.",
        ]}
      />

      <Itinerary
        days={[
          { title: "Hanoi Arrival", description: "City tour & street food." },
          { title: "Halong Bay", description: "Cruise & kayaking." },
        ]}
      />

      <Inclusions
        included={[
          "Flights",
          "Hotels",
          "Breakfast",
          "Cruise",
          "Local Transfers",
          "Vietnam Visa",
        ]}
      />
    </Section>
  );
};

export default VietnamPackagePage;
