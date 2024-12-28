function printSymmetricNumberPattern(n,s="*") {

  for(let i=n;1<=i;i--){
    let firstColumn="",space="";
  
  for(let j=i;j>=1;j--){
    firstColumn+=s;
  }

  space+=" ".repeat(2*(n-i));
  
  console.log(firstColumn+space+firstColumn)

}

for(let i=1;i<=n;i++){
  let row="",space="";

  for(let j=1;j<=i;j++){
    row+=s;
  }

  space=" ".repeat(2*(n-i));

  console.log(row+space+row)

}


}

printSymmetricNumberPattern(5);
