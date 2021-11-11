import React from 'react'
import Plot from 'react-plotly.js'

export default function WaterTempPlot(props) {
    const { waterTempData } = props;
    const waterTempList = waterTempData[0]?.data?.getMeasurements?.map(({value}) => value);
    const waterTempTime = waterTempData[0]?.data?.getMeasurements?.map(({at}) => new Date(at));
    const adjTempTime = waterTempTime?.slice(Math.max(waterTempTime?.length - 3600, 0))
    console.log(adjTempTime)
    let currentTemp = waterTempList?.at(-1);
    return (
        <div>
            <h2>
                {currentTemp} F
            </h2>     
        <Plot 
            data = {[
                        {
                            x: adjTempTime,
                            y: waterTempList,
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
                            color: '#FAFAFA',
                            paper_bgcolor: '#282c34',
                            plot_bgcolor: '#282c34',
                        }
                    }
        />
        </div>
    )
}
