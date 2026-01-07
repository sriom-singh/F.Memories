import Hero from "../../components/hero";
import PackageSummary from "../../components/packageSummary";
import Highlights from "../../components/tripHighlights";
import Itinerary from "../../components/itinerarySection";
import Inclusions from "../../components/inc&exc";
import { Section } from "@/components/layout/Section";
const KashmirPackagePage = () => {
    return (
        <Section className="-mt-6 max-w-4xl flex flex-col gap-10">
            <Hero image={["/kashmir.jpg", "/kashmir2.jpg", "/kashmir3.jpg"]} />

            <PackageSummary
                nights={6}
                locations={["Srinagar", "Gulmarg", "Pahalgam"]}
                price="₹45,000"
                title="Heavenly Kashmir"
                subtitle="Snowy mountains, lakes, and timeless beauty."
            />

            <Highlights
                points={[
                    "Shikara ride on Dal Lake",
                    "Gondola cable car in Gulmarg",
                    "Scenic valleys of Pahalgam",
                    "Houseboat stay experience",
                ]}
            />

            <Itinerary
                days={[
                    { title: "Arrival in Srinagar", description: "Dal Lake shikara ride & houseboat stay." },
                    { title: "Gulmarg Excursion", description: "Gondola ride & snow activities." },
                    { title: "Pahalgam Visit", description: "Betaab Valley & Lidder River." },
                    { title: "Local Sightseeing", description: "Mughal Gardens & shopping." },
                    { title: "Leisure Day", description: "Relax or explore local markets." },
                    { title: "Departure", description: "Airport transfer." },
                ]}
            />

            <Inclusions
                included={[
                    "Hotel Accommodation",
                    "Daily Breakfast & Dinner",
                    "All Transfers",
                    "Sightseeing Tours",
                    "Houseboat Stay",
                ]}
            />
        </Section>
    );
};

export default KashmirPackagePage;
