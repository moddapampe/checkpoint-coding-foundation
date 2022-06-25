function zipStrings(strA, strB) {
const zipper = [];
const zippedA = strA.split("");
const zippedB = strB.split("");

for (let i=0; i < zippedA.length || i < zippedB; i++) {
    zipper.push(zippedA[i]);
    zipper.push(zippedB[i]);
  }
return zipper.join("");
}





