import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlantFill } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { FaTruck } from "react-icons/fa6";

const Process = () => {

const renderSteps = steps.map(item=>{
    return(
        <div>
            <span>{item.number}</span>

            <div>
                <div>
                    <span>{item.icon}</span>
                </div>
                <div>
                    <h4>{item.title}</h4>
                    <p>{item.para}</p>
                </div>
            </div>
        </div>
    )
})


  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="w-fit mr-auto">
          <Heading highlight="Our" heading="Process" />
        </div>
        <div>
            {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlantFill />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <FaTruck />,
  },
];
