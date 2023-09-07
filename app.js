const fs = require('fs')
const http = require('http')
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//ask the server a question
// rl.question('How old are you?:\n', (age)=>{
//      console.log(age >= 19 ? 'Lets fuck' : 'Too young!')
//      rl.close()
// })
// //When an event closes
// rl.on('close',()=>{
//     console.log('Leaving Node...Entering Bash Command Line')
//     process.exit(0)
// })
/***************************************************** */
//readFileSync - Single thread , Line-by-line (Synchronous exe)
// let textIn = fs.readFileSync('./Files/input.txt','utf-8');
// console.log(textIn)

// let content = `Data read from input.txt: ${textIn} \nDate created: ${new Date()}`
// fs.writeFileSync("./Files/o utput.txt",content) // This can create & write the file upon command
/***************************************************** */
//Async code
// fs.readFile('./Files/input.txt', 'utf-8',(err1,data1)=>{
//     let append_input = fs.readFile('./Files/append.txt', 'utf-8',(err2,data2)=>{
//        let input = fs.readFile(`./Files/${data2}.txt`, 'utf-8',(err3,data3)=>{
//             console.log(data3)
//        });
//     })
// })

/***************************************************** */
//step1: Create web server
let server = http.createServer((request,response) => {
//Request a url (section of a webpage tree) in order to route
let path = request.url;
let html = fs.readFileSync('./template/index.html','utf-8')//reading html document
let names = JSON.parse(fs.readFileSync('./Data/char.json','utf-8'))//reading names.json file
let mario = fs.readFileSync('./Files/mario.html','utf-8')

let route = (path) => {
    switch(true){
         case path==='/' || path.toLocaleLowerCase() =='/home':
            response.writeHead(200,{
                'Content-Type':'text/html',
                'my-header': 'Hello World'
            })//Set the header before the resposne.end()
            response.end(html);
            break;bhjkl
        case path.toLocaleLowerCase() =='/luigi':
            response.writeHead(200,{
                'Content-Type':'text/html',
                'my-header': 'Hello World'
            })//Set the header before the resposne.end()
            response.end("you are in the Luigi's page");
            break;
        case path.toLocaleLowerCase() =='/daisy':
            response.writeHead(200,{
                'Content-Type':'text/html',
                'my-header': 'Hello World'
            })//Set the header before the resposne.end()
            response.end("This is Daisy's page");
            break;
        case path.toLocaleLowerCase() =='/toad':
                response.writeHead(200,{
                    'Content-Type':'text/html',
                    'my-header': 'Hello World'
                })//Set the header before the resposne.end()
                response.end("This is Toad's's page");
                break;
        case path.toLocaleLowerCase() =='/mario':
                response.writeHead(200,{
                    'Content-Type':'text/html',
                    'my-header': 'Hello World'
                })//Set the header before the resposne.end()
                response.end(html.replace('{{%KY%}}',mario));
                break;

    }     
}
route(path)

})

//step2: Start the server
server.listen('8000','127.0.0.1',() =>{
    console.log('server started')
}) //(pot, ip, function)


