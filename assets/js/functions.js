$(function() {
	smoothScroll(600);
    

    
     $("#project1").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("Created a <a href='http://www.toranameventproductions.com' target='_blank'>website</a> for event production company ,<a href='http://www.toranameventproductions.com' target='_blank'>Thoranam</a>. The project was completed in  4 months. It was a great learning curve because I was at my initial stages of web designing. It was also a great learning experience to negotiate the product , understand and adapt to requirements of end user.")
        });
    
     $("#project2").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("Logo was created for a    <strong>city</strong> wide design sprint conducted by Google. I was also an organizer at the event, The Appening. I was delighted when a UI designer from Google appreciated my work.");
        });
    
     $("#project3").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("I was introduced to new techniques to write a website that motivated me to build this portfolio.Website building was never this easy and pleasant.");
        });
    
     $("#project4").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("Working as an intern since 5 months. Am working as an UI/UX developer. The App will be launched in Google <a href = 'http://www.vhere.in' target='_blank'>playstore soon</a>..");
        });
    
    $("#project5").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("Created a website for event production company ,Thoranam. The project was completed in  4 months. It was a great learning curve because I was at my initial stages of web designing. It was also a great learning experience to negotiate the product , understand and adapt to requirements of end user.")
        });
    
     $("#project6").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("Logo was created for a    <strong>city</strong> wide design sprint conducted by Google. I was also an organizer at the event, The Appening. I was delighted when a UI designer from Google appreciated my work.");
        });
    
     $("#project7").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("I was introduced to new techniques to write a website that motivated me to build this portfolio.Website building was never this easy and pleasant.");
        });
    
     $("#project8").click(function(){
            $(".work-para").hide();
            $(".work-para").show("fold");
            $("#work-info").html("Working as an intern since 5 months. Am working as an UI/UX developer. The App will be launched in Google playstore soon..");
        });
    
    $(".icon-fb").click(function(){
            event.preventDefault();
            window.open("https://www.facebook.com/mak11195", "popupWindow", "width=600,height=600,scrollbars=yes");
    });
    
    $(".icon-g").click(function(){
            event.preventDefault();
            window.open("https://plus.google.com/u/0/105164813529532702571/posts", "popupWindow", "width=600,height=600,scrollbars=yes");
    });
    
    $(".icon-git").click(function(){
            event.preventDefault();
            window.open("https://github.com/makaravind", "popupWindow", "width=600,height=600,scrollbars=yes");
    });

});


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: (target.offset().top)-30
	        }, duration);
	    }
	});
}

