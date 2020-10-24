/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import Card, { CardBody } from '../Card';
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


const WidgetActiveUser = () => (
  <Card color="blue">
    <CardBody>
      <Title>Active User Right Now</Title>
      <CounterText>479</CounterText>
      <LabelText>Page views per minute</LabelText>
      <ChartWrapper>
        <Bar
          data={{
            datasets: [
              {
                label: '',
                data: [7,7,8,8,9,9,7,8,7,5,4,6,7,8,9,7,6,5,6,8,9,9,9,9,9,8,7,6,6,7,6,7,],
                borderColor: '#fff',
                backgroundColor: 'rgba(255,255,255, 0.8)',
              },
            ],
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
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
                    max: 10,
                    stepSize: 1,
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
            <Th>Top Active Pages</Th>
            <Th style={{textAlign: 'right'}}>Active User</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>page1</Td>
            <Td style={{textAlign: 'right'}}>10</Td>
          </tr>
          <tr>
            <Td>page1</Td>
            <Td style={{textAlign: 'right'}}>10</Td>
          </tr>
          <tr>
            <Td>page1</Td>
            <Td style={{textAlign: 'right'}}>10</Td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default WidgetActiveUser;
