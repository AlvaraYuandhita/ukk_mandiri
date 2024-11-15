document.querySelecttorAll('a[[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelection(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});