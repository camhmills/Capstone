import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { casePressureData, oilData, flareTempData, waterData, injValveOpenData, tubingPressureData  } from '../middleware/dataGrab';
import Homeplot from '../plots/Homeplot';

import { PlotDiv } from '../styled-components/PlotStyle';

export default function Home() {
    const oilTempData = useSelector(state => state.OilTempReducer)
    const caseData = useSelector(state => state.CasingPressureReducer)
    const tubeData = useSelector(state => state.TubingPressureReducer)
    const waterTempData = useSelector(state => state.WaterTempReducer)
    const flareData = useSelector(state => state.FlareTempReducer)
    const injValveData = useSelector(state => state.InjValveOpenReducer)
    const dispatch = useDispatch();

  useEffect(() => { 
  const fetchData = async () => {
    let caseResponse = await casePressureData()
    let oilResponse = await oilData()
    let flareResponse = await flareTempData()
    let injResponse = await injValveOpenData()
    let waterResponse = await waterData()
    let tubeResponse = await tubingPressureData()
    dispatch({type: "ADD_CASING_DATA", payload: caseResponse})
    dispatch({type: "ADD_OIL_DATA", payload: oilResponse})
    dispatch({type: "ADD_FLARE_DATA", payload: flareResponse})
    dispatch({type: "ADD_INJ_DATA", payload: injResponse})
    dispatch({type: "ADD_WATER_DATA", payload: waterResponse})
    dispatch({type: "ADD_TUBING_DATA", payload: tubeResponse});
    }
  fetchData()
    }, [])  

    return (
        <PlotDiv>
        <Homeplot 
            oilTempData = {oilTempData} 
            caseData = {caseData} 
            tubeData = {tubeData} 
            waterTempData = {waterTempData} 
            flareData = {flareData} 
            injValveData = {injValveData}
          />
        </PlotDiv>
    )
}