const LENGTH = 8;

const uint8ArrayToMatrix = (array) => {
    let result = [];
    let buffer = [];
    array.forEach(num => {
      for (let i = 0; i < LENGTH; i++) {
        console.log(num & 1)
        buffer.push(num & 1);
        num = num >> 1;
        console.log(num); // 27, 13, 6, 3, 1, 0, 0, 0
      }
      result = result.concat(buffer.reverse());
      buffer = [];
    });
  
    return result;
  }
  
  const array = [54]
  console.log(uint8ArrayToMatrix(array)); // 0 0 1 1 0 1 1 0 => 54
  
  
  
  //00110110
  //00000001
  //00000000