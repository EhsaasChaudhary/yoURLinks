import Swirl  from "@/Components/Swirl"
import './globals.css'

export default function MainPageTrialPage() {
  return (
    <div className="bg-[#0b101b] flex flex-row justify-center w-100">
    <div className="bg-[#0b101b] w-[1440px] h-[873px]">
      <div className="relative h-[910px] top-[-37px]">
        <Swirl className="!absolute !top-[37px] !left-0 !w-[1440px] !h-[873px]" />
        <div className="absolute w-[220px] h-[157px] top-[16px] left-[925px] bg-[#1c46a0] rounded-[59.22px] rotate-[-170.96deg] shadow-[0px_10.77px_26.92px_#0000001a,0px_-24px_39px_#000000] backdrop-blur-[86.13px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(86.13px)_brightness(100%)]" />
        <img
          className="absolute image_rotate w-[292px] h-[281px] top-[605px] left-[1075px]"
          alt="Rectangle"
          src="rectangle.svg"
        />
        <div className="absolute w-[223px] h-[88px] top-[221px] left-[45px] bg-[#1c46a0] rounded-[59.22px] rotate-[-43.16deg] shadow-[0px_10.77px_26.92px_#0000001a,0px_25px_39px_#000206] backdrop-blur-[86.13px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(86.13px)_brightness(100%)]" />
        {/* <ShortenYourLoooong
          className="!h-[368px] !absolute !left-[237px] !top-[156px]"
          divClassName="!h-[241px] !text-[70px] ![white-space:unset] !font-normal !left-[264px] ![font-family:'Inria_Serif-Regular',Helvetica] ![background:linear-gradient(180deg,rgb(0,60.72,254.14)_0%,rgb(85,170,83)_33.75%,rgb(83.44,170.33,83.33)_53.24%,rgb(20,78,227)_100%)] !top-[63px]"
          property1="default"
          text={
            <>
              Shorten Your <br />
              Loooooong <br />
              Links :)
            </>
          }
        /> */}
        <p className="absolute w-[1116px] h-[140px] top-[479px] left-[155px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#dfefff] text-[40px] text-center tracking-[2.00px] leading-[52.5px]">
          A short URL is a powerfull tool, it allow you share your link with easy and style
        </p>
      </div>
    </div>
  </div>
  )
}
