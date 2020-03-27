const hasPathToSum = (node, targetSum) => {
    const sums = [];

    const generatePathSums = (currentNode, sumSoFar) => {
      let currentSum = sumSoFar;
      currentSum += currentNode.value;
      if (currentNode.left) {
        generatePathSums(currentNode.left, currentSum);
      }
      if (currentNode.right) {
        generatePathSums(currentNode.right, currentSum);
      }
      if (currentNode.left === null && currentNode.right === null) {
        sums.push(currentSum);
      }
    };

    generatePathSums(node, 0);
    return (sums.includes(targetSum));
  };
  
  

  
  const t1 = new Tree(5);
  const t1Left = new Tree(2);
  const t1Right = new Tree(6);
  
   //   5 
   // 2  6
  t1.left = t1Left;
  t1.right = t1Right;
  
  console.log(hasPathToSum(t1, 11));
  
  function Tree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  const t2 = new Tree(10);
  const t2Left = new Tree(1);
  const t2Right = new Tree(15);
  const t2LeftLeft = new Tree(-7);
  const t2LeftRight = new Tree(4);
  const t2RightLeft = new Tree(13);
  const t2RightRight = new Tree(25);
  
  t2Left.left = t2LeftLeft;
  t2Left.right = t2LeftRight;
  
  t2Right.left = t2RightLeft;
  t2Right.right = t2RightRight;
  
  t2.left = t2Left;
  t2.right = t2Right;
  