      $(".menuOpen").click(function () {
          $(".popMenu").addClass("menuAnimation");
          $(this).hide("slow");
          $(".popMenu").removeClass("menuAnimationRemove");
      });
      $(".menuClose").click(function () {
          $(".popMenu").addClass("menuAnimationRemove");
          $(".popMenu").removeClass("menuAnimation");
          $(".menuOpen").show("slow");
      });
      AOS.init();
      $('.pop').magnificPopup({
          type: 'image'
          // other options
      });
