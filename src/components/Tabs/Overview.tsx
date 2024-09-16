import ReviewSummary from "../Reviews";
import FAQsCard from "../FAQCard";
import bedSVG from "../../assets/bed.svg";
import toiletSVG from "../../assets/toilet.svg";
import bathtubSVG from "../../assets/bathtub.png";
import ReviewCard from "../ReviewCard";

const Overview = () => {
  return (
    <div className="m-8">
      <div>
        <h1 className="text-2xl font-bold">Rooms & beds </h1>
        <h3 className="mt-4 font-semibold">4 bedrooms (sleeps 10)</h3>
        <ul className="flex my-6 flex-wrap gap-4 border-b-2 pb-5 border-solid">
          <li className="border-solid border p-4 rounded-lg bg-white space-y-2">
            <p>Bedroom 1</p>
            <img src={bedSVG} alt="bed" className="h-10 w-10" />
            <p className="font-extralight">1 king bed</p>
          </li>
          <li className="border-solid border p-4 rounded-lg bg-white space-y-2">
            <p>Bedroom 2</p>
            <img src={bedSVG} alt="bed" className="h-10 w-10" />
            <p className="font-extralight">1 king bed</p>
          </li>
          <li className="border-solid border p-4 rounded-lg bg-white space-y-2">
            <p>Bedroom 3</p>
            <img src={bedSVG} alt="bed" className="h-10 w-10" />
            <p className="font-extralight">1 king bed</p>
          </li>
          <li className="border-solid border p-4 rounded-lg bg-white space-y-2">
            <p>Bedroom 4</p>
            <p className="flex space-x-3">
              <img src={bedSVG} alt="bed" className="h-10 w-10" />
              <img src={bedSVG} alt="bed" className="h-10 w-10" />
            </p>
            <p className="font-extralight">1 king bed</p>
          </li>
        </ul>
        <h3 className="mt-4 font-semibold">2 bathrooms</h3>
        <ul className="flex my-6 flex-wrap gap-4 border-b-2 pb-5 border-solid">
          <li className="border-solid border p-4 rounded-lg bg-white space-y-2">
            <p>Bathroom 1</p>
            <div className="flex space-x-4">
              <img src={toiletSVG} alt="toilet" className="h-10 w-10" />
              <img src={bathtubSVG} alt="bathtub" className="h-10 w-10" />
            </div>
            <p className="font-extralight text-[12px]">
              Bathtub or shower · Toilet
            </p>
          </li>
          <li className="border-solid border p-4 rounded-lg bg-white space-y-2">
            <p>Bathroom 2</p>
            <div className="flex space-x-4">
              <img src={toiletSVG} alt="toilet" className="h-10 w-10" />
              <img src={bathtubSVG} alt="bathtub" className="h-10 w-10" />
            </div>
            <p className="font-extralight text-[12px]">
              Bathtub or shower · Toilet
            </p>
          </li>
        </ul>
      </div>

      <div className="block p-6 mb-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          About this property
        </h4>
        <h5 className="mb-2 text-lg font-semibold ">
          Oceanfront ~ Newport Whale Watch ~ Single Story Home ~ W/Hot Tub!
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          This sizable cozy home gazes at the Pacific Ocean and is just a stone
          throw away from the local sandy beach. The hypnotic sounds of the
          ocean waves crashing, the salty beach air, a curious sea otter poking
          his head out of the water, this and more all observed from this
          beautiful four bedroom two bath home. Three of the four bedrooms and
          the living quarters provide beautiful views of the ocean. Snuggling by
          the fireplace and gazing through the spacious windows that offer you
          an inspiring panoramic view of the ocean and with some luck you may
          get a glimpse of the majestic pod of Great White Whales that live in
          this area. Stepping out to the sundeck and smelling the salty ocean
          breeze and hearing the roar of the waves with the only concern of
          which chair you should relax in..... This home is nestled in Newport
          and is just minutes away from the Historical Nye Beach, bay front
          shopping and adored restaurants, all of this and more waiting for you
          to experience
        </p>
      </div>
      <div className="my-8 bg-white rounded-lg p-8 shadow-lg">
        <h1 className="font-bold text-2xl ">FAQs</h1>
        <FAQsCard
          question="What's the check-in policy?"
          answer="Check-in is anytime after 4:00 PM"
        />
        <FAQsCard
          question="What's the check-out policy?"
          answer="Check-out is anytime before 11:00 AM"
        />
        <FAQsCard
          question="Is breakfast included?"
          answer="Breakfast is not included"
        />
        <FAQsCard
          question="Is smoking allowed?"
          answer="Smoking is not allowed"
        />
        <FAQsCard question="Is there parking?" answer="Parking is available" />
      </div>
      <ReviewSummary />
      <div className="space-y-16 mt-12">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />

      </div>
    </div>
  );
};

export default Overview;
