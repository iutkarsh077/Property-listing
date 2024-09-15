import { toast } from "react-toastify";

const ShareButton = () => {
  const shareData = {
    title: "Check this out!",
    text: "I found something interesting, have a look!",
    url: window.location.href, // Share the current page URL
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        alert("Content shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="relative flex justify-end">
      <button
        type="button"
        onClick={handleShare}
        className="text-white flex bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
      >
        <svg
          className="w-6 h-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h8m0 0l-4-4m4 4l-4 4m4-4H4"
          />
        </svg>
        {typeof navigator.share === "function" ? "Share this" : "Copy Link"}
      </button>
    </div>
  );
};

export default ShareButton;
