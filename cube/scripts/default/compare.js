

$(function(){
    $('.filter-btn').click(function(){
        $(this).toggleClass('active');
    });

    $('.filter-btn1').click(function(){
        $('.filter-1').slideToggle();
    });
    $('.filter-btn2').click(function(){
        $('.filter-2').slideToggle();
    });
    $('.filter-btn3').click(function(){
        $('.filter-3').slideToggle();
    });
    $('.filter-btn4').click(function(){
        $('.filter-4').slideToggle();
    });
    $('.filter-btn5').click(function(){
        $('.filter-5').slideToggle();
    });
    $('.filter-btn6').click(function(){
        $('.filter-6').slideToggle();
    });
    $('.filter-btn7').click(function(){
        $('.filter-7').slideToggle();
    });
    $('.filter-btn8').click(function(){
        $('.filter-8').slideToggle();
    });
    $('.filter-btn9').click(function(){
        $('.filter-9').slideToggle();
    });
    $('.filter-btn10').click(function(){
        $('.filter-10').slideToggle();
    });
    $('.filter-btn11').click(function(){
        $('.filter-11').slideToggle();
    });
    $('.filter-btn12').click(function(){
        $('.filter-12').slideToggle();
    });


    $('.compare-houseItem').click(function(){
        $(this).toggleClass('active');
    });
});


var housedata = {};
var houseItem_length = $('.compare-housebox .compare-houseItem').length;
var houseItemTitle_html = "<div class='compare-houseItemTitle house-title'>{{title}}</div>"
// console.log(houseItem_length);

function houseTitle(){
    $('.compare-houseTitle').html("");
    for(var i=0; i < houseItem_length; i++){
        // console.log($('.compare-houseItem').eq(i).find('.house-title').html());
        housedata[i] = {};
        housedata[i]['title'] = $('.compare-houseItem').eq(i).find('.house-title').html();
        // console.log(housedata);

        var houstHtml = houseItemTitle_html.replace("{{title}}",housedata[i].title);
        console.log(houstHtml);

        $('.compare-houseTitle').append(houstHtml);
    }
}

houseTitle();



if (jQuery(window).width() > 992){
    $(".sortable").sortable({
        update: function(){
            houseTitle();
        }
    }).disableSelection();
}


