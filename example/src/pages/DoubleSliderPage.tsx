import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { DurationSlider, ISliderMark } from "scorer-ui-kit";

const Header = styled.div`
  background: hsla(205, 77.4%, 63.5%, 1.000);
  height: 200px;
  width: 500px;
  padding: 20px;
  color: hsla(0, 0%, 100%, 1.000);
`;

const SlidersWrapper = styled.div`
  width: 500px;
  height: 500px;
  padding: 20px;
  background-color: hsla(0, 0%, 100%, 1.000);
`;

export const secToShortMinAndHours = (seconds: number) => {
  if (seconds >= 3600) {
    return {
      value: Math.round(seconds / 3600),
      label: Math.round(seconds / 3600) + "h"
    };
  }

  if (seconds >= 60) {
    return {
      value: Math.round(seconds / 60),
      label: Math.round(seconds / 60) + "m"
    };
  }

  return { value: seconds, label: seconds + "s" };
};

export const getTimeInSec = (time: number, unit: string) => {
  switch (unit) {
    case "hours":
      return time * 60 * 60;
    case "minutes":
      return time * 60;
    default:
      return time;
  }
};

const getLabel = (i: number, minTime: number) => {
  if (i === minTime) {
    return minTime + "s";
  }
  return "";
};

const TRAILS_MAX_TIME: any = 1800;
const HEATMAP_MAX_TIME: any = 3600;
const TRAILS_MIN_TIME: any = 3;
const HEATMAP_MIN_TIME: any = 3;

const getMarks = (step: number, minTime: number, maxTime: number) => {
  let i = minTime;
  const marks = [];
  while (i <= maxTime) {
    marks.push({
      value: i === minTime ? minTime : i,
      label: getLabel(i, minTime)
    });
    i += step;
  }
  marks.push(secToShortMinAndHours(maxTime));
  return marks;
};

const heatmapMarks: ISliderMark[] = getMarks(
  360,
  parseInt(HEATMAP_MIN_TIME, 10),
  parseInt(HEATMAP_MAX_TIME, 10)
);

const trailsMarks: ISliderMark[] = (getMarks(360, parseInt(TRAILS_MIN_TIME), parseInt(TRAILS_MAX_TIME)));

export const secToMinAndHours = (seconds: number) => {
  if (seconds >= 3600) {
    return {
      time: Math.round(seconds / 3600),
      unit: "hours"
    };
  }

  if (seconds >= 60) {
    return {
      time: Math.round(seconds / 60),
      unit: "minutes"
    };
  }

  return {
    time: seconds,
    unit: "seconds"
  };
};

interface IConfig {
  auto_highlight_enabled: boolean;
  heatmap_enabled: boolean;
  heatmap_expiry_time: { time: number; unit: string };
  people_enabled: boolean;
  trails_enabled: boolean;
  trails_expiry_time: { time: number; unit: string };
}
const DoubleSliderPage: React.FC = () => {

  const [config, setConfig] = useState<IConfig>({
    auto_highlight_enabled: false,
    heatmap_enabled: true,
    heatmap_expiry_time: { time: HEATMAP_MIN_TIME, unit: "seconds" },
    people_enabled: false,
    trails_enabled: true,
    trails_expiry_time: { time: TRAILS_MIN_TIME, unit: "seconds" }
  });

  const onChangeTrailTime = useCallback((key, time) => {
    setConfig((config) => {
      console.log('key', key);
      console.log('config', config);
      return ({ ...config, [key]: secToMinAndHours(time) })
    });
  }, []);

  return (
    <div>
      <Header>
        <h1>Test for inputSlider</h1>
        <p>{`Heat map Value: ${config.heatmap_expiry_time.time}`}</p>
        <p>{`Trails Value: ${config.trails_expiry_time.time}`}</p>
      </Header>
      <SlidersWrapper>
        <DurationSlider
          id="heatmap-duration-slider"
          max={HEATMAP_MAX_TIME}
          min={HEATMAP_MIN_TIME}
          disabled={!config.heatmap_enabled}
          inputCallback={(time) => onChangeTrailTime("heatmap_expiry_time", time)}
          marks={heatmapMarks}
          defaultValue={3}
          controlledValue={config.heatmap_expiry_time.time}
          title="Heatmap"
          timeUnit={config.heatmap_expiry_time.unit}
        />
        <DurationSlider
          id='trails-duration-slider'
          max={TRAILS_MAX_TIME}
          min={TRAILS_MIN_TIME}
          disabled={!config.trails_enabled}
          inputCallback={(time) => onChangeTrailTime('trails_expiry_time', time)}
          marks={trailsMarks}
          defaultValue={3}
          controlledValue={config.trails_expiry_time.time}
          title='Trails'
          timeUnit={config.trails_expiry_time.unit}
        />

      </SlidersWrapper>
    </div>
  );
};

export default DoubleSliderPage;