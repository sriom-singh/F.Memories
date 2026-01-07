import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";

const LadakhPackagePage = () => {
  return (
    <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
      <Hero image={["/ladakh.jpg", "/ladakh2.jpg", "/ladakh3.jpg"]} />

      <PackageSummary
        nights={7}
        locations={["Leh", "Nubra Valley", "Pangong Lake"]}
        price="₹52,000"
        title="Adventurous Ladakh"
        subtitle="High passes, monasteries, and surreal landscapes."
      />

      <Highlights
        points={[
          "Pangong Lake overnight stay",
          "Khardung La Pass",
          "Buddhist monasteries",
          "Camel safari in Nubra",
        ]}
      />

      <Itinerary
        days={[
          { title: "Arrival in Leh", description: "Acclimatization & rest." },
          { title: "Leh Sightseeing", description: "Shanti Stupa & monasteries." },
          { title: "Nubra Valley", description: "Sand dunes & camel safari." },
          { title: "Pangong Lake", description: "Scenic drive & lakeside stay." },
          { title: "Return to Leh", description: "Photography stops." },
          { title: "Leisure Day", description: "Local shopping." },
          { title: "Departure", description: "Airport drop." },
        ]}
      />

      <Inclusions
        included={[
          "Hotels & Camps",
          "Breakfast & Dinner",
          "Inner Line Permits",
          "All Transfers",
          "Local Guide",
        ]}
      />
    </Section>
  );
};

export default LadakhPackagePage;
