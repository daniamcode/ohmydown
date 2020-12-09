export default function mapDetailDelayGraph(response, id) {
    let firstArray = [['x', `${id}`]]
    let result = firstArray.concat(response?.map(function(obj) {
        return Object.keys(obj).sort().reverse().filter(x => (x ==='delay' || x ==='time')).map(function(key) { 
          return obj[key];
        });
      }));

    return result
    }