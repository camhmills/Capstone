import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { injValveOpenData } from '../../dataGrab';
import InjValveOpenPlot from '../plots/InjValveOpenPlot';

export default function CasingPressure(props) {
    const { injValveData } = props;
    const [liveTrack, setLiveTrack] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => { 
    const fetchData = async () => {
      let response = await injValveOpenData()
      dispatch({type: "ADD_INJ_DATA", payload: response});
    }
    fetchData()
    }, [dispatch])



    return (
        <div>
        <button onClick = {() => setLiveTrack(!liveTrack)}>Live Tracking</button>
        <InjValveOpenPlot injValveData = {injValveData}/>
        </div>
    )
}