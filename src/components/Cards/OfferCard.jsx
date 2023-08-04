const OfferCard = ({ offer }) => {
  return (
    <div className="p-3 bg-[#20293A] shadow-md rounded-lg flex items-start space-x-2">
        <img className="w-24 " src={offer.image} alt="" />
      <div className="flex flex-col justify-start items-start">
        <h3 className="font-semibold tracking-widest mb-[1px] text-xl text-gray-300">{offer.title}</h3>
        <p className="text-sm text-gray-400">{offer.content}</p>
      </div>
    </div>
  );
};

export default OfferCard;
