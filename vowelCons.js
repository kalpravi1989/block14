
fn("hello");
fn("ukelele");
fn("awesome");
fn("onomonopia");
fn("textbook");

function fn(s){
let vowelcount=0;
let conscount=0;
for(let i=0;i<s.length;i++){
    if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'){
     vowelcount++;
    }else{
        conscount++;
    }
}
console.log(s," has",vowelcount," vowels and ",conscount," consonants" );
}