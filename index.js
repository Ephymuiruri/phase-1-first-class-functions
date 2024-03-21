const spy=()=> {
     return 1+1
}
const receivesAFunction = function (spy){
    spy()
    return (spy+ 5)
}
const returnsANamedFunction = ()=>{
 return spy
}
const returnsAnAnonymousFunction = (() =>{
    return (function(){console.log(1+1*2)})
})