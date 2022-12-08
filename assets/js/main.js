$(document).ready(function () {
    $(window).on('scroll', function () {
        handleScrollTop();
    });

    //Close nav-item on click
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //Portfolio Gallery
    $('#gallery1').on('click', function (event) {
        event.preventDefault();
        Fresco.show([
            { url: 'assets/img/projects/hotel/banner.png', caption: 'Map Reservation' },			
			{ url: 'assets/img/projects/hotel/1.jpg', caption: 'Login Page' },            
            { url: 'assets/img/projects/hotel/2.jpg', caption: 'Reservation Ads Page' },
			{ url: 'assets/img/projects/hotel/3.jpg', caption: 'Home Page' }
            
        ]);
    });
	
	
	$('#gallery2').on('click', function (event) {
        event.preventDefault();
        Fresco.show([
            { url: 'assets/img/projects/softproadv/processos.jpg', caption: 'Processes' },			
			{ url: 'assets/img/projects/softproadv/detalhes-processo.jpg', caption: 'Processe details' },            
            { url: 'assets/img/projects/softproadv/agenda.jpg', caption: 'Schedule' }           
        ]);
    });	


    $('#gallery3').on('click', function (event) {
        event.preventDefault();
        Fresco.show([
            { url: 'assets/img/projects/pwa/screenshot-1.png', caption: 'Login' },
            { url: 'assets/img/projects/pwa/screenshot-2.png', caption: 'New Company' },
            { url: 'assets/img/projects/pwa/screenshot-3.png', caption: 'Home' },
            { url: 'assets/img/projects/pwa/screenshot-4.png', caption: 'Menu' },
            { url: 'assets/img/projects/pwa/screenshot-5.png', caption: 'Side Menu' },
            { url: 'assets/img/projects/pwa/screenshot-6.png', caption: 'Clients' },
            { url: 'assets/img/projects/pwa/screenshot-7.png', caption: 'Start New Sale' },            
            { url: 'assets/img/projects/pwa/screenshot-9.png', caption: 'Products' },
            { url: 'assets/img/projects/pwa/screenshot-10.png', caption: 'Add Product' },
            { url: 'assets/img/projects/pwa/screenshot-11.png', caption: 'Checkout' },
            { url: 'assets/img/projects/pwa/screenshot-12.png', caption: 'Add  Form Payments' },
            { url: 'assets/img/projects/pwa/screenshot-13.png', caption: 'Checkout with Forms add' },
            { url: 'assets/img/projects/pwa/screenshot-14.png', caption: 'List Sales' },
            
        ]);
    });	


  
    $('#gallery4').on('click', function (event) {
        event.preventDefault();
        Fresco.show([
            { url: 'assets/img/projects/ev/1.png', caption: 'Map',
            { url: 'assets/img/projects/ev/2.png', caption: 'Search Route' },
            { url: 'assets/img/projects/ev/3.png', caption: 'Login' },
            { url: 'assets/img/projects/ev/4.png', caption: 'Search From' },
            { url: 'assets/img/projects/ev/5.png', caption: 'Search To' },
            { url: 'assets/img/projects/ev/6.png', caption: 'Search Route' },
            { url: 'assets/img/projects/ev/7.png', caption: 'Map' },            
            { url: 'assets/img/projects/ev/9.png', caption: 'Show Route' },
            { url: 'assets/img/projects/ev/10.png', caption: 'Charge Info Add' },
            { url: 'assets/img/projects/ev/11.png', caption: 'Charge Info Remov' },
            { url: 'assets/img/projects/ev/12.png', caption: 'Saved Routes' },
            { url: 'assets/img/projects/ev/13.png', caption: 'Not logged in' },
            { url: 'assets/img/projects/ev/14.png', caption: 'Saved Routes' },
            { url: 'assets/img/projects/ev/15.png', caption: 'Delete route' },
            { url: 'assets/img/projects/ev/16.png', caption: 'Account' },
            { url: 'assets/img/projects/ev/17.png', caption: 'My Details' },
            
        ]);
    });	  


 /*   $('#gallery2').on('click', function (event) {
        event.preventDefault();
        Fresco.show([
            { url: 'assets/img/projects/larachat/banner.png', caption: 'Home Page' },
            { url: 'https://vimeo.com/456722569', caption: 'Video real time chat' }
        ]);
    });*/


    //Set active tab on navbar
    $(window).scroll(function () {
        $(".nav-item").removeClass("active");
        $(".active").parent().addClass("active");
    });

    handleScrollTop();
    function handleScrollTop() {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    }

    //Animations
    AOS.init({
        disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        duration: 2000, // values from 0 to 3000, with step 50ms
    });

})