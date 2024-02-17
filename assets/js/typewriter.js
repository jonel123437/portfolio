
$(document).ready(function () {
    var titles = ['FRONT-END WEB DEVELOPER.', 'WEB APPLICATION DEVELOPER'];
    var part,
        i = 0,
        offset = 0,
        len = titles.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 30,
        pause_duration = 2000, // Adjust this value to set the pause duration in milliseconds
        pause_timer = null;

    var wordflick = function () {
        setInterval(function () {
            if (forwards) {
                if (offset >= titles[i].length) {
                    if (!pause_timer) {
                        pause_timer = setTimeout(function () {
                            forwards = false;
                            pause_timer = null;
                        }, pause_duration);
                    }
                } else {
                    clearTimeout(pause_timer);
                    pause_timer = null;
                }
            } else {
                if (offset == 0) {
                    forwards = true;
                    i++;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            part = titles[i].substr(0, offset);
            if (forwards && offset < titles[i].length) {
                offset++;
            } else if (!forwards && offset > 0) {
                offset--;
            }
            $('.hero__title').text(part);
        }, speed);
    };

    wordflick();
});