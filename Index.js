import readline from 'readline';
const rl = readline.createInterface({
   input: process.stdin,
   output:process.stdout
})
const toDO =[];

const showmenu =()=>{
   console.log("\n 1. add a task")
   console.log("\n 2.view todo list")
   console.log("\n 3.exit")
   rl.question("enter what you want to do :", handleinput)

}




const handleinput =(option)=>{
   if(option ==="1"){
      rl.question("enter the task you want to add :", (task)=>{
         toDO.push(task);
         console.log(`\n task added : ${task}`);
         showmenu();
      })
   }
   
   else if(option ==="2"){
      if(toDO.length ===0){
         console.log("\n no tasks to show");
      }else{
         console.log("\n your todo list is :");
         toDO.forEach((task, index)=>{
            console.log(`${index+1}. ${task}`);
         })
      }
      showmenu();
   }
   else if(option ==="3"){
      console.log("\n exiting the application");
      rl.close();

   }
   else{
      console.log("\n invalid option, please try again");
      showmenu();
   }
}

showmenu();



 
