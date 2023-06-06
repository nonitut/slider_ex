//write here your js

document.addEventListener("DOMContentLoaded", function() {
    // используй эту функцию, для элементов которые должны быть выполнены после загрузки HTML
    // Это как Document ready, только для vanila js
});

$(document).ready(function() {
    $('.language-btn').click(function() {
      $('.language-dropdown').toggle();
    });
  
    $('.language-option').click(function(e) {
      e.preventDefault();
      var selectedLanguage = $(this).text();
      $('.language-btn').text(selectedLanguage);
      $('.language-dropdown').hide();
  
      // Дополнительные действия при изменении языка
      if (selectedLanguage === 'RU') {
        // Действия для русского языка
      } else if (selectedLanguage === 'ENG') {
        // Действия для английского языка
      }
    });
  
    $(document).click(function(e) {
      var target = e.target;
      if (!$(target).is('.language-select') && !$(target).parents().is('.language-select')) {
        $('.language-dropdown').hide();
      }
    });
  });
  

  $(document).ready(function() {
    var currentIndex = 0;
    var slides = $('.slide');
    var dots = $('.dot');
  
    $('.next').click(function() {
      hideSlide(currentIndex);
      hideDot(currentIndex);
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      showSlide(currentIndex);
      showDot(currentIndex);
    });
  
    function hideSlide(index) {
      $(slides[index]).hide();
    }
  
    function showSlide(index) {
      $(slides[index]).show();
    }
  
    function hideDot(index) {
      $(dots[index]).removeClass('active');
    }
  
    function showDot(index) {
      $(dots[index]).addClass('active');
    }
  });
  
  