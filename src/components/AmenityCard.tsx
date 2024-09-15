const AmenityCard = ({
  imageUrl,
  name,
  title,
  number,
}: {
  imageUrl: string;
  name: string;
  title: string;
  number: string;
}) => {
  return (
    <div className="w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
      <div className="w-24 h-24 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full absolute -right-5 -top-7">
        <p className="absolute bottom-6 left-7 text-white text-2xl">{number}</p>
      </div>
      <div className="fill-violet-500 w-12">
        <img src={imageUrl} alt="icon" />
      </div>
      <h1 className="font-bold text-xl">{name}</h1>
      <p className="text-sm text-zinc-500 leading-6">{title}</p>
    </div>
  );
};

export default AmenityCard;
