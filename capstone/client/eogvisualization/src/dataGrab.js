export async function oilData(){
    let data = await fetch('https://react.eogresources.com/graphql', {
    method: 'POST', 
    headers : {
        "Content-Type":"application/json"
    }, 
    body: JSON.stringify({
        query: `{getMeasurements(input: {metricName:"injValveOpen"})
        {
          metric
          at
          value
          unit
        }}`
    })
    }
    )
    let jsonData = await data.json();
    console.log(jsonData)
}