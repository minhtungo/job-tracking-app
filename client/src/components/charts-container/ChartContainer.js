import React, { useState } from 'react';

import { Wrapper } from './ChartContainer.styles';
import { useAppContext } from './../../context/appContext';
import BarChart from './../bar-chart/BarChart';
import AreaChart from './../area-chart/AreaChart';

const ChartContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>

      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};
export default ChartContainer;
