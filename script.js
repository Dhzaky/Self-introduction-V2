const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

video1.addEventListener('ended', function() {
    video1.style.display = 'none';
    video2.style.display = 'block';
    video2.play();
});