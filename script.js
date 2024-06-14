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
        cat.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/512/6988/6988878.png")'; // URL de imagen de gatito
        cat.style.left = Math.random() * window.innerWidth + 'px';
        cat.style.top = Math.random() * window.innerHeight + 'px';
        cat.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(cat);

        setTimeout(() => {
            heart.remove();
            cat.remove();
        }, 15000); // Dura más tiempo (15 segundos)
    }
}
