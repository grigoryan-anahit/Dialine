function count(){
    const count=document.querySelector('.howMuch');
       function printNumbers(from, to) {
       let current = from;
 
       let timerId = setInterval(function() {
           localStorage.setItem('store',current);
          //  let stored=localStorage.getItem('store');
               count.innerText=current;
           if (current == to) {
           clearInterval(timerId);
           }
           current--;
          
       }, 1000);
       }

       printNumbers(localStorage.getItem('store'), 7);
   }