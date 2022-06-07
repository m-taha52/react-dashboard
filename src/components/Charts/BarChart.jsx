import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Tooltip, DateTime, Legend, Category, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts'

import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const BarChart = () => {

  const  {currentMode} = useStateContext()
  return (
    <ChartComponent
    id="area-chart"
    height='420px'
    primaryXAxis={barPrimaryXAxis}
    primaryYAxis={barPrimaryYAxis}
    chartArea={{
      border: {
        width: 0
      }
    }}
    tooltip={{enable: true}}
    background={currentMode === "Dark" ? "#33373E" : "#fff"}
    >

        <Inject services={[ ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
        <SeriesCollectionDirective>
          {barCustomSeries.map((item,index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default BarChart