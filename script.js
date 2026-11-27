console.log("js testing");
var x=10;
var y= 10;
console.log(x+y);
let a=50;
a=45;
console.log(a);
const b=5;
// === both data type and value should be same,== only the value should be same
//primitive data types - shallow copy
let an=10;
let bn=an;
bn=30;
console.log(an);
//Non primitive datatype - deep copy
let obj1={
    name:"Tharunika",age:18
}
let obj2=obj1;
obj2.name="Tharu";
console.log(obj1.name);
console.log(obj2.name);
//Array
let arr1=[1,2,3,4,5];
let arr2=arr1;
arr2[0]=100;
console.log(arr1[0]);
console.log(arr2[0]);
console.log(typeof x);
//Array methods
let arr3=[1,2,3,4,5];
console.log(arr3.length);
[
    
]
let array=[1,2,3,4,5];

const reduceArr=array.reduce((total,n)=>{return total+n},10)
console.log(reduceArr);

const doubleNumber=(num)=>num*2;
const doubleArr=array.map(doubleNumber);
console.log(doubleArr);


const eveNum=array.filter((n)=>n%2==0)
console.log(eveNum);



let details=[
    {name:'A',age:30,marks:90},
    {name:'B',age:33,marks:95},
    {name:'C',age:45,marks:75},
    {name:'D',age:24,marks:50},

]

const nameList=details.map((detail)=>detail.name)
console.log(nameList);


const less_70=details.filter((n)=>n.marks<70)
console.log(less_70);

const findmark=details.find((n)=>n.marks>90)
console.log(findmark);

let name='Prabhu'
let mark=90
console.log(`I am ${name} and have scored ${mark}`);
//promise
let promise=new Promise((resolve,reject)=>{
    let a=1+1;
    if(a==2){
        resolve("Promise resolved");
    }
    else{
        reject("Promise rejected");
    }
});