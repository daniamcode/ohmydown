export default function mapDetailDelayGraph(response, id) {
    let dateFormatted = (response) => {
        for(let i = 0; i < response?.data?.length; i++) {
            response.data[i].time = response?.data[i]?.time.toTimeString()
            console.log(response?.data[i]?.time)
        }
    return response
    }

    let firstArray = [['x', `${id}`]]
    let result = firstArray.concat(dateFormatted(response)?.map(function(obj) {
        return Object.keys(obj).sort().reverse().filter(x => (x ==='delay' || x ==='time')).map(function(key) { 
          return obj[key];
        });
      }));

    return result
    }