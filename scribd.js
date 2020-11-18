document.querySelectorAll('.promo').forEach(function(a){
a.remove()
})

var all = document.getElementsByClassName('absimg');
for (var i = 0; i < all.length; i++) {
  all[i].style.opacity = '100';
}
