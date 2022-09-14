function search(name,users) {
   const s = users.find((el)=>el.name===name)
   if (s) {
    return s
   }
   else 
   {
    return "no user"
   }
    
}
function moy(users) {
    return users.map((el)=>el.age).reduce((total,current)=>total+current)/users.length
    
}
module.exports={search,moy}