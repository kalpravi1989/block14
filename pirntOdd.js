fn([2,4,6,8,11,20,15,22]);
fn([1,2,3,4,5,6,7,8,9,10]);
fn([70,42,55,81,21,91,34]);
fn([2,4,6,8,10,11,12]);

function fn(arr){
const ansArr=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==1){
        ansArr.push(arr[i]);
    }
}
console.log(ansArr);
}