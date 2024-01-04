$(document).ready(function(){
    var a='<i class="fas fa-dog"></i>';//1
    var b='<i class="fas fa-dog"></i>';//2
    var c='<i class="fas fa-cat"></i>';//3
    var d='<i class="fas fa-cat"></i>';//4
    var e='<i class="fas fa-hippo"></i>';//5
    var f='<i class="fas fa-hippo"></i>';//6
    var g='<i class="fas fa-crow"></i>';//7
    var h='<i class="fas fa-crow"></i>';//8
    var i='<i class="fas fa-horse"></i>';//9
    var j='<i class="fas fa-horse"></i>';//10
    var k='<i class="fas fa-frog"></i>';//11
    var l='<i class="fas fa-frog"></i>';//12
    var App={
        cards: [a, b, c, d, e, f, g, h, i, j, k, l],
        initial: function(){
            App.shuffle();
        },
        shuffle: function(){
            var Random=0;
            var Temp=0;
            for(i=1; i<App.cards.length; i++){
                Random=Math.round(Math.random()*i);
                Temp=App.cards[i];
                App.cards[i]=App.cards[Random];
                App.cards[Random]=Temp;
            }
            App.assignCards();
            console.log('Shuffle card array: '+App.cards);
        },
        assignCards: function(){
            $('.card').each(function(index){
                $(this).attr('data-card-value', App.cards[index]);
            });
            App.clickHandlers();
        },
        clickHandlers: function(){
            $('.card').on('click', function(){
                $(this).html('<p>'+$(this).data('cardValue')+'</p>').addClass('selected');
                App.checkMatch();
            });
        },
        checkMatch: function(){
            if($('.selected').length===2){
                if($('.selected').first().data('cardValue')==$('.selected').last().data('cardValue')){
                    $('.selected').each(function(){
                        $(this).animate({opacity: 0}).removeClass('unmatched');
                    });
                    $('.selected').each(function(){
                        $(this).removeClass('selected');
                    });
                    App.checkWin();
                }else{
                    setTimeout(function(){
                        $('.selected').each(function(){
                            $(this).html('').removeClass('selected');
                        });
                    }, 1000);
                }
            }
        },
        checkWin: function(){
            if($('.unmatched').length===0){
                $('.header').html('<span class="header"><h1 style="text-align: center">You Won!</h1></span>');
            }
        }
    };
    App.initial();
});
/*
dark #212529
light #f8f9fa
success #188251
danger #dc3545
info #dc3545
primary #0d6af4
secondary #188251
warning #ffc107
*/