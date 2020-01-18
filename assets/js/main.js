$(document).ready(function() {
    $("#myBtn").click(function(event){        
        event.preventDefault();
        $('html, body').animate({scrollTop: 0 }, 600);
    });
       
    $(".scrollsuave").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
    });
       
    var prevScrollpos = window.pageYOffset;
   	
	window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        
		if (currentScrollPos > 500) {
			document.getElementById("myBtn").style.display = "block";
		}else{
			document.getElementById("myBtn").style.display = "none";
		}

		if (currentScrollPos > 700) {
			document.getElementById("myBtn").style.display = "block";
		}else{
			document.getElementById("myBtn").style.display = "none";
        }
        
		prevScrollpos = currentScrollPos;
		
	}
})