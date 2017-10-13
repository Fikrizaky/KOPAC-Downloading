$(document).ready(function() {    
    $('.PopularPosts ul li img').attr('src', function(i, src) {
        return src.replace('/default.jpg', '/mqdefault.jpg');
    });
    $('.PopularPosts ul li img').attr('src', function(i, src) {
        return src.replace('s72-c', 'w770-h505');
    });
    $('.PopularPosts ul li img').attr('src', function(i, src) {
        return src.replace('w72-h72-p-nu', 'w770-h505');
    });
 });
