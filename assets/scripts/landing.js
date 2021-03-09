// Preloader timer

$(window).load(function () {
  let rnd = Math.random() * (2000 - 2000) + 2000;

  $(".progress").css("animation", "loading " + rnd + "ms linear");

  console.log(rnd);

  setTimeout(function () {
    $("#loader").hide();
    $("#page").removeClass("hidden");
  }, rnd);
});
