var links = document.querySelectorAll("a");
links.forEach(link => {
    var domain = link.href.split('/')[2];
    if (domain != 'omarcostahamido.github.io' && domain != 'localhost:4000') {
    	link.setAttribute('target', '_blank');
    }
})