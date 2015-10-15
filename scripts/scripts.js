/* Created by Mohib-Wasay 20th Feb 2015 */

$(document).ready(function() {

    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['introduction', 'olympiad', 'aboutPage', 'events', 'address', 'contactus', 'sports'],
        autoScrolling: false
    });
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $("#container").position();

        if (scroll > $(window).height()) {
            $('.navbar-fixed').removeClass('hide');
        } else {
            $('.navbar-fixed').addClass('hide');
        }
    });
    $.each(Sportex.data.games.futsal.rules, function(index, value){
        $('#futsal-rules').append('<li>' + index + '.  ' + value  + '</li>');
    });
    $.each(Sportex.data.games.basketBall.rules, function(index, value){
        $('#basketBall-rules').append('<li>' + index + '.  ' + value  + '</li>');
    });
    $.each(Sportex.data.games.volleyBall.rules, function(index, value){
        $('#volleyBall-rules').append('<li>' + index + '.  ' + value  + '</li>');
    });
    $.each(Sportex.data.games.cricket.rules, function(index, value){
        $('#cricket-rules').append('<li>' + index + '.  ' + value  + '</li>');
    });
    $.each(Sportex.data.games.throwBall.rules, function(index, value){
        $('#throwBall-rules').append('<li>' + index + '.  ' + value  + '</li>');
    });
    $.each(Sportex.data.games.chess.rules, function(index, value){
        $('#chess-rules').append('<li>' + index + '.  ' + value  + '</li>');
    });
    $.each(Sportex.data.games.tableTennis.rules, function(index, value){
        $('#tableTennis-rules').append('<li>' + index + '.  ' + value  + '</li>');
    });
    $.each(Sportex.data.contacts, function(index, value){
       $('.our-place').append('<div class="contactid"><label>'+ value.for +':</label><span class="phone"> ' + value.name + '&nbsp;&nbsp;&nbsp;&nbsp; ' + value.phone+ '</span></div> ');
    });
    $('.about-olympiad').append('<p class="about-olympiad1">' + Sportex.olympiad.about +'</p>' + '<p class="about-olympiad1">' + Sportex.olympiad.about2 +'</p><ul class="about-olympiad-ul"></ul>');
    $.each(Sportex.data.games, function(index, value){
        $('.about-olympiad-ul').append('<li style="color: #fde914; font-size: 15px; text-transform: uppercase; ">' + value.title +'</li>')
    })

});

