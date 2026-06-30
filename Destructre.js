let arr1=[10,[20,30],[50,60,[70,80]]]
//console.log(arr1[2][2][1]);
let[a,b,...last]=arr1;
//let [f, b, [c, d, [e, a]]] = arr1;
console.log(last);



let obj1={
    key1:"val1",
    key2:{
        key3:"val3",
        key4:"val4"
    }
}

//console.log(obj1.key2.key4);

let {
    key2: { key4 }
} = obj1;

console.log(key4);