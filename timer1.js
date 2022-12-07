
    const timerElement = document.getElementById('timer');

    let totalMs = 0; // total time in milliseconds
    let timerId = null; // id of setInterval timer
    let startTime = null; // time when timer was started

    // start timer
    function startTimer() {
        startTime = Date.now() - totalMs; // get current time and subtract total time already elapsed

        // update timer every 100ms
        timerId = setInterval(() => { 
            totalMs = Date.now() - startTime; // get total time elapsed
            updateTimer(totalMs);   // update timer
        }, 100);
    }

    // stop timer
    function stopTimer() {
        clearInterval(timerId); // stop timer
        timerId = null; // reset timerId
    }

    // update timer element with time elapsed like 00:00 
    function updateTimer(ms) {
        const date = new Date(ms); // create Date object from total time elapsed
        const minutes = date.getMinutes().toString().padStart(2, '0');  // get minutes and pad with 0 if less than 10
        const seconds = date.getSeconds().toString().padStart(2, '0'); // get seconds and pad with 0 if less than 10

        timerElement.textContent = `${minutes}:${seconds}`; // update text of timer element

    }

    // start timer on mouseover
    timerElement.addEventListener('mouseover', () => { 
        if (timerId) { // if timer is already running
            stopTimer();
        }
    });

    // stop timer on mouseleave
    timerElement.addEventListener('mouseleave', () => { 
        if (!timerId) { // if timer is not running
            startTimer();
        }
    });

    startTimer();