import ReviewSummary from "../Reviews"
import FAQsCard from "../FAQCard"

const Overview = () => {
  return (
    <div className="m-8">
      <ReviewSummary/>
      <div className="my-8">
        <h1 className="font-bold text-2xl ">FAQs</h1>
        <FAQsCard question="What's the check-in policy?" answer="Check-in is anytime after 4:00 PM" />
        <FAQsCard question="What's the check-out policy?" answer="Check-out is anytime before 11:00 AM" />
        <FAQsCard question="Is breakfast included?" answer="Breakfast is not included" />
        <FAQsCard question="Is smoking allowed?" answer="Smoking is not allowed" />
        <FAQsCard question="Is there parking?" answer="Parking is available" />
      </div>
    </div>
  )
}

export default Overview
