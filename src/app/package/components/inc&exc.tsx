type InclusionsProps = {
  included: string[];
  excluded?: string[];
};

const Inclusions: React.FC<InclusionsProps> = ({
  included,
  excluded,
}) => {
  return (
    <section className="max-w-4xl bg-gray-50 rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-gray-700 border-b border-black/30 pb-2">
        What&apos;s Included 
      </h2>

      <div className="grid  gap-6 mt-6">
        <div>
          {/* <h3 className="font-semibold text-green-700 mb-2">
            Included
          </h3> */}
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {included.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* <div>
          <h3 className="font-semibold text-red-700 mb-2">
            Excluded
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {excluded.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default Inclusions;
