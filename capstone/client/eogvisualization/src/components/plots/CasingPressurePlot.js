import React from 'react'
import Plot from 'react-plotly.js'

export default function CasingPressurePlot(props) {
    const { caseData } = props;
    const CasingPressureList = caseData[0]?.data?.getMeasurements?.map(({value}) => value);
    const CasingPressureTime = caseData[0]?.data?.getMeasurements?.map(({at}) => new Date(at));
    const adjTempTime = CasingPressureTime?.slice(Math.max(CasingPressureTime?.length - 3600, 0))
    // make x axis time based
    let currentTemp = CasingPressureList?.at(-1);
    return (
        <div>
            <h2>
                Current Temperature: {currentTemp} F
            </h2>     
        <Plot 
            data = {[
                        {
                            x: adjTempTime,
                            y: CasingPressureList,
                            type: 'scatter',
                            mode: 'lines',
                            marker: {color: '#FAFAFA'},
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