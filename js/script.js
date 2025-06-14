let logSubmit=document.getElementById('logsubmit')

logSubmit.addEventListener('click',()=>{
  
  let logName=document.getElementById('Logname').value
  let logPass=document.getElementById('Logpass').value
  let message=document.getElementsByClassName('demo')
  let container=document.getElementById('container')
  let box=document.getElementById('box')
  let success=document.getElementsByClassName('success')
  let outArray=JSON.parse(localStorage.getItem("infoObject"));
  
   
  if(!logName){
    message[0].classList.add('show')
  }else if(!logPass){
    message[0].classList.remove('show')
    message[0].classList.add('hide')
    message[1].classList.add('show')
    
  }else{
    message[1].classList.remove('show')
    message[1].classList.add('hide')
    
    let a=false
    for(i=0;i<outArray.length;i++){
      if(outArray[i].name===logName && outArray[i].Password===logPass){
        a=true
      }
    }
    if(a==true){
      
      container.classList.add('hide')
    box.classList.add('show')  
    success[0].classList.add('show')
    success[1].classList.add('hide')
    }
    else{
      container.classList.add('hide')
    box.classList.add('show')  
     success[0].classList.remove('show')
     success[0].classList.add('hide')
    success[1].classList.add('show')
    }
  }

})
