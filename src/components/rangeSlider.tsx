import { Slider } from "./ui/slider";
import React, { useCallback, useEffect, useState, useRef } from "react";
import MultiRangeSlider from "multi-range-slider-react";

const RangeSlider = ({ label,min,max,steps }: any) => {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(max);
  const handleInput = (e: any) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  return (
    <div className="my-2">
      <div className="flex items-center w-full">
        <h2 className="font-semibold text-sm">{label}:</h2>
        <p className="text-xs px-2">{minValue} - <span>{maxValue}</span></p>
      </div>
      <div className="">
        <MultiRangeSlider
          min={0}
          max={max}
          step={steps}
          style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
          minValue={minValue}
          maxValue={maxValue}
          barInnerColor="hsl(18 88% 55%)"
          thumbLeftColor="hsl(18 88% 55%)"
          thumbRightColor="hsl(18 88% 55%)"

          ruler={false}
          onInput={(e) => {
            handleInput(e);
          }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
