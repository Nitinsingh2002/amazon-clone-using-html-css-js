console.log("js is loaded")

var selected = document.getElementById('xyz');
selected.addEventListener('click', function (event) {
    event.preventDefault();
    var targetElement = document.body;
    
    targetElement.scrollIntoView({ behavior: 'smooth' });
});
