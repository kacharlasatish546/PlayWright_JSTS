let arr = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
    let uniques = [];
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if(!uniques.includes(arr[i])) {
            uniques.push(arr[i]);
        } else {
            duplicates.push(arr[i]);
        }
    }
    console.log("Uniques:", uniques);
    console.log("Duplicates:", duplicates);
}
removeDuplicates(arr);