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
    messageone.textContent='please provide a location'
    return console.log('no location provided')
}
messageone.textContent='loading'
messagetwo.textContent=''
fetch('/weather?address='+location).then((response)=>{
    if(!response.error){
        response.json().then((data)=>{
     
    
            messageone.textContent=data.location
    
    messagetwo.textContent=data.forecast
            console.log(data)
        
        
    })

       
   }
   else{
       return;
    messageone.textContent='wrong '
    
    messagetwo.textContent=''
   }

})  

})