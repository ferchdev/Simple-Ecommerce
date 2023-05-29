import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

export const PopUp = ({ isAdded }) => {

  const popUpRef = useRef();
  const animateRef = useRef();
  
  useEffect(() => {
    if (isAdded.quantity > 0) {
      popUpRef.current.classList.remove("translate-x-[100%]");
      animateRef.current.classList.add("animate-progress");
      setTimeout(() => {
        popUpRef.current.classList.add("translate-x-[100%]");
        animateRef.current.classList.remove("animate-progress");
      }, 1000);
    } else {
      return;
    }
  }, [isAdded.quantity, isAdded.name]);

  return (
    <div
      className="PopUp fixed bottom-5 right-0 z-[500] bg-white border border-slate-400 text-black text-lg xs:text-xl h-14 px-5 flex flex-col justify-center gap-1 transition-transform duration-500 ease-in-out translate-x-[100%]"
      ref={popUpRef}
    >
      <h1>
        {isAdded.isAdded
          ? "item has been updated in the cart"
          : "item has been added to the cart"}
        <FontAwesomeIcon
          icon={faSquareCheck}
          className="ms-[10px] text-green-800"
        />
      </h1>
      <div className="w-full h-1 bg-neutral-200">
        <div className="h-1 bg-blue-500 float-right" ref={animateRef}></div>
      </div>
    </div>
  );
};
