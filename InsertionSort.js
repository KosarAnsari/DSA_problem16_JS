const arr = [8,2,4,3,1]

function Sorted(arr){
    for(let i =1 ; i<arr.length ; i++){
        curr = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > curr){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1] = curr;
    }

    return arr;

}
let res = Sorted(arr);
console.log(res);