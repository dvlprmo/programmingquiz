
function answerVaildtor(){

   // to get the whole form
   const form = document.querySelectorAll('input[name="firstoption"]');
   
   
   // to catch the user input in radio..
   for(let i = 0; i<form.length; i++){
       form[i].addEventListener("change", function(){
           let val = this.value;
           console.log(val)
       })
   }

  
}

answerVaildtor();