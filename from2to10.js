const matrix = [
    [0, 0, 1, 1],
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 0]
  ];
  
  const LENGTH = 8;
  
  const Uint8Array = (matrix) => {
    const width = matrix[0].length;
    const height = matrix.length;
  
    let current = 0;
    let bitsCount = 0;
    const resultArray = [];
  
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
          // 0, 0, 0, 1, 3
          console.log(current)
        current = current << 1;
        // 0, 0, 0, 10(2), 110(6), 
        console.log(current)
        console.log(current, matrix[i][j])
            // 0 | 0, 0 | 0,0 | 1 = 1, 10(2) | 1 = 3(11)
        current = current | matrix[i][j];
        
        bitsCount++;
        console.log(bitsCount);
        if (bitsCount === LENGTH) {
          resultArray.push(current);
          current = 0;
          bitsCount = 0;
        }
      }
    }
   
    if (current) {
        console.log(current)
      current = current << LENGTH - bitsCount;
      resultArray.push(current);
      console.log(current)
    }

    return resultArray;
  }
  const array = Uint8Array(matrix);
  console.log(array);