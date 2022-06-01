let result = 0;
function answerVaildtor(){
    
    // array of actual answers
    let truth = ['A','B', 'D', 'B'];
    // array of users radios after many tires
    let user_truth = []
    // array of teh actual answers
    let user_truth_ans= []
   // to get the whole form of the first question
   const form_one = document.querySelectorAll('input[name="firstoption"]');
   
   // to catch the user input in radio first question..
   for(let i = 0; i<form_one.length; i++){
    form_one[i].addEventListener("change", function(e){
           user_truth.push(this.value)
           console.log(user_truth);
         
       });
       
   }

   //  to get the whole form of the senond questoin
   const form_two = document.querySelectorAll('input[name="secondoption"]');
   // to catch the user input in radio second question..
   for(let i=0; i<form_two.length; i++){
       form_two[i].addEventListener("change", function(){
        user_truth.push(this.value)
        console.log(user_truth);
       })
   }

    //  to get the whole form of the senond questoin
    const form_three = document.querySelectorAll('input[name="thirdoption"]');
    // to catch the user input in radio second question..
    for(let i=0; i<form_three.length; i++){
        form_three[i].addEventListener("change", function(){
         user_truth.push(this.value)
         console.log(user_truth);
        })
    }
  
    //  to get the whole form of the senond questoin
    const form_four = document.querySelectorAll('input[name="fouroption"]');
    // to catch the user input in radio second question..
    for(let i=0; i<form_four.length; i++){
        form_four[i].addEventListener("change", function(){
         user_truth.push(this.value)
         console.log(user_truth);
        })

    }

   
    for(let i=0; i<truth.length; i++){
        if(user_truth[i] == truth[i]){
            result = result + 1;
        }
    }
   console.log(result)
}
function clickAlert(){
    alert("Your result is" + result)
}
answerVaildtor();
