import { FaTruckMoving } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiSecurePaymentFill } from "react-icons/ri";
import OfferCard from "../Cards/OfferCard";
import freeShipping from "../../assets/freeShipping.png"
import securePayment from "../../assets/securePayment.png"
import easyReturns from "../../assets/easyReturns.png"
import backGuarantee from "../../assets/backGuarantee.png"

const offers = [
  {
    id: 1,
    title: "Free Shipping",
    content: "Take advantage of free shipping for all orders, whether domestic or international",
    image: freeShipping,
  },
  {
    id: 2,
    title: "Secure Payment",
    content: "Make your purchase with confidence using our prominent payment gateway, known for its reliability and safety.",
    image: securePayment,
  },
  {
    id: 3,
    title: "Easy Returns",
    content: "Benefit from free and fast returns on all orders, making the return experience easy for you",
    image: easyReturns,
  },
  {
    id: 4,
    title: "Back Guarantee",
    content: "Rest assured with our money-back guarantee within 1 week, and receive refunds directly to your bank account.",
    image: backGuarantee,
  },
];

const Offerings = () => {
  return (
    <div className="w-full bg-slate-50 border py-20">
      <h1 className="text-center font-bold lucida text-5xl mb-6">
        Our Offerings 
      </h1>
      <div className="grid grid-cols-2 gap-4 max-w-[1024px] mx-auto">
        {offers.map((offer) => (
          <OfferCard offer={offer} key={offer.id} />
        ))}
      </div>
    </div>
  );
};

export default Offerings;
