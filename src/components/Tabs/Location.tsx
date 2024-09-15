const Location = () => {
    
  return (
    <div className="pt-8">
      <div className="mb-4 pl-6">
        <h2 className="text-2xl font-semibold text-gray-800 pb-2">
          Where you will be
        </h2>
        <h4 className="">Newport, Oregon, United States</h4>
      </div>
      <div className="flex flex-col items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90873.88860851487!2d-124.13229816940246!3d44.62137951372735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c1d5db4c7c988d%3A0xd41f72f161fcfb72!2sNewport%2C%20OR%2C%20USA!5e0!3m2!1sen!2sin!4v1726406697905!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="border-0 rounded-xl shadow-xl"
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
