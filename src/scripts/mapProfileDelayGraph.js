export default function mapProfileDelayGraph(response, id1, id2, id3) {
  let formatted = (response) => {
    for (let i = 0; i < response?.length; i++) {
      for (let j = 0; j < response[i]?.healthCheckResponse?.length; j++) {
        let newDelay = `001delay${response[i].id.value}`
        let newTime = '000Time'
        //convert java date format into javascript date format
        response[i].healthCheckResponse[j].time = new Date(response[i].healthCheckResponse[j].time)
        //change name of properties
        response[i].healthCheckResponse[j][newDelay] = response[i].healthCheckResponse[j].delay
        response[i].healthCheckResponse[j][newTime] = response[i].healthCheckResponse[j].time
        //concatenate objects' properties
        if (i === response?.length - 1) {
          let newDelay1 = `001delay${response[i-1].id.value}`
          let newDelay2 = `001delay${response[i-2].id.value}`
          response[i].healthCheckResponse[j][newDelay1] = response[i-1].healthCheckResponse[j][newDelay1]
          response[i].healthCheckResponse[j][newDelay2] = response[i-2].healthCheckResponse[j][newDelay2]
        }
      }
    }
    return response
  }

  //then map
  let firstArray = [['x', `${id1}`, `${id2}`, `${id3}`]]
  if(formatted(response)) {
    let result = firstArray.concat(formatted(response)[2].healthCheckResponse?.map(function(obj) {
        return Object.keys(obj).sort().slice(0, 4).map(function(key) { 
          return obj[key];
        });
      }));
      console.log(result)
      return result
  }
}