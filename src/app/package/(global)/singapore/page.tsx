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
                image={["/singapore.jpg","/singapore2.jpg","/singapore3.jpg"]}
            />

            <PackageSummary
                nights={6}
                locations={["2N Bangkok", "2N Krabi", "2N Phuket"]}
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
                    { title: "Arrival in Bangkok", description: "Airport pickup and hotel check-in." },
                    { title: "Safari World", description: "Enjoy wildlife and marine shows." },
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
