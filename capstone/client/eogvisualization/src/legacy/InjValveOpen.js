import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { injValveOpenData } from '../dataGrab';
import InjValveOpenPlot from './InjValveOpenPlot';
import { PlotDiv } from '../components/styled-components/PlotStyle';

export default function CasingPressure(props) {
    const { injValveData } = props;
    const dispatch = useDispatch();

    useEffect(() => { 
    const fetchData = async () => {
      let response = await injValveOpenData()
      dispatch({type: "ADD_INJ_DATA", payload: response});
    }
    fetchData()
    }, [dispatch])



    return (
        <PlotDiv>
        <InjValveOpenPlot injValveData = {injValveData}/>
        </PlotDiv>
    )
}