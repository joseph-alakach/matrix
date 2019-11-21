
function multiplyMatrices(matrix1,matrix2){
    
 let matrix=[];
    for(let i=0;i<matrix1.length;i++){
        let array=[]; 
        for(let j=0;j<matrix1[i].length;j++){
            let sum=0;
           for(let k=0;k<matrix2[0].length;k++){
               sum+=matrix1[i][k]*matrix2[k][j];
            
               
            } 
           array.push(sum);
           
        }
        matrix.push(array);
    }
    return matrix;
}
function printMatrix(matrix) {
	let result = "";

	for(let row = 0; row < matrix.length; row++) {
		for(let col = 0; col < matrix[row].length; col++) {
			result += matrix[row][col] + "\t";
		}
		result += "\n";
	}
	console.log(result);
}
module.exports={
    multiplyMatrices,
    printMatrix,
}
