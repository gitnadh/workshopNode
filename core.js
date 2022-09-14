/* console.log(__dirname) */
/* var path=require('path')
console.log(path.extname(__filename)) */
/* var fs=require("fs")
console.log(fs) */
// synchrone
/* console.log('start')
let data=fs.readFileSync('file.txt')
console.log(data.toString())
console.log('finish') */
// asynchrone
/* console.log('start')
fs.readFile('file.txt',(err,data)=>{
    if (err) {
     return   console.log(err)
    }
    else 
{   return console.log(data.toString())}

})
console.log('finish') */
/* var os=require("os")
 *//* console.log(os.cpus()) */
/* console.log(os.arch()) */
/* console.log(os.totalmem()) */
/* console.log(os.freemem()) */