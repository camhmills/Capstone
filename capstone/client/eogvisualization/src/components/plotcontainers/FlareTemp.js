import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { flareTempData } from '../../dataGrab';
import FlareTempPlot from '../plots/FlareTempPlot';

export default function FlareTemp(props) {
    const { flareData } = props;
    const [liveTrack, setLiveTrack] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => { 
    const fetchData = async () => {
      let response = await flareTempData()
      dispatch({type: "ADD_FLARE_DATA", payload: response});
    }
    fetchData()
    }, [])



    return (
        <div>
        <button onClick = {() => setLiveTrack(!liveTrack)}>Live Tracking</button>
        <FlareTempPlot flareData = {flareData}/>
        </div>
    )
}