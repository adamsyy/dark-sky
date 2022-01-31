console.log('load aaye')

const weatherform=document.querySelector('form')
const searchElr=document.querySelector('input')
const messageone=document.querySelector('#p1')
const messagetwo=document.querySelector('#p2')
messageone.textContent=''

weatherform.addEventListener('submit',(e)=>{
    const location=searchElr.value; 
    e.preventDefault()
if(!location){
    return console.log('no location provided')
}
messageone.textContent='loading'
messagetwo.textContent=''
fetch('http://localhost:3000/weather?address='+location).then((response)=>{

    response.json().then((data)=>{
        if(data.error){
             console.log('full error')
        }
        else{
            messageone.textContent=data.location

messagetwo.textContent=data.forecast
            console.log(data)
        }
        
    })
})  

})