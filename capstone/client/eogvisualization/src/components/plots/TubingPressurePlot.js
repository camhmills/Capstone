import React from 'react'
import Plot from 'react-plotly.js'

export default function TubingPressurePlot(props) {
    const { tubeData } = props;
    const tubeList = tubeData[0]?.data?.getMeasurements?.map(({value}) => value);
    const tubeTime = tubeData[0]?.data?.getMeasurements?.map(({at}) => new Date(at));
    const adjTempTime = tubeTime?.slice(Math.max(tubeTime?.length - 3600, 0))
    // make x axis time based
    let currentTemp = tubeList?.at(-1);
    return (
        <div>
            <h2>
                {currentTemp} F
            </h2>     
        <Plot 
            data = {[
                        {
                            x: adjTempTime,
                            y: tubeList,
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