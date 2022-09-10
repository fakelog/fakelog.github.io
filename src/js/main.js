
function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

function draw() {

    const canvas = document.getElementById('canvas-background');

    canvas.width = getWidth();
    canvas.height = getHeight();

    if (canvas.getContext) {

        const gC = canvas.getContext('2d');

        gC.arc(200, 200, 100, 0, 2 * Math.PI);
        gC.stroke();

        gC.fillStyle = 'rgba(0, 0, 200, 0.5)';
        gC.fillRect(getWidth()-50, 0, 50, 50);
        gC.translate(0,28.5);
        gC.restore();
    }
}