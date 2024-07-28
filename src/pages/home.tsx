import DualWeightText from "../components/dualWeightText";
import IntroSection from "../pageContents/home/introSection";
const home = () => {
  return (
    <>
      <IntroSection />
      <div className="cont mx-auto">
        <DualWeightText primaryText="About" secondaryText="Us" />
        <DualWeightText primaryText="Why to choose" secondaryText=" STAR&SHINE" />
        <DualWeightText primaryText="Efficient Construction  " secondaryText="Solutions" />
        <DualWeightText primaryText="Our" secondaryText="Services" />
        <DualWeightText primaryText="Our" secondaryText="Products" />
      </div>


    </>

  )
}

export default home