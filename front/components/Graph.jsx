// import React from 'react';
// // import Chart from 'react-apexcharts';
// import dynamic from 'next/dynamic';
// const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });


// const Graph =()=>{
//         const options={
//             chart:{
//                 id:"basic-bar"
//             },
//             xaxis:{
//                 categories:["순발력","창의력","노오력","포용력"]
//             }}
            
//         const series=[
//                 {data:[100,50,70,60]}
//             ]
        

        
        
        
//     console.log({...options})
//     return (
//         <>
//         aaa'
//             <ApexCharts {...options} {...series} type="bar" width="500"/>
//         </>
//     )
// }

// export default Graph

import React, { Component } from "react";
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic';
import Styled from 'styled-components'

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const App = Styled.div`
    position:relative;
    width:80vw;
    height:43vh;
    left:10vw;
`
ApexCharts.colors=['#F44336', '#E91E63', '#9C27B0','green']

class Graph extends Component {
    constructor(props) {
    super(props);
    console.log('props.value',props)
    this.state = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                lines:{show:true},
                categories: ["호구력", "창의력", "예의범절", "순발력"]
            },
            yaxis: {
                lines:{show:false}
            }
        },
            series: [
            {
                name: "series-1",
                data: [props.value[1], props.value[2], props.value[3], props.value[4]]
            }
        ],
        grid: {
            show: true,
            borderColor: '#90A4AE',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: {
                lines: {
                    show: false
                }
            },  
            row: {
                colors: undefined,
                opacity: 0.5
            },  
            column: {
                colors: undefined,
                opacity: 0.5
            },  
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },  
        }
    };
}

    render() {
    return (
        <App>
            <ApexCharts
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="300"
                height="300"
                grid={this.state.grid}
            />
        </App>
    );}
}

export default Graph;