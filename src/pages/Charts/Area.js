import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import {
  AreaCustomSeries,
  areaPrimaryYAxis,
  areaPrimaryXAxis,
  areaCustomSeries,
} from "../../data/dummy";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Area"  title="Inflation Rate in %"/>
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
    >
      <Inject services={[SplineAreaSeries, DateTime, Legend]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  );
};

export default Area;
