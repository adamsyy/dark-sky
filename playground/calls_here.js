
const geocode=(address,callback)=>{
 setTimeout(()=>{
    const data={
        latitiude:0,
        longitude:9,
    }
callback(data)
 },2000)
  

}
geocode('adam',(data)=>{
    console.log(data)
})