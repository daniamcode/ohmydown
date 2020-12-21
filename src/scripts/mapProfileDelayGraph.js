export default function mapProfileDelayGraph(response) {

  let formatted = (response) => {
    for (let i = 0; i < response?.length; i++) {
      for (let j = 0; j < response[i]?.healthCheckResponse?.length; j++) {
        let newTime = '000Time'
        let newDelay = `001delay${response[i].id.value}`
        //convert java date format into javascript date format
        response[i].healthCheckResponse[j].time = new Date(response[i].healthCheckResponse[j].time)
        //change name of properties
        response[i].healthCheckResponse[j][newDelay] = response[i].healthCheckResponse[j].delay
        response[i].healthCheckResponse[j][newTime] = response[i].healthCheckResponse[j].time
        //group objects' properties into the last array of objects
        if (i === response?.length - 1) {
          for (let k = response?.length - 2; k >= 0; k--) {
            let newDelayGrouped = `001delay${response[k].id.value}`
            response[i].healthCheckResponse[j][newDelayGrouped] = response[k].healthCheckResponse[j][newDelayGrouped]
          }
        }
      }
    }
    return response
  }

  //then map
  if (formatted(response)) {
    let firstSubArray = []
    let firstArray = [firstSubArray]
    for (let i = 0; i < response?.length; i++) {
      firstSubArray?.push(`${response[i]?.id.value}`)
    }
    firstSubArray.sort()
    firstSubArray.unshift('x')

    let result = firstArray.concat(formatted(response)[response?.length - 1]?.healthCheckResponse?.map(function (obj) {
      return Object.keys(obj).sort().slice(0, response?.length + 1).map(function (key) {
        return obj[key];
      });
    }));
    return result
  }
}