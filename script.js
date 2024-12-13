




document.getElementById('contact-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    let params = {
        form_name: document.getElementById('full_name').value,
        email_id: document.getElementById('email_id').value,
        message: document.getElementById('message').value,
    }
    
    emailjs.send("service_loxitnt","template_mm4640b",params).then(()=>{
        document.querySelector('.thank-you-msg').computedStyleMap.display ="block"
        document.getElementById('full_name').value="",
        document.getElementById('email_id').value="",
        document.getElementById('message').value="",
    
        setTimeout(()=>{
            time=document.querySelector('.thank-you-msg').style.display="none"
            console.log(time)
        },2500)
        
    })
})