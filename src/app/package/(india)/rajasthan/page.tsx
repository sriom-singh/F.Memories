import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";


const RajasthanPackagePage = () => {
  return (
    <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
      <Hero image={["/Rajasthan.jpg", "/rajasthan2.jpg", "/rajasthan3.jpg"]} />

      <PackageSummary
        nights={7}
        locations={["Jaipur", "Jodhpur", "Udaipur"]}
        price="₹48,000"
        title="Royal Rajasthan"
        subtitle="Palaces, deserts, and timeless traditions."
      />

      <Highlights
        points={[
          "Amber Fort & City Palace",
          "Mehrangarh Fort",
          "Desert safari experience",
          "Cultural folk performances",
        ]}
      />

      <Itinerary
        days={[
          { title: "Arrival in Jaipur", description: "Pink City sightseeing." },
          { title: "Jaipur Tour", description: "Amber Fort & Hawa Mahal." },
          { title: "Jodhpur", description: "Mehrangarh Fort visit." },
          { title: "Local Culture", description: "Folk dance & cuisine." },
          { title: "Udaipur", description: "Lake Pichola boat ride." },
          { title: "Udaipur Sightseeing", description: "City Palace tour." },
          { title: "Departure", description: "Return journey." },
        ]}
      />

      <Inclusions
        included={[
          "Hotels",
          "Breakfast",
          "Cultural Shows",
          "Private Transfers",
          "Sightseeing",
        ]}
      />
    </Section>
  );
};

export default RajasthanPackagePage;
