import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const FAQsCard = ({ question, answer } : {question : string , answer : string}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-gray-200 border-b-[1px] border-solid ">
      <div
        className="flex justify-between pb-5 mt-[24px] cursor-pointer "
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="text-[18px] text-black font-medium">{question}</div>
        <div className="flex items-center">
          {isOpen ? (
            <FiMinus className="text-[#98A2B3] text-[20px]" />
          ) : (
            <GoPlus className="text-[#98A2B3] text-[20px]" /> 
          )}
        </div>
      </div>
      <div
        className={
          isOpen
            ? "font-manrope text-[15px] leading-6 font-normal text-[#617275] py-2 pb-6 opacity-100 max-h-full transition-max-height ease-in-out duration-300"
            : "font-manrope text-[15px] font-normal text-[#617275] opacity-0 max-h-0  transition-max-height ease-in duration-300"
        }
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQsCard;