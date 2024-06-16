const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function mostrarSorpresa() {
    document.getElementById('sorpresa').style.display = 'block';
    crearAnimaciones();
}

function crearAnimaciones() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(heart);

        const cat = document.createElement('div');
        cat.classList.add('cat');
        cat.style.backgroundImage = 'url("https://cdn-icons-png.freepik.com/256/6988/6988878.png?semt=ais_hybrid")'; 
        cat.style.left = Math.random() * window.innerWidth + 'px';
        cat.style.top = Math.random() * window.innerHeight + 'px';
        cat.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(cat);

        const cat2 = document.createElement('div');
        cat2.classList.add('cat2');
        cat2.style.backgroundImage = 'url("https://cdn.icon-icons.com/icons2/2787/PNG/512/black_cat_icon_177458.png")';
        cat2.style.left = Math.random() * window.innerWidth + 'px';
        cat2.style.top = Math.random() * window.innerHeight + 'px';
        cat2.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(cat2);

        setTimeout(() => {
            heart.remove();
            cat.remove();
            cat2.remove();
        }, 15000); 
    }
}
