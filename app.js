//1 "new" - add a todo
//2 "list" - list all todods 
//3 "delete" - remove specifictodos
//4 "quit" - quit the app


// adding a todo type a command

let quit = "quit";
let askQuestion = prompt("Welcome, choose between - new, list, delete and quit");

while(askQuestion !== quit){  //while this condtion is true alays do this 
  let todoList = [];
  if(askQuestion === "new"){
     let newTodo = prompt("please add new todo");
     todoList.push(newTodo);
     for(let i = 0; i <= newTodo.length; i++){
       console.log(newTodo[i]);
     }
  } else if(askQuestion === "list"){
     askQuestion = prompt("Welcome, choose between - new, list, delete and quit");
    console.log("list");
  } else if(askQuestion === "delete"){
     askQuestion = prompt("Welcome, choose between - new, list, delete and quit");
    console.log("delete");
  } 
  break;
}
