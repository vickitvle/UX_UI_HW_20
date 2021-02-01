$("#mydivheader").on("click", function(){
  $("#dropDown").slideToggle();
});

window.onscroll = function() {
  menu();
  scroll();
}

function menu() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $('#mydiv').fadeIn();

  } else {
    $('#mydiv').fadeOut();
  }
}

function scroll() {
  if (document.body.scrollTop > 605 || document.documentElement.scrollTop > 605) {
    $('#scrollText').show();

  } else {
    $('#scrollText').hide();
  }
}

var wordlist = [
  'a Junior UX designer',
  'a UF Sociology grad',
  'a part-time barista',
  'an empath, Aries, & INFP',
  'a night owl & snoozer',
  'a Vietnamese-American from FL',
  'a vintage enthusiast',
  'an aspiring coffee shop owner',
]

function buildSlotItem (text) {
    return $('<div>').addClass('slottt-machine-recipe__item')
                     .text(text)
}

function buildSlotContents ($container, wordlist) {
  $items = wordlist.map(buildSlotItem);
  $container.append($items);
}

function popPushNItems ($container, n) {
    $children = $container.find('.slottt-machine-recipe__item');
    $children.slice(0, n).insertAfter($children.last());

    if (n === $children.length) {
      popPushNItems($container, 1);
    }
}

function rotateContents ($container, n) {
    setTimeout(function () {
      popPushNItems($container, n);
      $container.css({top: 0});
    }, 500);    
}

function randomSlotttIndex(max) {
  var randIndex = (Math.random() * max | 0);
  return (randIndex > 6) ? randIndex : randomSlotttIndex(max);
}

function animate() {
  var wordIndex = randomSlotttIndex(wordlist.length);
  $wordbox.animate({top: -wordIndex*150}, 500, 'swing', function () {
    rotateContents($wordbox, wordIndex);
  });
}

$(function () {
  $wordbox = $('#wordbox .slottt-machine-recipe__items_container');
  buildSlotContents($wordbox, wordlist);  
  buildSlotContents($wordbox, wordlist);  
  buildSlotContents($wordbox, wordlist);  
  buildSlotContents($wordbox, wordlist);  
  
  setInterval(animate, 2000);
});

