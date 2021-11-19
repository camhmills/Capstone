import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { casePressureData } from '../../dataGrab';
import CasingPressurePlot from '../plots/CasingPressurePlot';

import { PlotDiv } from '../styled-components/PlotStyle';

export default function CasingPressure(props) {
  const { caseData } = props;
  const dispatch = useDispatch();

  useEffect(() => { 
  const fetchData = async () => {
    let response = await casePressureData()
    dispatch({type: "ADD_CASING_DATA", payload: response});
    }
  fetchData()
    }, [])

    return (
        <PlotDiv>
        <CasingPressurePlot caseData = {caseData}/>
        </PlotDiv>
    )
}