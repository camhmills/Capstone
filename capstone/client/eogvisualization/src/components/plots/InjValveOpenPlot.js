import React from 'react'
import Plot from 'react-plotly.js'

export default function injValvePlot(props) {
    const { injValveData } = props;
    const injValveList = injValveData[0]?.data?.getMeasurements?.map(({value}) => value);
    const injValveTime = injValveData[0]?.data?.getMeasurements?.map(({at}) => new Date(at));
    const adjTempTime = injValveTime?.slice(Math.max(injValveTime?.length - 3600, 0))
    // make x axis time based
    let currentTemp = injValveList?.at(-1);
    return (
        <div>
            <h2>
                {currentTemp} F
            </h2>     
        <Plot 
            data = {[
            {
                x: adjTempTime,
                y: injValveList,
                type: 'scatter',
                mode: 'lines',
                marker: {color: 'green'},
            },
        ]}
            layout = {
                        {
                            width: 1500,
                            height: 860, 
                            title: 'Plotly', 
                            bgcolor: '#282c34'
                        }
                    }
        />
        </div>
    )
}