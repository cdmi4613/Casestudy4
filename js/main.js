$(function(){
	// $(window).scroll(() => {
	// 		if($(window).scrollTop() > $(window).height()){
	// 			$("#main header").addClass("fixed");
	// 		}
	// 		else{
	// 			$("#main header").removeClass("fixed");
	// 		}}
	// 	);
	
	// })
		let wint;

		$(window).scroll(function(){
		wint=$(window).scrollTop();

		if(wint >  $(window).height()){
			$("#main header").addClass("fixed");
		}
		else{
		$("#main header").removeClass("fixed");
		}
	});
		



	// let winws;
	// let isMobile;

	// $(window).resize(function(){
	// 	winws=$(window).width();

	// 	if(winws > 1180){
	// 		isMobile=false;

	// 		if($("#mobile").hasClass("active")){
	// 			$("#mobile").removeClass("active");
	// 			$("body").removeClass("fixed");
			
	// 		}
	// 	}
	// 	else{
	// 		isMobile=true;

	// 		if($("#sitemap").is(":visible")){
	// 			$("#sitemap").removeAttr("style");
			
	// 		}
	// 	}
	// });




	///////////////////////////////////////////////////////////////////////////////////

	// 	$("#gnb > ul > li").hover(
	// 	function(){
			
	// 			$("#main header").addClass("active")
			
	// 	},
	// 	function(){
		
	// 			$("#main header").removeClass("active")
			
	// 	}
	// );






	



//sitemap(pc탭)
// $("#sitemap").click(function(e){
// 			e.preventDefault();

// 			$(this).find("ul").removeClass("on");
// 			$(this).find("ul").addClass("on");
// 		})
// 		$("#exit").click(function(e){
// 			e.preventDefault();
// 			$("#sitemap").slideUp(500).removeClass("on")
// 		});	

	//moblie(모바일탭)
	// $("#tab").click(function(e){
	// 		e.preventDefault();

	// 		if(isMobile){
	// 			$("#mobile").removeClass("active")
	// 			$("#mobile").addClass("active")
	// 			$("body").addClass("fixed");
	// 		}
	// 		else{
	// 			$("#sitemap").slideToggle(500);
	// 		}
	// 	});

 $("#mobile > ul > li").click(function(e){
			e.preventDefault()
			if($(this).hasClass("active") === false){
				$("#mobile > ul > li").removeClass("active")
 				$(this).addClass("active")
				$("#mobile ul ul").slideUp(300)
				$(this).children("ul").slideDown(300)
			}
			else {
				$(this).removeClass("active")
				$(this).children("ul").slideUp(300)
 			}	
 		});
// 		$("#exit_1 ").click(function(e){
// 			e.preventDefault();
// 			$("#mobile").removeClass("active")
// 			$("body").removeClass("fixed");
// 		});



		/////////////////////////////////////
		let mobile=false;
   let dw;

   $(window).resize(function(){
      dw=$(window).width();

      if(dw < 1280){
         if($("#sitemap").hasClass("on")){
            $("#sitemap").removeClass("on");
            $("body").removeClass("fixed");
            $(this).removeClass("close");
            $(".dim").removeClass("active");
         }
         if(mobile === false) mobile=true;
         
      }
      else{
         if(mobile === true) mobile=false;
      }

      if(dw > 900){
         if($("#mobile").hasClass("active")) 
         $("#mobile").removeClass("active");
         $(".dim").removeClass("active");
      }
   });

   $(window).trigger("resize");

   /* tab, exit, dim */
   $("#tab").click(function(e){ 
      e.preventDefault();

      if(mobile === false){
         $("#sitemap").addClass("on");
         $(".dim").addClass("active");
      }
      else {
         $("#sitemap").removeClass("on");
         $("#mobile").addClass("active");
         $("body").addClass("fixed");
         $(".dim").addClass("active");
      }
   });

   
   $("#exit").click(function(e){
      e.preventDefault();
         $("#sitemap").removeClass("on");
         $(".dim").removeClass("active");
         $("#mobile").removeClass("active");   
         
   });

   $("#subexit").click(function(e){
      e.preventDefault();
         $("#mobile").removeClass("active");   
         $(".dim").removeClass("active");
         $("body").removeClass("fixed");
   });

   $(".dim").click(function(e){
         e.preventDefault();
         $("#sitemap").removeClass("on");
         $("#mobile").removeClass("active");
         $(".dim").removeClass("active");
         $("body").removeClass("fixed");
   });

// let winw;

// 	$(window).resize(function(){
// 		winw=$(window).width();

// 		if(winw > 1490){
// 			if($("#mobile").hasClass("active")){
// 				$("body").removeClass("fixed");
// 				$("#mobile").removeClass("active");
// 				$(".dim").removeClass("active");
// 			}
// 		}
// 		else{
// 			$("#sitemap").removeClass("on");
// 		}
// 	});


///////////////////////////////////////////////////////////

	let video=document.getElementById("main_video");
	let playBtn=document.getElementById("play");
	let pauseBtn=document.getElementById("pause");

	main_video.muted=true;

	video.addEventListener("loadeddata", function() {
		// console.log("loaded event");
		video.play();
	});

	video.addEventListener("ended", function(){
		// console.log("ended event");
		video.currentTime=0;
		video.play();
	});

	$("#pause_play").click(function(e){ 
	e.preventDefault();

	if($(this).hasClass("play")){
		$(this).removeAttr("class");
		$(this).addClass("pause");
		$(this).text("pause");
		video.play();
		
	}
	else{
		$(this).removeAttr("class");
		$(this).addClass("play");
		$(this).text("play");
		video.pause();
	
	}
});
// playBtn.addEventListener("click", function(){
// 		video.play();
// 	});

// 	pauseBtn.addEventListener("click", function(){
// 		video.pause();
// 	});


	let swiper=new Swiper(".mySwiper", {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	loopedSlides: 1,
	pagination: { 
		el: ".swiper-pagination",
		type: "fraction",
	},

	navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
  },

	// autoplay: {
	// delay: 2000,
	//    },
	breakpoints: { 
		100:{
			slidesPerView: 1,
		},
		500:{
			slidesPerView: 1,
		},
		700:{
			slidesPerView: 2,
			spaceBetween: 20,
		},
		850:{
			slidesPerView: 3,
			spaceBetween: 30,
		},
		
		1170:{
			slidesPerView: 4,
		},
	}
});

$("#news  > a").click(function(e){
        e.preventDefault();

		if($("#blog ").hasClass("on")){
            $("#blog").removeClass("on");
		}

		if($("#event ").hasClass("on")){
            $("#event ").removeClass("on");
		}


        if($("#news ").hasClass("on")){
            $("#news ").removeClass("on");

		}
        else{
            $("#news").addClass("on");
        }
    });

	$("#event  > a").click(function(e){
        e.preventDefault();

		if($("#blog ").hasClass("on")){
            $("#blog").removeClass("on");
		}


		if($("#news ").hasClass("on")){
            $("#news ").removeClass("on");

		}

        if($("#event ").hasClass("on")){
            $("#event ").removeClass("on");
		}
        else{
            $("#event").addClass("on");
        }
    });

	$("#blog > a").click(function(e){
        e.preventDefault();

		if($("#event ").hasClass("on")){
            $("#event ").removeClass("on");
		}

		if($("#news ").hasClass("on")){
            $("#news ").removeClass("on");

		}

        if($("#blog ").hasClass("on")){
            $("#blog").removeClass("on");
		}
        else{
            $("#blog").addClass("on");
        }
    });



	$("#by > a").click(function(e){
         e.preventDefault();

         if($("#location").hasClass("active")){// 켜져있으면
            $("#location").removeClass("active");
         }

         if($("#by").hasClass("active")){
            $("#by").removeClass("active")
         }
         else{
            $("#by").addClass("active");
         }
      });

   
     
});

