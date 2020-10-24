import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import Card from '../Card';

const ActionWrapper = styled.div`
  display: flex;
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

const WidgetUser = () => (
  <Card>
    <ActionWrapper>
      <ActionTab
        isActive
        title="Users"
        value="58 K"
        percentage="0.2%"
        info="vs Last 7 Days"
      />
      <ActionTab title="Course Completed" value="5.700" percentage="0.2%" />
      <ActionTab
        title="Learning Path Completed"
        value="1.120"
        percentage="0.4%"
      />
      <ActionTab title="Learning Hours" value="22m 40s" percentage="0.2%" />
    </ActionWrapper>
    <ChartWrapper>
      <Line
        data={{
          datasets: [
            {
              label: '',
              data: [16000, 15000, 9000, 12000, 15000, 15000],
              borderColor: '#4185f4',
              backgroundColor: 'transparent',
            },
          ],
          labels: ['08', '09', '10', '11', '12', '13'],
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
                  max: 20000,
                  stepSize: 5000,
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

export default WidgetUser;
