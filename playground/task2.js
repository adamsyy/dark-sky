const add=((a,b,callback)=>{
    setTimeout(()=>{
     
        callback(a+b)
    },2000)
})
add(3,4,(sum)=>{
    console.log(sum)
})