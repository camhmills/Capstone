export const oilData = async () => {
    const url = 'https://react.eogresources.com/graphql'
    let data = await fetch(url, {
    method: 'POST', 
    headers : {
        "Content-Type":"application/json"
    }, 
    body: JSON.stringify({
        query: `{
            getMeasurements
                (input: 
                    {
                    metricName:
                        "oilTemp"
                    }
                )
            {
                metric
                at
                value
                unit
            }
        }`
    })
    }
    )
    const oilTempData = await data.json();
    return oilTempData;
}

export async function waterData(){
    const url = 'https://react.eogresources.com/graphql'
    let data = await fetch(url, {
        method: 'POST', 
        headers : {
            "Content-Type":"application/json"
        }, 
        body: JSON.stringify({
            query: `{
                getMeasurements
                    (input: 
                        {
                        metricName:
                            "waterTemp"
                        }
                    )
                {
                    metric
                    at
                    value
                    unit
                }
            }`
        })
    })
    const waterTempData = await data.json();
    return waterTempData;
}
export async function injValveOpenData(){
    const url = 'https://react.eogresources.com/graphql'
    let data = await fetch(url, {
        method: 'POST', 
        headers : {
            "Content-Type":"application/json"
        }, 
        body: JSON.stringify({
            query: `{
                getMeasurements
                    (input: 
                        {
                        metricName:
                            "injValveOpen"
                        }
                    )
                {
                    metric
                    at
                    value
                    unit
                }
            }`
        })
    })
    const injValveData = await data.json();
    return injValveData;
}
export async function flareTempData(){
    const url = 'https://react.eogresources.com/graphql'
    let data = await fetch(url, {
        method: 'POST', 
        headers : {
            "Content-Type":"application/json"
        }, 
        body: JSON.stringify({
            query: `{
                getMeasurements
                    (input: 
                        {
                        metricName:
                            "flareTemp"
                        }
                    )
                {
                    metric
                    at
                    value
                    unit
                }
            }`
        })
    })
    const flareTempData = await data.json();
    return flareTempData;
}
export async function tubingPressureData(){
    const url = 'https://react.eogresources.com/graphql'
    let data = await fetch(url, {
        method: 'POST', 
        headers : {
            "Content-Type":"application/json"
        }, 
        body: JSON.stringify({
            query: `{
                getMeasurements
                    (input: 
                        {
                        metricName:
                            "tubingPressure"
                        }
                    )
                {
                    metric
                    at
                    value
                    unit
                }
            }`
        })
    })
    const tubingPressureData = await data.json();
    return tubingPressureData;
}
export async function casePressureData(){
    const url = 'https://react.eogresources.com/graphql'
    let data = await fetch(url, {
        method: 'POST', 
        headers : {
            "Content-Type":"application/json"
        }, 
        body: JSON.stringify({
            query: `{
                getMeasurements
                    (input: 
                        {
                        metricName:
                            "casingPressure"
                        }
                    )
                {
                    metric
                    at
                    value
                    unit
                }
            }`
        })
    })
    const casePressureData = await data.json();
    return casePressureData;
}

export async function subscriptionData(){
    const url = 'https://react.eogresources.com/graphql'
    let data = await fetch(url, {
        method: 'POST', 
        headers : {
            "Content-Type":"application/json"
        }, 
        body: JSON.stringify({
            Subscription: `{
                newMeasurement
                {
                    metric
                    at
                    value
                    unit
                }
            }`
        })
    })
    let jsonData = await data.json();
    console.log(jsonData)
}