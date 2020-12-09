export default function mapDetailDelayGraph(response) {
    let result = response?.map(function(obj) {
        return Object.keys(obj).sort().reverse().filter(x => (x ==='delay' || x ==='time')).map(function(key) { 
          return obj[key];
        });
      });

    return result
    }