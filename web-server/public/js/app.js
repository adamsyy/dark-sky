console.log('load aaye')

fetch('http://localhost:3000/weather?address=thiruvalla').then((response)=>{

    response.json().then((data)=>{
        if(data.error){
            console.log('full error')
        }
        else{
            console.log(data)
        }
        
    })
})  

const weatherform=document.querySelector('form')
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
console.log('settesth')
})