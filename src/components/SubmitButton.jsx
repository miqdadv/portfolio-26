import React from "react";

const SubmitButton = ({ text = "Send", type = "button", isLoading }) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={`
        relative
        inline-flex
        items-center
        justify-center
        w-full
        h-[45px]
        px-4
        uppercase
        tracking-wider
        text-sm
        font-semibold
        text-white
        bg-gradient-to-r
        from-lavender
        to-royal
        border
        border-royal/60
        rounded-md
        select-none
        transition-all
        duration-150
        shadow-[inset_0_30px_30px_-15px_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.3),0_4px_0_#5b21b6,0_4px_6px_rgba(0,0,0,0.3),0_8px_20px_rgba(0,0,0,0.25)]
        active:translate-y-[4px]
        active:shadow-[inset_0_10px_15px_rgba(0,0,0,0.2)]
        hover:brightness-110
        disabled:opacity-70
        disabled:cursor-not-allowed
      `}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitButton;