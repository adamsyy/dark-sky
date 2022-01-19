const add=((a,b,callback)=>{
    setTimeout(()=>{
        const sum=a+b;
        callback(sum)
    })
})
add(3,4,(sum)=>{
    console.log(sum)
})