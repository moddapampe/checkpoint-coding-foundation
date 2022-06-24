function filterApiData(apiData, mandatoryKeys) {
let filtered = [];
for (let data of apiData) {
  let contain = true;
  for (let key of mandatoryKeys) {
    let compare = Object.keys(data);
    if (compare.includes(key) === false) {
      contain = false;
    }
  }
  if (contain === true) {
    filtered.push(data);
  }
}
return filtered;
}
