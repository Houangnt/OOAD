     var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    function initSearch()
  {
    if($('.search_tab').length)
    {
      $('.search_tab').on('click', function()
      {
        $('.search_tab').removeClass('active');
        $(this).addClass('active');
        var clickedIndex = $('.search_tab').index(this);

        var panels = $('.search_panel');
        panels.removeClass('active');
        $(panels[clickedIndex]).addClass('active');
      });
    }
  }

  initSearch();