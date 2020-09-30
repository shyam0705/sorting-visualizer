function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}
export const bubble =async  (arr, setIndex) => {
    console.log("orignal arr is", arr);
    const n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        setIndex(i);
        timer(3000);
   
       // for (var j = 0 ; j < n - i-1; j++) {
          //  if (arr[j] >= arr[j + 1]) {
            //    var tmp = arr[j];
            //    arr[j] = arr[j + 1];
             //   arr[j + 1] = tmp;
            //}
       // }
    }

    console.log("sorted arr is", arr);
    return arr;
}
