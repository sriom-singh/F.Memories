type HighlightsProps = {
  points: string[];
};

const Highlights: React.FC<HighlightsProps> = ({ points }) => {
  return (
    <section className=" max-w-4xl  bg-white shadow rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-gray-700 border-b border-black/30 pb-2">
        Trip Highlights
      </h2>

      <ul className="mt-4 space-y-2 list-disc pl-6 text-gray-600">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </section>
  );
};

export default Highlights;
