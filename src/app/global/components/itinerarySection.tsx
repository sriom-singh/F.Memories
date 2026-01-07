type Day = {
  title: string;
  description: string;
};

type ItineraryProps = {
  days: Day[];
};

const Itinerary: React.FC<ItineraryProps> = ({ days }) => {
  return (
    <section className="max-w-4xl  bg-white shadow rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-gray-700 border-b border-black/30 pb-2">
        Trip Details
      </h2>

      <div className="mt-6 space-y-6">
        {days.map((day, index) => (
          <div key={index}>
            <h3 className="font-semibold text-indigo-700">
              Day {index + 1}: {day.title}
            </h3>
            <p className="text-gray-700 mt-1">
              {day.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Itinerary;
