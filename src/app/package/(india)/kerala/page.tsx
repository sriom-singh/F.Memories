import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";
const KeralaPackagePage = () => {
  return (
    <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
      <Hero image={["/kerala.jpg", "/kerala2.jpg", "/kerala3.jpg"]} />

      <PackageSummary
        nights={5}
        locations={["Munnar", "Alleppey", "Kochi"]}
        price="₹42,000"
        title="God’s Own Country"
        subtitle="Backwaters, greenery, and calm beaches."
      />

      <Highlights
        points={[
          "Houseboat stay",
          "Tea gardens of Munnar",
          "Backwater cruise",
          "Ayurvedic experience",
        ]}
      />

      <Itinerary
        days={[
          { title: "Arrival in Kochi", description: "Local sightseeing." },
          { title: "Munnar", description: "Tea plantations & waterfalls." },
          { title: "Munnar Exploration", description: "Eravikulam National Park." },
          { title: "Alleppey", description: "Houseboat stay." },
          { title: "Leisure Day", description: "Relaxation." },
          { title: "Departure", description: "Airport drop." },
        ]}
      />

      <Inclusions
        included={[
          "Hotels & Houseboat",
          "Breakfast",
          "Private Transfers",
          "Sightseeing",
        ]}
      />
    </Section>
  );
};

export default KeralaPackagePage;
