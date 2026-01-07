import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";
const FrancePackagePage = () => {
  return (
    <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
      <Hero image={["/France.jpg", "/france2.jpg", "/france3.jpg"]} />

      <PackageSummary
        nights={6}
        locations={["4N Paris", "2N Nice"]}
        price="₹1,90,000"
        title="Romantic France"
        subtitle="Art, fashion, and culinary delight."
      />

      <Highlights
        points={[
          "Eiffel Tower visit.",
          "Seine River Cruise.",
          "French Riviera tour.",
        ]}
      />

      <Itinerary
        days={[
          { title: "Paris Arrival", description: "City tour." },
          { title: "Versailles", description: "Palace visit." },
        ]}
      />

      <Inclusions
        included={[
          "Flights",
          "Hotels",
          "Breakfast",
          "Sightseeing",
          "Schengen Visa",
        ]}
      />
    </Section>
  );
};

export default FrancePackagePage;
