import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";

const USAPackagePage = () => {
  return (
    <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
      {/* HERO SECTION */}
      <Hero image={["/USA.jpg", "/usa2.jpg", "/usa3.jpg"]} />

      {/* PACKAGE SUMMARY */}
      <PackageSummary
        nights={8}
        locations={[
          "3 Nights New York",
          "3 Nights Las Vegas",
          "2 Nights Los Angeles",
        ]}
        price="₹2,50,000"
        title="Ultimate USA Tour"
        subtitle="Iconic cities, legendary experiences, unforgettable memories."
      />

      {/* HIGHLIGHTS */}
      <Highlights
        points={[
          "Guided Statue of Liberty & Ellis Island tour in New York.",
          "Times Square night experience and Broadway surroundings.",
          "World-famous Las Vegas Strip and nightlife experience.",
          "Optional Grand Canyon tour from Las Vegas.",
          "Hollywood Walk of Fame and Beverly Hills visit.",
          "Universal Studios Hollywood full-day experience.",
        ]}
      />

      {/* ITINERARY */}
      <Itinerary
        days={[
          {
            title: "Day 1 – Arrival in New York",
            description:
              "Arrive at JFK Airport. Private transfer to hotel. Evening free to explore Times Square and nearby attractions."
          },
          {
            title: "Day 2 – New York City Tour",
            description:
              "Visit Statue of Liberty, Ellis Island, Central Park, Wall Street, Brooklyn Bridge, and 9/11 Memorial."
          },
          {
            title: "Day 3 – New York at Leisure",
            description:
              "Free day for shopping, Broadway shows, or optional city experiences."
          },
          {
            title: "Day 4 – Fly to Las Vegas",
            description:
              "Domestic flight to Las Vegas. Evening free to explore the Las Vegas Strip and casinos."
          },
          {
            title: "Day 5 – Las Vegas City Tour",
            description:
              "Visit iconic hotels, Fremont Street, Bellagio Fountain show. Optional Grand Canyon helicopter tour."
          },
          {
            title: "Day 6 – Fly to Los Angeles",
            description:
              "Transfer to airport for flight to Los Angeles. Evening at leisure."
          },
          {
            title: "Day 7 – Los Angeles Sightseeing",
            description:
              "Hollywood Walk of Fame, Beverly Hills, Rodeo Drive, Santa Monica Beach, and Universal Studios."
          },
          {
            title: "Day 8 – Departure",
            description:
              "Checkout from hotel and transfer to airport for return journey."
          },
        ]}
      />

      {/* INCLUSIONS */}
      <Inclusions
        included={[
          "International return airfare (economy class).",
          "Domestic flights within the USA.",
          "8 nights accommodation in 4-star hotels.",
          "Daily breakfast at hotels.",
          "Private airport and hotel transfers.",
          "Guided sightseeing tours as per itinerary.",
          "Universal Studios Hollywood entry ticket.",
          "All applicable hotel taxes.",
          "US visa assistance & documentation support.",
        ]}
      />
    </Section>
  );
};

export default USAPackagePage;
