import {combineReducers} from 'redux';

import OilTempReducer from './OilTempReducer'
import CasingPressureReducer from './CasingPressureReducer'
import FlareTempReducer from './FlareTempReducer'
import InjValveOpenReducer from './InjValveOpen';
import TubingPressureReducer from './TubingPressureReducer'
import WaterTempReducer from './WaterTempReducer'
import LoginReducer from './LoginReducer'

const rootReducer = combineReducers({
    OilTempReducer,
    CasingPressureReducer,
    FlareTempReducer,
    InjValveOpenReducer,
    TubingPressureReducer,
    WaterTempReducer,
    LoginReducer
})

export default rootReducer;