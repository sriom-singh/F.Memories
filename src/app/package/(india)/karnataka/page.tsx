import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";

const KarnatakaPackagePage = () => {
  return (
    <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
      <Hero image={["/Karnataka.jpg", "/karnataka2.jpg", "/karnataka3.jpg"]} />

      <PackageSummary
        nights={6}
        locations={["Bengaluru", "Mysore", "Coorg"]}
        price="₹39,000"
        title="Royal Karnataka"
        subtitle="Palaces, waterfalls, and coffee plantations."
      />

      <Highlights
        points={[
          "Mysore Palace visit",
          "Coorg coffee estates",
          "Abbey Falls",
          "Local cultural experiences",
        ]}
      />

      <Itinerary
        days={[
          { title: "Arrival in Bengaluru", description: "City tour & leisure." },
          { title: "Mysore", description: "Palace & local markets." },
          { title: "Mysore Sightseeing", description: "Brindavan Gardens." },
          { title: "Coorg", description: "Coffee plantations & waterfalls." },
          { title: "Coorg Leisure", description: "Relaxation & nature walk." },
          { title: "Departure", description: "Return journey." },
        ]}
      />

      <Inclusions
        included={[
          "Hotels",
          "Breakfast",
          "All Transfers",
          "Sightseeing",
        ]}
      />
    </Section>
  );
};

export default KarnatakaPackagePage;
