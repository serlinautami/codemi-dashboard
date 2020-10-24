/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import Card, { CardBody } from '../Card';
import { getCountrySummaryDetail, getGlobalSummaryDetail } from '../../utils/covidApi';

const Title = styled.span`
  margin: 0;
  display: block;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
`;

const CounterText = styled.span`
  display: block;
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 32px;
`;

const LabelText = styled.span`
  font-size: 12px;
  display: block;
  padding-bottom: 8px;
  border-bottom: 1px solid #ddd;
  opacity: 0.8;
`;

const ChartWrapper = styled.div`
  padding: 24px 0;
`;

const Table = styled.table`
  width: 100%;
`;
const Th = styled.th`
  padding: 8px;
  border-bottom: .5px solid rgba(255,255,255,0.2);
  text-align: left;
  font-size: 12px;
`;
const Td = styled.td`
  padding: 8px;
  font-size: 12px;
  border-bottom: .5px solid rgba(255,255,255,0.2);
`;


const WidgetActiveUser = () => {
  const [summary, setSummary] = React.useState({});
  const [topCountry, setTopCountry] = React.useState([]);


  React.useEffect(() => {
    getCountrySummaryDetail('id', 'confirmed').then(result => {
      setSummary(result[0]);
    })

    getGlobalSummaryDetail().then(result => {
      const data = result.slice(0, 30);
      setTopCountry(data);
    })
  }, [])


  const getLabels = () => {
    const data = [];
    if(topCountry) {
      topCountry.forEach(val => {
        data.push(val.countryRegion);
      })
    }

    return data;
  }

  const getData = () => {
    const data = [];
    if(topCountry) {
      topCountry.forEach(val => {
        data.push(val.confirmed);
      })
    }
    return data;
  }

  return (
    <Card color="blue">
      <CardBody>
        <Title>Confirmed Cases in {summary.countryRegion}</Title>
        <CounterText>{summary.confirmed}</CounterText>
        <LabelText>Top 30 Confirmed Case Countries</LabelText>
        <ChartWrapper>
          <Bar
            data={{
              datasets: [
                {
                  label: '',
                  data: getData(),
                  borderColor: '#fff',
                  backgroundColor: 'rgba(255,255,255, 0.8)',
                },
              ],
              labels: getLabels(),
            }}
            options={{
              legend: {
                display: false,
              },
              scaleLineColor: 'transparent',
              scales: {
                xAxes: [
                  {
                    ticks: {
                      display: false
                    },
                    gridLines: {
                      zeroLineWidth: 0,
                      lineWidth: 1,
                      drawBorder: false,
                      color: 'rgba(0, 0, 0, 0)',
                      zeroLineColor: 'transparent',
                    },
                  },
                ],
                yAxes: [
                  {
                    ticks: {
                      display: false,
                      stepSize: 500000,
                      beginAtZero: true,
                    },
                    gridLines: {
                      zeroLineColor: 'transparent',
                      drawBorder: false,
                      color: 'rgba(0, 0, 0, 0)',
                    },
                    
                  },
                ],
              }
            }}
          />
        </ChartWrapper>
        <Table>
          <thead>
            <tr>
              <Th>Country</Th>
              <Th style={{textAlign: 'right'}}>Cases</Th>
            </tr>
          </thead>
          <tbody>
            {topCountry.map((val, index) => {

              if(index >4) return null;
              
              return (
                <tr key={val.confirmed}>
                  <Td>{val.countryRegion}</Td>
                  <Td style={{textAlign: 'right'}}>{val.confirmed}</Td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
};

export default WidgetActiveUser;
