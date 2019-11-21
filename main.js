const util=require("./utils.js");
const matrix1=[[1,2,3],
               [4,5,6],
               [7,8,9]]
                                          
const matrix2=[[1,2,3],
               [4,5,6],
               [7,8,9]]

const finalMatrix=util.multiplyMatrices(matrix1,matrix2);
util.printMatrix(finalMatrix);