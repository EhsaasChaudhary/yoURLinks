/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  property1: "primary-icon-only" | "default" | "primary-disabled" | "primary-with-icon" | "primary-loading";
  className: any;
  text: string;
}

export default function BtnPrimary({ property1, className, text = "Shorten Now!" }: Props) {
  return (
    <div
    className={`border border-solid border-[#144ee3] flex items-center shadow-[10px_9px_22px_#144ee361] pl-[25px] pr-[25.05px] py-[21px] rounded-[48px] justify-center relative ${
      property1 === "primary-with-icon" ? "w-[198px]" : property1 === "primary-icon-only" ? "w-[58px]" : "w-[178px]"
    } ${["primary-icon-only", "primary-loading", "primary-with-icon"].includes(property1) ? "gap-[10px]" : ""} ${
      property1 === "primary-disabled" ? "bg-[#144ee380]" : "bg-[#144ee3]"
    } ${className}`}
  >
    {["default", "primary-disabled", "primary-icon-only"].includes(property1) && (
      <div
        className={`w-fit mt-[-1.00px] tracking-[0] text-[16px] relative text-center whitespace-nowrap ${
          property1 === "primary-icon-only"
            ? "[font-family:'Font_Awesome_6_Pro-Solid',Helvetica]"
            : "[font-family:'Inter',Helvetica]"
        } ${property1 === "primary-icon-only" ? "mr-[-3.02px]" : ""} ${
          property1 === "primary-icon-only" ? "text-white" : "text-[#ffffff]"
        } ${property1 === "primary-icon-only" ? "ml-[-3.02px]" : ""} ${
          property1 === "primary-icon-only" ? "font-normal" : "font-semibold"
        } ${property1 === "primary-icon-only" ? "leading-[16px]" : "leading-[18px]"}`}
      >
        {property1 === "default" && <>{text}</>}

        {property1 === "primary-icon-only" && <>arrow-right</>}

        {property1 === "primary-disabled" && <>Disabled</>}
      </div>
    )}

    {["primary-loading", "primary-with-icon"].includes(property1) && (
      <>
        <div
          className={`w-fit mt-[-1.00px] tracking-[0] text-center whitespace-nowrap relative ${
            property1 === "primary-loading"
              ? "[font-family:'Font_Awesome_6_Pro-Solid',Helvetica]"
              : "[font-family:'Inter',Helvetica]"
          } ${property1 === "primary-loading" ? "text-[10px]" : "text-[16px]"} ${
            property1 === "primary-loading" ? "text-white" : "text-[#ffffff]"
          } ${property1 === "primary-loading" ? "font-normal" : "font-semibold"} ${
            property1 === "primary-loading" ? "leading-[10px]" : "leading-[18px]"
          }`}
        >
          {property1 === "primary-with-icon" && <>{text}</>}

          {property1 === "primary-loading" && <>circle</>}
        </div>
        <div
          className={`[font-family:'Font_Awesome_6_Pro-Solid',Helvetica] w-fit tracking-[0] text-white font-normal text-center whitespace-nowrap relative ${
            property1 === "primary-loading" ? "text-[8px]" : "text-[16px]"
          } ${property1 === "primary-loading" ? "leading-[8px]" : "leading-[16px]"}`}
        >
          {property1 === "primary-with-icon" && <>arrow-right</>}

          {property1 === "primary-loading" && <>circle</>}
        </div>
      </>
    )}

    {property1 === "primary-loading" && (
      <div className="text-[5px] leading-[5px] relative w-fit [font-family:'Font_Awesome_6_Pro-Solid',Helvetica] font-normal text-white text-center tracking-[0] whitespace-nowrap">
        circle
      </div>
    )}
  </div>
  )
}