import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { waterData } from '../../dataGrab';
import WaterTempPlot from '../plots/WaterTempPlot';

export default function WaterTemp(props) {
    const { waterTempData } = props;
    const dispatch = useDispatch();

    useEffect(() => { 
    const fetchData = async () => {
      let response = await waterData()
      dispatch({type: "ADD_WATER_DATA", payload: response});
    }
    fetchData()
    }, [])



    return (
        <div>
        <button>Live Tracking</button>
        <WaterTempPlot waterTempData = {waterTempData}/>
        </div>
    )
}