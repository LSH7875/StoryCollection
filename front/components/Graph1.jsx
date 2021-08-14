import React from 'react';
import { Bar } from 'react-chartjs-2';
import Styled from 'styled-components' 
import Store from '../store/context'
import {useContext} from 'react'

const Vertical = Styled.div`
        position:relative;
        width:100%;
        height:100%;
        overflow:hidden;
    &>.header>.title{
      
        width:100%;
        text-align:center;
    }`
const Graph = Styled.div`
    & > .bargraph{
        position:relative;
        width:80%;
        height:40vh;
        box-sizing:border-box;
        margin-left:10vw;

    }
`




  
  const VerticalBar = () => {
    const {dispatch,state}=useContext(Store);

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
          data: [parseInt(state.stat.stat1),parseInt(state.stat.stat2),parseInt(state.stat.stat3),parseInt(state.stat.stat4)],
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
      // maintainAspectRatio: false,
      //     responsive: false,
          scales: {
              xAxes: [{
                  gridLines: {
                      display:false
                      
                  }
              }],
              yAxes: [{
                  gridLines: {
                    display:false
                      
                  }   
              }]
          }
      }
      const plugins={
        chartAreaBorder
    }

    return (
      <>
    
    <Vertical>
      <div className='header'>
      </div>
      <Graph>
          <div className="hidden"></div>
          <div className ="bargraph">
                <Bar data={data} width={0} height={0} {...options} plugin={chartAreaBorder} />
            </div>
      </Graph>
    </Vertical>
 
    </>
  );}
  
  export default VerticalBar;