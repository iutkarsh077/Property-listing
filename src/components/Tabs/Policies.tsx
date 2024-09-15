
const Card = ({ children, className } : { children: any, className : any } ) => (
  <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const Policies = () => {
  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-7xl mx-auto pt-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Rental Policies
        </h1>
        <div className="flex flex-wrap gap-10 justify-center">
          {/* House Rules Card */}
          <Card className="w-full md:w-[calc(50%-1.25rem)] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
              <h2 className="text-2xl font-semibold text-white">House Rules</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  { label: "Check in after", value: "4:00 PM" },
                  { label: "Minimum age to rent", value: "21" },
                  { label: "Check out before", value: "11:00 AM" },
                  { label: "Children", value: "Children allowed: ages 0-17" },
                  { label: "Events", value: "No events allowed" },
                  { label: "Pets", value: "Pets allowed" },
                  { label: "Smoking", value: "Smoking is not permitted" }
                ].map((item, index) => (
                  <li key={index} className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 pb-2">
                    <span className="font-semibold w-full sm:w-1/3 text-indigo-700">{item.label}:</span>
                    <span className="w-full sm:w-2/3 text-gray-700">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Important Information Card */}
          <Card className="w-full md:w-[calc(50%-1.25rem)] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
              <h2 className="text-2xl font-semibold text-white">Important Information</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  { label: "Extra-person charges", value: "May apply and vary depending on property policy" },
                  { label: "Identification & Deposit", value: "Government-issued photo ID and a credit card, debit card, or cash deposit may be required at check-in for incidental charges" },
                  { label: "Special requests", value: "Subject to availability upon check-in and may incur additional charges; cannot be guaranteed" },
                  { label: "Onsite parties or group events", value: "Strictly prohibited" },
                  { label: "Safety features", value: "Host has indicated there is a carbon monoxide detector, a smoke detector, a fire extinguisher, and a deadbolt lock on the property" }
                ].map((item, index) => (
                  <li key={index} className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 pb-2">
                    <span className="font-semibold w-full sm:w-1/3 text-indigo-700">{item.label}:</span>
                    <span className="w-full sm:w-2/3 text-gray-700">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Policies;