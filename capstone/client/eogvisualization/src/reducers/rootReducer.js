import {combineReducers} from 'redux';

import OilTempReducer from './OilTempReducer'
import CasingPressureReducer from './CasingPressureReducer'
import FlareTempReducer from './FlareTempReducer'
import InjValveOpenReducer from './InjValveOpen';
import TubingPressureReducer from './TubingPressureReducer'
import WaterTempReducer from './WaterTempReducer'

const rootReducer = combineReducers({
    OilTempReducer,
    CasingPressureReducer,
    FlareTempReducer,
    InjValveOpenReducer,
    TubingPressureReducer,
    WaterTempReducer
})

export default rootReducer;