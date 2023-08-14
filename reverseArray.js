
fn([1,2,3]);
fn([1,3,5,7,9,11]);
fn([20,50,30,60,200]);
fn([1,-1,2,-3,5,-8,13]);

function fn(arr){
let ans=[];
let j=0;
for(let i=arr.length-1;i>=0;i--){
ans[j]=arr[i];
j++;
}
console.log(ans);
}