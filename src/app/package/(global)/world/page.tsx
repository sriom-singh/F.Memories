import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";
const WorldPackagePage = () => {
    return (
        <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
            <Hero image={["/World.jpg", "/france.jpg", "/japan.jpg"]} />

            <PackageSummary
                nights={15}
                locations={["Europe", "Asia", "USA"]}
                price="₹5,50,000"
                title="Around the World"
                subtitle="One journey, endless memories."
            />

            <Highlights
                points={[
                    "Multiple countries in one tour.",
                    "Iconic global landmarks.",
                    "Luxury accommodations.",
                ]}
            />



            <Itinerary
                days={[
                    {
                        title: "Arrival in Paris, France",
                        description: "Meet & greet at the airport, private transfer to hotel, evening leisure walk near the Eiffel Tower."
                    },
                    {
                        title: "Paris City Tour",
                        description: "Guided city tour covering Louvre Museum, Champs-Élysées, Arc de Triomphe, and Seine River Cruise."
                    },
                    {
                        title: "Switzerland Transfer",
                        description: "High-speed train journey to Switzerland, scenic alpine views en route, hotel check-in at Lucerne."
                    },
                    {
                        title: "Mount Titlis Excursion",
                        description: "Cable car ride to Mount Titlis, snow activities, Ice Flyer, and Cliff Walk experience."
                    },
                    {
                        title: "Interlaken & Lake Cruise",
                        description: "Visit Interlaken, enjoy a relaxing lake cruise with panoramic mountain views."
                    },
                    {
                        title: "Fly to Tokyo, Japan",
                        description: "International flight to Tokyo, arrival and rest day to recover from jet lag."
                    },
                    {
                        title: "Tokyo Sightseeing",
                        description: "Visit Tokyo Skytree, Asakusa Temple, Shibuya Crossing, and Akihabara."
                    },
                    {
                        title: "Kyoto Cultural Tour",
                        description: "Bullet train to Kyoto, visit Fushimi Inari Shrine, Kinkaku-ji (Golden Pavilion), and Gion district."
                    },
                    {
                        title: "Fly to Singapore",
                        description: "Arrival in Singapore, Marina Bay Sands area walk and night city views."
                    },
                    {
                        title: "Singapore Highlights",
                        description: "Gardens by the Bay, Sentosa Island tour, Cable Car ride, and Wings of Time show."
                    },
                    {
                        title: "Universal Studios",
                        description: "Full-day Universal Studios Singapore with thrilling rides and shows."
                    },
                    {
                        title: "Fly to New York, USA",
                        description: "International flight to New York, evening leisure time at Times Square."
                    },
                    {
                        title: "New York City Tour",
                        description: "Statue of Liberty, Central Park, Wall Street, Brooklyn Bridge, and city skyline views."
                    },
                    {
                        title: "Las Vegas Experience",
                        description: "Flight to Las Vegas, casino visit, nightlife experience, and optional shows."
                    },
                    {
                        title: "Grand Canyon & Departure",
                        description: "Grand Canyon excursion followed by transfer to airport for final departure."
                    },
                ]}
            />

        </Section>
    );
};

export default WorldPackagePage;
