# Scrib preview remover

A js script to remove the "_You're Reading a Preview. Become a Scribd member for full access_" message from Scribd PDFs.

Simply open the PDF page, scroll all the way down so that the entire page gets loaded and run the script on the browser console. You need to scroll down to the last page, otherwise the code will not remove all messages. The code will remove every div containing the message and will restore the opacity of the images of the pages.

```js
document.querySelectorAll('.promo').forEach(function(a){
a.remove()
})

var all = document.getElementsByClassName('absimg');
for (var i = 0; i < all.length; i++) {
  all[i].style.opacity = '100';
}
```
