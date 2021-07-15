// Leetcode # 54 (Medium): Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/

var spiralOrder = function(matrix) {
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let left = 0;
    let matrixSize = matrix[0].length * matrix.length;
    const res = [];
    
    while (res.length < matrixSize) {
        for (let i = left; i <= right && res.length < matrixSize; i++) {
            res.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom && res.length < matrixSize; i++) {
            console.log(res);
            res.push(matrix[i][right]);
        }
        right--;

        for (let i = right; i >= left && res.length < matrixSize; i--) {
            res.push(matrix[bottom][i]);
        }
        bottom--;

        for (let i = bottom; i >= top && res.length < matrixSize; i--) {
            res.push(matrix[i][left]);
        }
        left++;

    }
    return res;
    
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));



