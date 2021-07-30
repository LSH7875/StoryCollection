import React from 'react';
import { Bar } from 'react-chartjs-2';
import Styled from 'styled-components' 

const Vertical = Styled.div`
    &>.header>.title{
        width:100%;
        text-align:center;
    }`
const Graph = Styled.div`
    & > .bargraph{
        position:relative;
        width:80vw;
        height:40vh;
        box-sizing:border-box;
        margin-left:10vw;

    }
`

const chartAreaBorder = {
    id: 'chartAreaBorder',
    beforeDraw(chart, args, options) {
      const {ctx, chartArea: {left, top, width, height}} = chart;
      ctx.save();
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.setLineDash(options.borderDash || []);
      ctx.lineDashOffset = options.borderDashOffset;
      ctx.strokeRect(left, top, width, height);
      ctx.restore();
    }
  };
const data = {
    labels: ['순발력', '눈치력', '예절성', '논리력'],
    datasets: [
      { 
        data: [100, 20, 30, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 0,
      },
    ],
};
  
  const options = {
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }   
            }]
        }
    }


const plugins={
    chartAreaBorder
}
  
  const VerticalBar = () => (
    <Vertical>
      <div className='header'>
      </div>
      <Graph>
          <div className="hidden"></div>
          <div className ="bargraph">
                <Bar data={data} width={100} height={100} options={options} plugin={chartAreaBorder} />
            </div>
      </Graph>
    </Vertical>
  );
  
  export default VerticalBar;