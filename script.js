const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

if (video1 && video2) {
    video1.addEventListener('ended', function() {
        video1.style.display = 'none';
        video2.style.display = 'block';
        video2.play();
    });
}

document.addEventListener('contextmenu', function (event) {
    if (event.target.closest('video')) {
        event.preventDefault();
    }
});

document.addEventListener('dragstart', function (event) {
    if (event.target.closest('video')) {
        event.preventDefault();
    }
});

document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && (event.key.toLowerCase() === 's' || event.key.toLowerCase() === 'p')) {
        event.preventDefault();
    }
});

document.querySelectorAll('video').forEach(function(video) {
    video.setAttribute('controlsList', 'nodownload');
    video.disablePictureInPicture = true;
    video.oncontextmenu = function (event) {
        event.preventDefault();
    };
});

document.querySelectorAll('a[href]').forEach(function(link) {
    link.addEventListener('click', function(event) {
        const destination = new URL(link.href, window.location.href);
        const isInternal = destination.protocol === window.location.protocol &&
            destination.host === window.location.host;

        if (!isInternal || link.target || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
            return;
        }

        event.preventDefault();
        document.body.classList.add('page-leaving');

        window.setTimeout(function() {
            window.location.href = destination.href;
        }, 450);
    });
});