let n=5;
for(let i=1;i<=n;i++){
    let str="";
    for(let j=0;j<=i;j++){
        str += "*";
    }
    console.log(str);
}
console.log("----------------------")
for(let i=n;i>=1;i--){
    let str="";
    for(let j=0;j<=i;j++){
        str += "*";
    }
    console.log(str);
}
console.log("----------------------")
for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=n-i;j++){
        str += " ";
    }
    for(let j=1;j<=2*i-1;j++){
        str += "*";
    }
    console.log(str);
}