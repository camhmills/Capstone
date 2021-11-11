import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { casePressureData } from '../../dataGrab';
import CasingPressurePlot from '../plots/CasingPressurePlot';

export default function CasingPressure(props) {
    const { caseData } = props;
    const [liveTrack, setLiveTrack] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => { 
    const fetchData = async () => {
      let response = await casePressureData()
      dispatch({type: "ADD_CASING_DATA", payload: response});
    }
    fetchData()
    }, [])



    return (
        <div>
        <button onClick = {() => setLiveTrack(!liveTrack)}>Live Tracking</button>
        <CasingPressurePlot caseData = {caseData}/>
        </div>
    )
}