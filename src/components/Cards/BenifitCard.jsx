const BenifitCard = ({ benifit }) => {
  return (
    <div className="p-10 font-Poppins bg-slate-800 shadow-sm rounded-lg flex items-start space-x-2">
      <div className="bg-gradient-to-tr from-lime-500 to-green-500 rounded-full p-2 text-white">
        {benifit.icon}
      </div>
      <div className="flex flex-col justify-start items-start">
        <h3 className="font-bold text-xl text-gray-300">{benifit.title}</h3>
        <p className="text-sm text-gray-400">{benifit.content}</p>
      </div>
    </div>
  );
};

export default BenifitCard;
