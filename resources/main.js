$(".filters-list a").on("click", function () {
  const filter = $(this).data("filter");

  console.log(filter);

  // 1.hide all the products
  // 2. Show the products with a particular filter
  $(".description").hide();
  $(filter).show();

  //   this blocks the link from follow the href
  return false;
});
