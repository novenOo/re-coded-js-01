$(document).ready(function() {
 
});
var input= $('#textArea'),
    mydiv= $('#myDiv');
    input.keyup(function(e){ /* update a myDiv in the page with the text the user enter in a textArea*/
    	mydiv.text(input.val());
    })
