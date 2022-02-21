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