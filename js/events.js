document.getElementById('login').addEventListener('click',function () {
    const user=document.getElementById('user');
    user.innerText='User Logged In Successfully';
})

document.getElementById('update-btn').addEventListener('click',function(){
    const inputName=document.getElementById('input-name');
    const updateName=inputName.value;
    const name=document.getElementById('name');
    name.innerText=updateName;

})