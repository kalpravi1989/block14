let s="There once was a donkey named Eeyore."
let count=0;
for(let i=0;i<s.length;i++){
    if(s[i]=='e'||s[i]=='E'){
        count++;
    }
}
console.log('count of e: ',count );