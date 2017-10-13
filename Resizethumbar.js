function resizeThumbarlina(e,t){for(var s=document.getElementById(e),r=s.getElementsByTagName("img"),c=0;c<r.length;c++)r[c].src=r[c].src.replace(/\/s72\-c/,"/s"+t),r[c].width=t,r[c].height=t}resizeThumbarlina("PopularPosts1",400);
$(document).ready(function(){
 $('.PopularPosts img').each(function(){
  var srcUrl = $(this).attr('src');
  $(this).attr('src', srcUrl.replace('default', 'maxresdefault'));
 });

});
