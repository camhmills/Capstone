import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { tubingPressureData } from '../dataGrab';
import TubingPressurePlot from './TubingPressurePlot';

export default function TubingPressure(props) {
    const { tubeData } = props;
    const [liveTrack, setLiveTrack] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => { 
    const fetchData = async () => {
      let response = await tubingPressureData()
      dispatch({type: "ADD_TUBING_DATA", payload: response});
    }
    fetchData()
    }, [])



    return (
        <div>
        <button onClick = {() => setLiveTrack(!liveTrack)}>Live Tracking</button>
        <TubingPressurePlot tubeData = {tubeData}/>
        </div>
    )
}