import React, { useState } from 'react'
import Plot from 'react-plotly.js'
import { ToggleButton, ToggleButtonDiv } from '../styled-components/ButtonStyle'

export default function Homeplot(props) {
    const [oilVisible, setoilVisible] = useState(false)
    const [caseVisible, setCaseVisible] = useState(false)
    const [tubeVisible, setTubeVisible] = useState(false)
    const [waterVisible, setWaterVisible] = useState(false)
    const [injVisible, setInjVisible] = useState(false)
    const [flareVisible, setFlareVisible] = useState(false)

    const { oilTempData, caseData, tubeData, waterTempData, injValveData, flareData } = props;

    const caseList = caseData[0]?.data?.getMeasurements?.map(({value}) => value);
    const caseTime = caseData[0]?.data?.getMeasurements?.map(({at}) => new Date(at));
    const caseTempTime = caseTime?.slice(Math.max(caseTime?.length - 3600, 0))

    const oilList = oilTempData[0]?.data?.getMeasurements?.map(({value}) => value);
    const oilTime = oilTempData[0]?.data?.getMeasurements?.map(({at}) => new Date(at));
    const oilTempTime = oilTime?.slice(Math.max(oilTime?.length - 3600, 0))

    const tubeList = tubeData[0]?.data?.getMeasurements?.map(({value}) => value);
    const tubeTime = tubeData[0]?.data?.getMeasurements?.map(({at}) => new Date(at));
    const tubeTempTime = tubeTime?.slice(Math.max(tubeTime?.length - 3600, 0))

    const waterList = waterTempData[0]?.data?.getMeasurements?.map(({value}) => value);
    const waterTime = waterTempData[0]?.data?.getMeasurements?.map(({at}) => new Date(at));
    const waterTempTime = waterTime?.slice(Math.max(waterTime?.length - 3600, 0))

    const injList = injValveData[0]?.data?.getMeasurements?.map(({value}) => value);
    const injTime = injValveData[0]?.data?.getMeasurements?.map(({at}) => new Date(at));
    const injValveTime = injTime?.slice(Math.max(injTime?.length - 3600, 0))

    const flareList = flareData[0]?.data?.getMeasurements?.map(({value}) => value);
    const flareTime = flareData[0]?.data?.getMeasurements?.map(({at}) => new Date(at));
    const flareAdjTime = flareTime?.slice(Math.max(flareTime?.length - 3600, 0))


    return (
        <div>
            <h2>
                Drilling Data
            </h2>
        <ToggleButtonDiv>
            <ToggleButton onClick = {()=>setoilVisible(!oilVisible)}>Oil Temp</ToggleButton>
            <ToggleButton onClick = {()=>setCaseVisible(!caseVisible)}>Case Pressure</ToggleButton> 
            <ToggleButton onClick = {()=>setFlareVisible(!flareVisible)}>Flare Temp</ToggleButton> 
            <ToggleButton onClick = {()=>setTubeVisible(!tubeVisible)}>Tubing Pressure</ToggleButton> 
            <ToggleButton onClick = {()=>setWaterVisible(!waterVisible)}>Water Temp</ToggleButton> 
            <ToggleButton onClick = {()=>setInjVisible(!injVisible)}>Inj Valve</ToggleButton>   
        </ToggleButtonDiv>
        <Plot 
            data = {[
                        {
                            x: caseTempTime,
                            y: caseList,
                            type: 'scatter',
                            mode: 'lines',
                            marker: {color: 'green'},
                            visible: caseVisible
                        },
                        {
                            x: oilTempTime,
                            y: oilList,
                            type: 'scatter',
                            mode: 'lines',
                            marker: {color: 'blue'},
                            visible: oilVisible
                        },
                        {
                            x: tubeTempTime,
                            y: tubeList,
                            type: 'scatter',
                            mode: 'lines',
                            marker: {color: 'red'},
                            visible: tubeVisible
                        },
                        {
                            x: waterTempTime,
                            y: waterList,
                            type: 'scatter',
                            mode: 'lines',
                            marker: {color: 'white'},
                            visible: waterVisible
                        },
                        {
                            x: injValveTime,
                            y: injList,
                            type: 'scatter',
                            mode: 'lines',
                            marker: {color: 'black'},
                            visible: injVisible
                        },
                        {
                            x: flareAdjTime,
                            y: flareList,
                            type: 'scatter',
                            mode: 'lines',
                            marker: {color: 'purple'},
                            visible: flareVisible
                        },
        ]}
            layout = {
                        {
                            width: 1360,
                            height: 700, 
                            title: '', 
                            color: '#FAFAFA',
                            paper_bgcolor: '#E4E6ED',
                            plot_bgcolor: '#E4E6ED',
                        }
                    }
        />
        </div>
    )
}
