import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";

const MaharashtraPackagePage = () => {
  return (
    <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
      <Hero image={["/Maharashtra.jpg", "/maharashtra2.jpg", "/maharashtra3.jpg"]} />

      <PackageSummary
        nights={5}
        locations={["Mumbai", "Lonavala", "Mahabaleshwar"]}
        price="₹35,000"
        title="Vibrant Maharashtra"
        subtitle="Historic forts, bustling cities, and hill retreats."
      />

      <Highlights
        points={[
          "Gateway of India & Marine Drive",
          "Lonavala hill station views",
          "Mahabaleshwar strawberry farms",
          "Local street food experience",
        ]}
      />

      <Itinerary
        days={[
          { title: "Arrival in Mumbai", description: "Gateway of India & Marine Drive." },
          { title: "Mumbai Sightseeing", description: "Elephanta Caves & city tour." },
          { title: "Lonavala", description: "Scenic drive & viewpoints." },
          { title: "Mahabaleshwar", description: "Hill station exploration." },
          { title: "Leisure & Departure", description: "Shopping and return journey." },
        ]}
      />

      <Inclusions
        included={[
          "Hotel Accommodation",
          "Daily Breakfast",
          "Private Transfers",
          "Sightseeing Tours",
        ]}
      />
    </Section>
  );
};

export default MaharashtraPackagePage;
