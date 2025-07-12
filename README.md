# to_Do_List
A to-do list module which provides with the  add a task, view the tasks and an Exit option using Command line interface only using NodeJs.
# readline module of nodeJs is used to create an interface with the terminal 
import readline from 'readline';
const rl = readline.createInterface({
   input: process.stdin,
   output:process.stdout
})
#question function of the readline module is used to get input from the user in terminal
rl.question("query or question", callback() )
