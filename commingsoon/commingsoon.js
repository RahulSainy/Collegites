const countdown = () => {
    const countDate = new Date('10 15, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const textDay = Math.floor(gap / day),
        textHour = Math.floor((gap % day) / hour),
        textMinute = Math.floor((gap % hour) / minute),
        textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
};

setInterval(countdown, 1000);