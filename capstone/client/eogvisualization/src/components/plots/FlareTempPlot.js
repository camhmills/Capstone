import React from 'react'
import Plot from 'react-plotly.js'

export default function OilTempPlot(props) {
    const { flareData } = props;
    const flareList = flareData[0]?.data?.getMeasurements?.map(({value}) => value);
    const flareTime = flareData[0]?.data?.getMeasurements?.map(({at}) => new Date(at));
    const adjTempTime = flareTime?.slice(Math.max(flareTime?.length - 3600, 0))
    // make x axis time based
    let currentTemp = flareList?.at(-1);
    return (
        <div>
            <h2>
                {currentTemp} F
            </h2>     
        <Plot 
            data = {[
                        {
                            x: adjTempTime,
                            y: flareList,
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