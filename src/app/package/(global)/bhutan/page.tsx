import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";
const BhutanPackagePage = () => {
  return (
    <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
      <Hero image={["/bhutan.jpg", "/bhutan2.jpg", "/bhutan3.jpg"]} />

      <PackageSummary
        nights={5}
        locations={["2N Thimphu", "3N Paro"]}
        price="₹95,000"
        title="Peaceful Bhutan Escape"
        subtitle="Happiness, monasteries, and mountains."
      />

      <Highlights
        points={[
          "Tiger’s Nest Monastery hike.",
          "Traditional Bhutanese culture.",
          "Scenic Himalayan views.",
        ]}
      />

      <Itinerary
        days={[
          { title: "Arrival in Paro", description: "Local sightseeing." },
          { title: "Tiger’s Nest", description: "Guided monastery hike." },
        ]}
      />

      <Inclusions
        included={[
          "Hotels",
          "All Meals",
          "Private Transfers",
          "Guide",
          "Bhutan Permit",
        ]}
      />
    </Section>
  );
};

export default BhutanPackagePage;
