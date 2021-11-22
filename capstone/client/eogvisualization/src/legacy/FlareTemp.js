import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { flareTempData } from '../dataGrab';
import FlareTempPlot from './FlareTempPlot';
import { PlotDiv } from '../components/styled-components/PlotStyle';

export default function FlareTemp(props) {
    const { flareData } = props;
    const dispatch = useDispatch();

    useEffect(() => { 
    const fetchData = async () => {
      let response = await flareTempData()
      dispatch({type: "ADD_FLARE_DATA", payload: response});
    }
    fetchData()
    }, [])



    return (
        <PlotDiv>
        <FlareTempPlot flareData = {flareData}/>
        </PlotDiv>
    )
}