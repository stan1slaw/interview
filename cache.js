const _ = require('lodash');

function createCache(limit) {
    const data = {};
    let capacity = 0
    
    function getData(key) {
      if (!data[key]) {
        return -1;
      }
  
      data[key].freq++;
      const returnedValue = data[key].val;
      return returnedValue;
    }
    
    function removeLeastFrequent() {
      let lowestFreq;
      let lowestKey = ''; 

      _.forEach(data, (d, k) => {
        if (lowestFreq === undefined) {
          lowestFreq = d.freq;
          lowestKey = k;
        }
        
        if (d.freq < lowestFreq) {
          lowestFreq = d.freq;
          lowestKey = k;
        }
      });
      delete data[lowestKey];
      capacity--;
    }
    
    function putData(key, val) {
      if (capacity < limit) {
        if (!data[key]) {
          data[key] = {
            val,
            freq: 0
          } 
        } else {
          data[key] = val;
        }
        
        capacity++;
        return;
      }
      
      removeLeastFrequent();
      putData(key,val);
    }
    return {
      get: getData,
      put: putData
    }
  }
  
  const cache = createCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  cache.get(1);       
  cache.put(3, 3);
  cache.get(2);       
  cache.get(3);       
  cache.put(4, 4);    
  cache.get(1);       
  cache.get(3);       
  cache.get(4);    