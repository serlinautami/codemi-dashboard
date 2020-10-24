/* eslint-disable no-plusplus */
import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import moment from 'moment';
import Card from '../Card';
import { getGlobalSummary, getGlobalDaily } from '../../utils/covidApi';

const ActionWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const ActionTabWrapper = styled.div`
  width: ${props => (props.width ? props.width : '100%')};
  max-width: 100%;
  padding: 16px 16px;
  border-top: 5px solid transparent;
  ${props => (props.isActive ? 'border-top-color: #41b649' : 'opacity: 0.5')}
`;

const ActionTabTitle = styled.span`
  display: block;
  margin: 0;
  font-size: 14px;
  margin-bottom: 8px;
  text-transform: capitalize;
  ${props => (props.isActive ? 'font-weight: 500' : '')}
`;

const ActionTabValue = styled.span`
  display: block;
  font-size: 32px;
  ${props => (props.isActive ? 'font-weight: 500' : '')}
`;

const ActionTabPercentage = styled.span`
  font-size: 14px;
  color: green;
  display: block;
`;

const ActionTabInfo = styled.span`
  display: block;
  font-size: 14px;
  color: #222;
  opacity: 0.8;
`;

const ChartWrapper = styled.div`
  width: 100%;
  padding-bottom: 32px;
  position: relative;
`;

const ActionTab = ({ title, value, percentage, info, isActive }) => (
  <ActionTabWrapper isActive={isActive}>
    <ActionTabTitle isActive={isActive}>{title}</ActionTabTitle>
    <ActionTabValue isActive={isActive}>{value}</ActionTabValue>
    <ActionTabPercentage>{percentage}</ActionTabPercentage>
    <ActionTabInfo>{info}</ActionTabInfo>
  </ActionTabWrapper>
);

ActionTab.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  percentage: PropTypes.string,
  info: PropTypes.string,
  isActive: PropTypes.bool,
};
ActionTab.defaultProps = {
  title: '',
  value: '',
  percentage: '',
  info: '',
  isActive: false,
};

const WidgetUser = () => {
  const [activetab] = React.useState(0);
  const [globalData, setGlobalData] = React.useState(null);
  const [dailyData, setDailyData] = React.useState(null);

  const initiateData = React.useCallback(() => {
    getGlobalSummary().then(res => {
      const { confirmed, recovered, deaths } = res;
      setGlobalData({ confirmed, recovered, deaths });
    });

    getGlobalDaily().then(res => {
      const year = moment().format('YYYY');
      const filter = [];
      let i = 1;
      while (i <= 12) {
        filter.push(`${year}-${i <= 9 ? `0${i}` : i}-01`);
        i++;
      }

      const data = res.filter(val => {
        let founded = false;
        filter.forEach(a => {
          if (val.reportDate.indexOf(a) !== -1) {
            founded = true;
          }
        });
        return founded;
      });

      setDailyData(data);
    });
  }, []);

  React.useEffect(() => {
    initiateData();
  }, []);

  const getLabels = () => {
    const data = [];
    if (dailyData) {
      dailyData.forEach(value => {
        data.push(moment(value.reportDate).format('MMM DD'));
      });
    }
    return data;
  };

  const getDailyData = (key = 'totalConfirmed') => {
    const data = [];
    if (dailyData) {
      dailyData.forEach(value => {
        data.push(value[key]);
      });
    }
    return data;
  };

  return (
    <Card>
      <ActionWrapper>
        {globalData && (
          <React.Fragment>
            {Object.keys(globalData).map((key, index) => (
              <ActionTab
                isActive={index === activetab}
                key={key}
                title={key}
                value={globalData[key].value}
                info="Cases"
              />
            ))}
          </React.Fragment>
        )}
      </ActionWrapper>
      <ChartWrapper>
        <Line
          data={{
            datasets: [
              {
                label: '',
                data: getDailyData(),
                borderColor: '#4185f4',
                backgroundColor: 'transparent',
              },
            ],
            labels: getLabels(),
          }}
          options={{
            layout: {
              padding: {
                left: 16,
                right: 16,
                bottom: 16,
              },
            },
            bezierCurve: false,
            legend: {
              display: false,
            },
            elements: {
              line: {
                tension: 0, // disables bezier curves
              },
            },

            scales: {
              xAxes: [
                {
                  gridLines: {
                    zeroLineColor: 'transparent',
                    color: 'rgba(0, 0, 0, 0)',
                  },
                },
              ],
              yAxes: [
                {
                  position: 'right',
                  gridLines: {
                    drawBorder: false,
                    drawTicks: false,
                  },
                  ticks: {
                    // max: 1000000,
                    stepSize: 10000000,
                    beginAtZero: true,
                    callback(value) {
                      return Math.abs(value) > 999
                        ? `${Math.sign(value) *
                            (Math.abs(value) / 1000).toFixed(1)}K`
                        : Math.sign(value) * Math.abs(value);
                    },
                  },
                },
              ],
            },
          }}
        />
      </ChartWrapper>
    </Card>
  );
};

export default WidgetUser;
