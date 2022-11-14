//----------passing arugment

const add = (a,b)=>{
    return a+b;
}

console.log(add(2,5))

// --------- without passsing argument

const addRan = ()=> 1+2;

console.log(addRan())

// ----------

const person ={ name1 : "shelif",
                age : 22,
                greet(){
                    console.log('Hi ' + this.name1);
                }
               
            };


person.greet()

// -------

const fruits =['apple','mango','orange','pineapple'];


console.log(fruits.map(fruit=>{ 
    return"fruit :" + fruit;}
));
console.log(fruits);


// --------

const numbers=['one','two','three'];

numbers.push('four');

console.log(numbers);