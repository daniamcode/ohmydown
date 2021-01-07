export default function mapDetailDelayGraph(response) {
    //convert java date format into javascript date format
    let dateFormatted = (response) => {
        for(let i = 0; i < response?.length; i++) {
            response[i].time = new Date(response[i].time)
        }
    return response
    }

    //then map
    let firstArray = [['x', `${response && response[0].url}`]]
    let result = firstArray.concat(dateFormatted(response)?.map(function(obj) {
        return Object.keys(obj).sort().reverse().filter(x => (x ==='delay' || x ==='time')).map(function(key) { 
          return obj[key];
        });
      }));

    return result
    }