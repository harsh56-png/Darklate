//MENU ANIMATIONS

$(document).ready(function() {
  $(".hamburger").click(e => {
    $(".wrapped-up").animate({ opacity: "0" });
    $(e.currentTarget).animate({ opacity: "0" });
    $("section").animate({
      left: "2%",
      height: "95%"
    });
    $(".menu").animate({ width: "95%", opacity: 1 }, 300);

    setTimeout(() => {
      $(".cancel-icon").animate({ opacity: 1 });
      $(".box").animate({ opacity: 0.9 });
    }, 700);
  });

  $(".cancel-icon").click(() => {
    close_menu();
  });

  //SECTION OPENINGS

  $(".box").click(e => {
    $("section").animate({ opacity: "0", width: "0%" });
    let ele = $(e.currentTarget).attr("id");
    setTimeout(() => {
      switch (ele) {
        case "1":
          close_menu();
          $(".home").animate({
            opacity: "1",
            width: "100%",
            height: "100%"
          });

          break;
        case "2":
          close_menu();
          $(".e_about").animate({
            opacity: "1",
            width: "100%",
            height: "100%"
          });

          break;
        case "3":
          close_menu();
          $(".e_photos").animate({
            opacity: "1",
            width: "100%",
            height: "100%"
          });

          break;
        case "4":
          close_menu();
          $(".e_team").animate({
            opacity: "1",
            width: "100%",
            height: "100%"
          });

          break;
        case "5":
          close_menu();
          $(".e_videos").animate({
            opacity: "1",
            width: "100%",
            height: "100%"
          });

          break;
        case "6":
          close_menu();
          $(".e_contact").animate({
            opacity: "1",
            width: "100%",
            height: "100%"
          });
      }
    }, 400);
  });
});

//IMPORTANT FUNCTIONS

function close_menu() {
  $(".hamburger").animate({ opacity: "1" });
  $(".box").animate({ opacity: 0 }, 300);
  $("section").animate({ left: "0%", height: "100%" });
  $(".cancel-icon").animate({ opacity: 0 });

  setTimeout(() => {
    $(".menu").animate({ width: "0%", opacity: 0 });
  }, 300);
  setTimeout(() => {
    $(".wrapped-up").animate({ opacity: "1" });
  }, 800);
}

//GALLERY ALGORITHM

$(".strip-element").click(e => {
  $(".picture-box").animate({ opacity: "0" }, 100);

  setTimeout(() => {
    let f = $(e.currentTarget).attr("src");
    $(".picture-box").attr("src", f);
    $(".picture-box").animate({ opacity: "1" });
  }, 150);
});
