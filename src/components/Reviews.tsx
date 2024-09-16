const ReviewBar = ({ width }: { width: any }) => (

  <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2 group">
    <div
      className="h-2.5 rounded transition-all duration-300 ease-in-out group-hover:scale-y-110 origin-left"
      style={{
        width: `${width}%`,
        background:
          "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
      }}
    ></div>
  </div>
);

const ReviewSummary = () => {
  const reviews = [
    { name: "Staff", score: 8.8, width: 88 },
    { name: "Comfort", score: 8.9, width: 89 },
    { name: "Free WiFi", score: 8.8, width: 88 },
    { name: "Facilities", score: 5.4, width: 54 },
    { name: "Value for money", score: 8.9, width: 89 },
    { name: "Cleanliness", score: 7.0, width: 70 },
    { name: "Location", score: 8.9, width: 89 },
  ];

  return (
    <>
      <h2 className="mb-4 font-bold text-2xl">Reviews</h2>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex items-center mb-5">
          <p className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">
            8.7
          </p>
          <p className="ms-2 font-medium text-gray-900 dark:text-white">
            Excellent
          </p>
          <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            376 reviews
          </p>
          <a
            href="#"
            className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Read all reviews
          </a>
        </div>
        <div className="gap-8 sm:grid sm:grid-cols-2">
          {reviews.map((review, index) => (
            <div key={index}>
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {review.name}
                </dt>
                <dd className="flex items-center mb-3">
                  <ReviewBar width={review.width} />
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {review.score}
                  </span>
                </dd>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewSummary;
