let person={
    first_name:"Abdul",
    last_name:"Hamid",
    age: 30,
    getName:()=>{
        return person.first_name+" "+person.last_name;
    }
}
console.log(person.getName())