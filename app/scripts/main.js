var x = 0, y = 0;

interact('#dragme')
    .draggable({
        onmove: function (event) {
            x += event.dx;
            y += event.dy;

            event.target.style.webkitTransform =
            event.target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';
        },
        onend: function (event) {
            event.target.querySelector('p').textContent =
                'moved a distance of '
                + (Math.sqrt(event.dx * event.dx +
                             event.dy * event.dy)|0) + 'px';
        }
    })
    .inertia(true)
    .restrict({
        drag: "parent",
        endOnly: true
    });
