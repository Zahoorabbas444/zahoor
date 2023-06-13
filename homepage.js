var images = document.querySelectorAll('.section-hod-img');
const image = document.querySelector('#moving-image');
images.forEach(function (image) {
    image.addEventListener('mousemove', moveImageForward);
});

function moveImageForward(event) {
    var images = event.target.querySelector('#moving-image');
    images.style.transform = 'translateZ(50px)';
}
image.forEach((item) => {
    item.addEventListener('click', () => {
        image.toggle('active');
        image.toggle('active');
    });
});