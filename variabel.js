// Primitive Types
let stringType = "Hello World";
let numberType = 42;
let bigIntType = 9007199254740991n;
let booleanType = true;
let undefinedType = undefined;
let nullType = null;
let symbolType = Symbol("unique");

// Object Types
let objectType = { name: "John", age: 30 };
let arrayType = [1, 2, 3, 4, 5];
let functionType = function() { return "I'm a function"; };
let dateType = new Date();
let regexType = /pattern/gi;
let mapType = new Map([["key1", "value1"], ["key2", "value2"]]);
let setType = new Set([1, 2, 3, 4, 5]);
let weakMapType = new WeakMap();
let weakSetType = new WeakSet();

// Print semua tipe data
console.log("String:", stringType, "- Type:", typeof stringType);
console.log("Number:", numberType, "- Type:", typeof numberType);
console.log("BigInt:", bigIntType, "- Type:", typeof bigIntType);
console.log("Boolean:", booleanType, "- Type:", typeof booleanType);
console.log("Undefined:", undefinedType, "- Type:", typeof undefinedType);
console.log("Null:", nullType, "- Type:", typeof nullType);
console.log("Symbol:", symbolType.toString(), "- Type:", typeof symbolType);
console.log("Object:", objectType, "- Type:", typeof objectType);
console.log("Array:", arrayType, "- Type:", typeof arrayType, "- Is Array:", Array.isArray(arrayType));
console.log("Function:", functionType(), "- Type:", typeof functionType);
console.log("Date:", dateType, "- Type:", typeof dateType);
console.log("RegExp:", regexType, "- Type:", typeof regexType);
console.log("Map:", mapType, "- Type:", typeof mapType);
console.log("Set:", setType, "- Type:", typeof setType);
console.log("WeakMap:", weakMapType, "- Type:", typeof weakMapType);
console.log("WeakSet:", weakSetType, "- Type:", typeof weakSetType);
