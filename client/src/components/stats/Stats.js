import { useEffect } from 'react';
import { useAppContext } from './../../context/appContext';
import Loading from './../loading/Loading';
import StatsContainer from './../stats-container/StatsContainer';
import ChartContainer from './../charts-container/ChartContainer';

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return ( 
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartContainer />}
    </>
  );
};
export default Stats;
