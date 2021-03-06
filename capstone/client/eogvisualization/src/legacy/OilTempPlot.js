import React from 'react'
import Plot from 'react-plotly.js'

export default function OilTempPlot(props) {
    const { oilTempData } = props;
    const oilTempList = oilTempData[0]?.data?.getMeasurements?.map(({value}) => value);
    const oilTempTime = oilTempData[0]?.data?.getMeasurements?.map(({at}) => new Date(at));
    const adjTempTime = oilTempTime?.slice(Math.max(oilTempTime?.length - 3600, 0))
    // make x axis time based
    let currentTemp = oilTempList?.at(-1);
    return (
        <div>
            <h2>
                {currentTemp} F
            </h2>     
        <Plot 
            data = {[
                        {
                            x: adjTempTime,
                            y: oilTempList,
                            type: 'scatter',
                            mode: 'lines',
                            marker: { color: 'green' },
                        },
                        {
                            x: adjTempTime,
                            y: oilTempList+100,
                            type: 'scatter',
                            mode: 'lines',
                            marker: { color: 'blue' },
                        },
            ]}
            layout = {
                        {
                            width: 1500,
                            height: 860, 
                            title: '', 
                            color: '#FAFAFA',
                            paper_bgcolor: '#282c34',
                            plot_bgcolor: '#282c34',
                        }
                    }
        />
        </div>
    )
}
