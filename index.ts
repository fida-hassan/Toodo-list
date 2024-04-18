import inquirer from "inquirer";

let todos: string[] =[];
let loop = true;

while(loop){
    const answers : {
        todo: string[],
        addmore: boolean
    } =await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "what do you want to add in your todo? "

        },
        {
            type: "confirm",
            name: "addmore",
            message: "do you want to add more in todoo? ",
            default: false
        }
    ])

    const {todo,addmore} = answers;
    console.log(answers)
    loop = addmore
    if(todo) {
        todos.push("todo")

    } else{
        console.log( "kindly add valid input ")
    }


}
if(todos.length > 0){
    console.log("your todo list:")
todos.forEach(todo => {
    console.log(todo)
})
} else {
    console.log("no todos found")
}