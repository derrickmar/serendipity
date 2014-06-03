$(document).ready(function() {
    $('#fullpage').fullpage();
    setSizeOfHomeBlocks();
    // $(".main").onepage_scroll({
    //    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    //    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", 
    //                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    //    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    //    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    //    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    //    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
    //    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
    //    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    //    keyboard: true,                  // You can activate the keyboard controls
    //    responsiveFallback: false        // You can fallback to normal page scroll by defining the width of the browser in which
    //                                     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever 
    //                                     // the browser's width is less than 600, the fallback will kick in.
    // });
    // $(".main").onepage_scroll();

    setAbsolute($('.second').find('.tableCell'));

    homeblockFade($('#homeblock1'),
        "Every two weeks, we’ll introduce you to someone at Cal. Choose a time and place and get ready to experience something amazing.",
        $('#homeblock1').text(),
        'white');

    homeblockFade($('#homeblock2'),
        "We all hate small talk. So we came up with a cool solution to get straight to the real stuff.",
        $('#homeblock2').text(),
        'blue');

    homeblockFade($('#homeblock3'),
        "Reflect on your experience by telling us your stories and giving us recommendations how we can make this initiative better.",
        $('#homeblock3').text(),
        'white');

    homeblockFade($('#homeblock4'),
        "Foster relationships with those you really connect with.",
        $('#homeblock4').text(),
        'blue');

});

function setSizeOfHomeBlocks() {
    console.log("navbar height: " + $('.navbar').height());
    // section one has some weird padding
    $('#homeblock-holder').css("top", $('.navbar').height());
    var h = $('body').height() - $('.navbar').height();
    console.log(h);
    $('.homeblock').css("height", h / 2);
}

function setAbsolute(dom) {
    dom.css("position", "absolute");
}

function homeblockFade(dom, textIn, textOrig, colorOrig) {
    dom.hover(
        function() {
            $(this).addClass("white-bg");
            $(this).find('span').fadeOut(500, function() {
                $(this).text(textIn);
                $(this).addClass('blue').removeClass(colorOrig);
                $(this).addClass('home-steps-desc');
            }).fadeIn(500);
        },
        function() {
            $(this).removeClass("white-bg");
            $(this).find('span').fadeOut(500, function() {
                $(this).text(textOrig);
                $(this).addClass(colorOrig).removeClass('blue');
                $(this).removeClass('home-steps-desc');
            }).fadeIn(500);
        });
}

// function hoverTabUp(dom) {
//     dom.hover(
//         function() {
//             console.log("in hoverTabUp");
//             if (!$(this).hasClass('selected') && !$(this).hasClass('selected2')) {
//                 $(this).animate({
//                     top: "-=2"
//                 }, 100);
//             }
//         }, function(e) {
//             if (!$(this).hasClass('selected') && !$(this).hasClass('selected2')) {
//                 $(this).animate({
//                     top: "+=2"
//                 }, 100);
//             }
//         });
// }