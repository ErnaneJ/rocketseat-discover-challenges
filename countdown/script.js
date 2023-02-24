function countdown(){
  const endDate = new Date("jan 20, 2024 01:00:00").getTime();
  interval = setInterval(() => {
    const currentDate = new Date().getTime();
    const diff = endDate - currentDate;

    const days = Math.floor( diff / (1000 * 60 * 60 * 24) );
    const hours = Math.floor( ( diff % (1000 * 60 * 60 * 24) ) / (1000 * 60 * 60) );
    const minutes = Math.floor( ( diff % (1000 * 60 * 60)) / (1000 * 60) );
    const seconds = Math.floor( (diff % (1000 * 60)) / 1000 );

    document.getElementById('highlighter-days').innerText = days.toString().padStart(2, '0')
    document.getElementById('highlighter-hours').innerText = hours.toString().padStart(2, '0')
    document.getElementById('highlighter-minutes').innerText = minutes.toString().padStart(2, '0')
    document.getElementById('highlighter-seconds').innerText = seconds.toString().padStart(2, '0')
  }, 1000);
}

countdown();