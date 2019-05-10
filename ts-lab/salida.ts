console.log("hello world...");  

var mystring = "this is a string";

mystring = 22 + "";

//Arrays string , number or any

var StringArray: string[] = ["Hey", "Cult", ""];
var NumberArray: number[] = [22, 333, 343];
var BooleanArray: boolean[] = [false, true, true];
var AnyArray: any[] = ["hey",3, false, [3], 
{"fName": "Xavi",
"fSurname": "Xavi",
"Age": "46"

}];

console.log("AnyArray = ", AnyArray);

//tuple , multiple fields of different types
var strNumBooTuple: [string, number, boolean];
    strNumBooTuple = ["Hey", 34, null];
    console.log("strNumBoo Tuple = ", strNumBooTuple);

//Interfaces
function showTodo(todo){
    console.log('${todo.title} - ${todo.text}')
}

showTodo({
    title : "eat dinner",
    text : "Lorem"
})

