import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";
const HimachalPackagePage = () => {
  return (
    <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
      <Hero image={["/Himachal.jpg", "/himachal2.jpg", "/himachal3.jpg"]} />

      <PackageSummary
        nights={6}
        locations={["Manali", "Solang", "Shimla"]}
        price="₹38,000"
        title="Scenic Himachal"
        subtitle="Hill stations, adventure, and cool climate."
      />

      <Highlights
        points={[
          "Solang Valley adventure sports",
          "Snow point visit",
          "Mall Road shopping",
          "Mountain scenic drives",
        ]}
      />

      <Itinerary
        days={[
          { title: "Arrival in Manali", description: "Local sightseeing." },
          { title: "Solang Valley", description: "Paragliding & snow activities." },
          { title: "Manali to Shimla", description: "Scenic drive." },
          { title: "Shimla Sightseeing", description: "Mall Road & Kufri." },
          { title: "Leisure Day", description: "Relaxation." },
          { title: "Departure", description: "Return journey." },
        ]}
      />

      <Inclusions
        included={[
          "Hotels",
          "Breakfast & Dinner",
          "Sightseeing",
          "Transfers",
        ]}
      />
    </Section>
  );
};

export default HimachalPackagePage;
