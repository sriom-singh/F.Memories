import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";


const IndiaGrandTourPackagePage = () => {
  return (
    <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
      <Hero image={["/India.jpg", "/rajasthan2.jpg", "/kashmir2.jpg"]} />

      <PackageSummary
        nights={12}
        locations={[
          "Delhi",
          "Agra",
          "Jaipur",
          "Kerala",
          "Goa",
        ]}
        price="₹85,000"
        title="Incredible India Grand Tour"
        subtitle="A complete journey across India’s heritage and beauty."
      />

      <Highlights
        points={[
          "Taj Mahal visit",
          "Royal Rajasthan experience",
          "Kerala backwaters",
          "Relaxing Goa beaches",
        ]}
      />

      <Itinerary
        days={[
          { title: "Arrival in Delhi", description: "City tour & monuments." },
          { title: "Agra", description: "Taj Mahal & Agra Fort." },
          { title: "Jaipur", description: "Amber Fort & Pink City." },
          { title: "Jaipur Sightseeing", description: "Local culture & markets." },
          { title: "Fly to Kerala", description: "Munnar transfer." },
          { title: "Munnar", description: "Tea plantations & waterfalls." },
          { title: "Alleppey", description: "Houseboat stay." },
          { title: "Fly to Goa", description: "Beach leisure." },
          { title: "Goa Sightseeing", description: "Churches & beaches." },
          { title: "Leisure Day", description: "Relaxation." },
          { title: "Cultural Day", description: "Local experiences." },
          { title: "Departure", description: "Return journey." },
        ]}
      />

      <Inclusions
        included={[
          "Hotels & Houseboat",
          "Daily Breakfast",
          "Domestic Flights",
          "All Transfers",
          "Sightseeing Tours",
        ]}
      />
    </Section>
  );
};

export default IndiaGrandTourPackagePage;
