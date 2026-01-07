import Hero from "../../components/hero"
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";
// import SimilarPackages from "../components/";

const PackagePage = () => {
    return (
        <Section className="-mt-6 max-w-4xl flex flex-col gap-10 ">
            <Hero
                image={["/Singapore.jpg", "/singapore2.jpg", "/singapore3.jpg"]}
            />

            <PackageSummary
                nights={6}
                locations={[
                    "3N Singapore City",
                    "2N Sentosa Island",
                    "1N Leisure Stay",]}
                price="₹1,25,000"
                title="Let's Explore Singapore"
                subtitle="Join our Singapore tour for breathtaking views."
            />

            <Highlights
                points={[
                    "Accommodation: 6 nights stay at top-rated hotels with daily breakfast.",
                    "Transfers: All airport and inter-hotel transfers on a private basis.",
                    "Attractions Covered: Night Safari, Museum of Ice Cream, Gardens by the Bay (Cloud Forest + Supertree Grove), Sentosa Island Tour (Madame Tussauds 5-in-1 + Cable Car + Wings of Time), Universal Studios Singapore",
                    "Flexibility: Free time for shopping, exploring Clarke Quay, and Marina Bay.",
                ]}
            />

            <Itinerary
                days={[
          {
            title: "Day 1 – Arrival in Singapore",
            description:
              "Arrive at Changi Airport. Private transfer to hotel. Evening free for leisure or shopping at Orchard Road."
          },
          {
            title: "Day 2 – Singapore City Tour",
            description:
              "Visit Merlion Park, Marina Bay Sands (photo stop), Chinatown, Little India, and Singapore Flyer."
          },
          {
            title: "Day 3 – Night Safari Experience",
            description:
              "Day at leisure. Evening visit to the famous Night Safari with tram ride and live animal shows."
          },
          {
            title: "Day 4 – Sentosa Island Adventure",
            description:
              "Cable car ride, Madame Tussauds 5-in-1, Wings of Time show, and leisure time at Sentosa."
          },
          {
            title: "Day 5 – Universal Studios Singapore",
            description:
              "Full day at Universal Studios with thrilling rides, shows, and themed zones."
          },
          {
            title: "Day 6 – Gardens by the Bay & Leisure",
            description:
              "Visit Gardens by the Bay (Cloud Forest & Flower Dome). Evening free at Clarke Quay."
          },
          {
            title: "Day 7 – Departure",
            description:
              "Checkout and private transfer to airport for onward journey."
          },
        ]}
            />

            <Inclusions
                included={[
                    "International Flight",
                    "Daily Breakfast",
                    "Singapore Hotel – Sentosa Hotel (Private Transfer)",
                    "Sentosa Hotel – Singapore Airport (Private Transfer)",
                    "Night Safari (Private Transfer)",
                    "Gardens by the Bay – 2 Conservatories (Flower Dome + Cloud Forest) featuring Jurassic World (Private Transfer)",
                    "Sentosa Island Tour (Cable Car + Madame Tussauds 5-in-1 + Wings of Time) (Private Transfer)",
                    "Universal Studios Ticket Only (Without Transfers)",
                    "Museum of Ice Cream (Private Transfer)",
                    "Singapore Visa",
                    "Travel Insurance",
                ]}
            />
            {/* 
      <SimilarPackages
        packages={[
          { title: "Tropical Love Journey in Thailand", price: "₹67,699" },
          { title: "Kiss of the Andaman", price: "₹64,566" },
        ]}
      /> */}
        </Section>
    );
};

export default PackagePage;
