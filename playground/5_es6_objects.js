const name='adam'
const userage=19

const user={
    name,
    age:userage,
    location:'tvla'
}   
const {age,location,rating=7}=user

const transaction=(type,{age:aa,location})=>{
console.log(aa)
}

transaction('order',user);