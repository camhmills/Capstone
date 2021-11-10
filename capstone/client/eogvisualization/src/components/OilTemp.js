import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { oilData } from '../dataGrab';
import OilTempPlot from './OilTempPlot';

export default function OilTemp(props) {
    const {oilTempData} = props;
    const [liveTrack, setLiveTrack] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => { 
    const fetchData = async () => {
      let response = await oilData()
      dispatch({type: "ADD_OIL_DATA", payload: response});
    }
    fetchData()
    }, [liveTrack ? oilTempData : null])



    return (
        <div>
        <button onClick = {() => setLiveTrack(!liveTrack)}>Live Tracking</button>
        <OilTempPlot oilTempData = {oilTempData}/>
        </div>
    )
}
