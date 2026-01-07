import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";
const SwitzerlandPackagePage = () => {
  return (
    <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
      <Hero image={["/Switzerland.jpg", "/Switzerland2.jpg", "/Switzerland3.jpg"]} />

      <PackageSummary
        nights={6}
        locations={["2N Lucerne", "2N Interlaken", "2N Zurich"]}
        price="₹2,10,000"
        title="Swiss Alpine Dream"
        subtitle="Snow peaks and scenic railways."
      />

      <Highlights
        points={[
          "Mount Titlis excursion.",
          "Scenic train rides.",
          "Lake Lucerne cruise.",
        ]}
      />

      <Itinerary
        days={[
          { title: "Lucerne", description: "City & lake tour." },
          { title: "Mount Titlis", description: "Snow experience." },
        ]}
      />

      <Inclusions
        included={[
          "Flights",
          "Hotels",
          "Breakfast",
          "Swiss Pass",
          "Schengen Visa",
        ]}
      />
    </Section>
  );
};

export default SwitzerlandPackagePage;
