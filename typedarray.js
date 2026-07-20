console.log(new Int8Array());
console.log(new Uint8Array);
console.log(new Uint8ClampedArray());
console.log(new Int16Array());
console.log(new Uint16Array());
console.log(new Int32Array());
console.log(new Uint32Array());
console.log(new Float32Array());
console.log(new Float64Array());
console.log(new BigInt64Array);
console.log(new BigUint64Array());                   


const typedArray = new Int8Array(10);
typedArray[0] = 32; 
typedArray[1] = 130;
console.log(typedArray)