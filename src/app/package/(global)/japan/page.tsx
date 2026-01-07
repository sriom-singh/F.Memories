import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";

const JapanPackagePage = () => {
  return (
    <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
      <Hero image={["/Japan.jpg", "/japan2.jpg", "/japan3.jpg"]} />

      <PackageSummary
        nights={7}
        locations={["3N Tokyo", "2N Kyoto", "2N Osaka"]}
        price="₹1,75,000"
        title="Experience Timeless Japan"
        subtitle="Ancient traditions blended with modern wonders."
      />

      <Highlights
        points={[
          "Stay in premium hotels with daily breakfast.",
          "Tokyo city tour with Skytree.",
          "Kyoto temples & Arashiyama Bamboo Grove.",
          "Osaka Castle & shopping districts.",
        ]}
      />

      <Itinerary
        days={[
          { title: "Arrival in Tokyo", description: "Airport pickup and leisure time." },
          { title: "Tokyo Sightseeing", description: "Skytree, Shibuya, Asakusa." },
          { title: "Kyoto Exploration", description: "Fushimi Inari & Kinkaku-ji." },
        ]}
      />

      <Inclusions
        included={[
          "Return Flights",
          "Hotel Accommodation",
          "Daily Breakfast",
          "All Transfers",
          "Sightseeing Tours",
          "Japan Visa",
        ]}
      />
    </Section>
  );
};

export default JapanPackagePage;
