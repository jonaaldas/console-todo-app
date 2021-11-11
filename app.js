//1 "new" - add a todo
//2 "list" - list all todods 
//3 "delete" - remove specifictodos
//4 "quit" - quit the app


// adding a todo type a command

let ans = prompt("Welcome, choose between new, list, delete and quit");
let todo = ["hello", 123];
while(ans !== "quit"){  //while this condtion is true alays do this 
  if(ans === "list"){
    console.log("**************");
    for(let i = 0; i < todo.length; i++){
      console.log(`${i}: ${todo[i]}`);
    }
    console.log("**************");
  } else if(ans === "new"){
    const newTodo = prompt("please add a new todo");
    todo.push(newTodo);
    console.log(`${newTodo}: has been added`);
  } else if(ans === "delete"){
    let dlt = parseInt(prompt("please chooose the number you want to delete"));
    todo.splice(dlt, 1);
    console.log(`${dlt}: has been deleted`)
  }
  ans = prompt("Choose between new, list, delete and quit");
}

console.log("okay you quit");
