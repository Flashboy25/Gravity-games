document.addEventListener("DOMContentLoaded", () => {

            const menu = document.querySelector(".custom-menu");

            const hamburger = document.querySelector(".custom-hamburger");

            hamburger.addEventListener("click", () => {

                menu.classList.toggle("active");

                hamburger.classList.toggle("active");

            });

            const musicTracks = [

                "https://flashboy25.github.io/Storage-Files/Garena Free Fire - Winterlands I .m4a",
                "https://flashboy25.github.io/Storage-Files/Axewall-Jinguly-Chritmas.mp3",
          "https://flashboy25.github.io/Storage-Files/christmas-party-time-249613.mp3",

              "https://flashboy25.github.io/Storage-Files/christmas-music-merry-christmas-264517.mp3"

              

            ];

            let currentTrack = 0;

            const audioPlayer = document.getElementById("audio-player");

            const musicToggle = document.getElementById("music-toggle");

            let isPlaying = true;

            const playTrack = () => {

                audioPlayer.src = musicTracks[currentTrack];

                audioPlayer.play().catch(() => {

                    alert("Click to enable music.");

                });

            };

            audioPlayer.addEventListener("ended", () => {

                currentTrack = (currentTrack + 1) % musicTracks.length;

                playTrack();

            });

            window.toggleMusic = () => {

                isPlaying = !isPlaying;

                musicToggle.classList.toggle("off");

                document.getElementById("toggle-text").textContent = isPlaying ? "On" : "Off";

                isPlaying ? audioPlayer.play() : audioPlayer.pause();

            };

            playTrack();

        });

  const snowContainer = document.getElementById("snow-container");

const maxSnowflakes = 50; // Maximum number of snowflakes at any time

let snowflakeCount = 0;

// Function to create and animate a snowflake

function createSnowflake() {

    if (snowflakeCount >= maxSnowflakes) return; // Limit the number of snowflakes

    const snowflake = document.createElement("div");

    snowflake.classList.add("snowflake");

    snowflake.textContent = "\u2744"; // Unicode escape sequence for ❄

    snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position

    snowflake.style.animationDuration = `${3 + Math.random() * 5}s`; // Random fall duration

    snowflake.style.fontSize = `${10 + Math.random() * 20}px`; // Random size

    snowflake.style.animationDelay = `${Math.random() * 2}s`; // Random delay

    snowContainer.appendChild(snowflake);

    snowflakeCount++; // Increment the snowflake count

    // Remove the snowflake after it completes the animation

    snowflake.addEventListener("animationend", () => {

        snowflake.remove();

        snowflakeCount--; // Decrement the snowflake count

    });

}

// Continuously create snowflakes at intervals

setInterval(createSnowflake, 250);

  

  function updateCountdown() {

    const targetDate = new Date("December 25, 2024 00:00:00").getTime();

    const now = new Date().getTime();

    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

    if (difference < 0) {

        clearInterval(countdownInterval);

        document.querySelector(".countdown-container").innerHTML = "<h2>🎉Merry Christmas🎉</h2>";

    }

}

const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();

// Constants for ranges

        const DAILY_MIN = 3605;

        const DAILY_MAX = 6503;

        const WEEKLY_MIN = 12800;

        const WEEKLY_MAX = 465060;

        const MIN_ACTIVE_USERS = 40;

        const MAX_ACTIVE_USERS = 1400;

        const ACTIVE_CHANGE_INTERVAL = 5; // Maximum increment or decrement for active visitors

        // Visitors per minute increments

        const dailyIncrement = (DAILY_MAX - DAILY_MIN) / (24 * 60); // Per minute increment

        const weeklyIncrement = (WEEKLY_MAX - WEEKLY_MIN) / (7 * 24 * 60); // Per minute increment

        // Starting values

        let todayVisitors = DAILY_MIN;

        let weeklyVisitors = WEEKLY_MIN;

let activeUsers = randomBetween(MIN_ACTIVE_USERS, MAX_ACTIVE_USERS);

        function randomBetween(min, max) {

            return Math.floor(Math.random() * (max - min + 1)) + min;

        }

        function updateStats() {

            // Update active visitors realistically

            const change = randomBetween(-ACTIVE_CHANGE_INTERVAL, ACTIVE_CHANGE_INTERVAL);

            activeUsers += change;

            if (activeUsers < MIN_ACTIVE_USERS) activeUsers = MIN_ACTIVE_USERS; // Ensure it doesn't go below the minimum

            if (activeUsers > MAX_ACTIVE_USERS) activeUsers = MAX_ACTIVE_USERS; // Ensure it doesn't go above the maximum

            document.getElementById('activeVisitors').textContent = activeUsers;

            // Increment today's visitors and reset at the end of the day

            todayVisitors += dailyIncrement;

            if (todayVisitors > DAILY_MAX) todayVisitors = DAILY_MIN; // Reset at end of the day

            document.getElementById('todayVisitors').textContent = Math.floor(todayVisitors);

            // Increment weekly visitors and reset every 7 days

            weeklyVisitors += weeklyIncrement;

            if (weeklyVisitors > WEEKLY_MAX) weeklyVisitors = WEEKLY_MIN; // Reset at end of the week

            document.getElementById('weeklyVisitors').textContent = Math.floor(weeklyVisitors);

        }

        // Start with initial values

        document.getElementById('activeVisitors').textContent = activeUsers;

        document.getElementById('todayVisitors').textContent = Math.floor(todayVisitors);

        document.getElementById('weeklyVisitors').textContent = Math.floor(weeklyVisitors);

        // Update stats every second for active visitors and every minute for others

        setInterval(updateStats, 1000); // Update every second for real-time experience

 

  // Get the current year

  const currentYear = new Date().getFullYear();

  // Update the content of the span with id "current-year"

  document.getElementById('current-year').textContent = currentYear;

const closedBox = document.getElementById("closed-box");

const openedBox = document.getElementById("opened-box");

const prize = document.getElementById("prize");

const prizeLink = document.getElementById("prize-link");

const prizeImage = document.getElementById("prize-image");

const wishButton = document.getElementById("wish-button");

const congratulations = document.getElementById("congratulations");

const timerElement = document.getElementById("timer");

const confettiAnimation = document.getElementById("confetti-animation");

const openSound = new Audio("https://flashboy25.github.io/Storage-Files/Box-open-sound.mp3");

const eventCodes = [

    { link: "https://offer.alibaba.com/cps/jkgb29v5", img: "https://sc01.alicdn.com/kf/S09c5fb6b393d463fa161cb5768da27beg.png" },

    { link: "https://offer.alibaba.com/cps/example123", img: "https://flashboy25.github.io/Storage-Files/IMG_20241212_000617.jpg" },

    { link: "https://offer.alibaba.com/cps/example456", img: "https://example.com/example2.png" },

];

function getTodayDateString() {

    const today = new Date();

    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

}

function updateTimer() {

    const now = new Date();

    const nextReset = new Date();

    nextReset.setHours(24, 0, 0, 0); // Midnight

    const diff = nextReset - now;

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    timerElement.textContent = `Time left: ${hours}h ${minutes}m ${seconds}s`;

    if (diff <= 0) {

        enableWish();

    }

}

function disableWish() {

    wishButton.disabled = true;

    setInterval(updateTimer, 1000); // Update timer every second

}

function enableWish() {

    wishButton.disabled = false;

    timerElement.textContent = "";

}

wishButton.addEventListener("click", () => {

    const today = getTodayDateString();

localStorage.setItem("lastWishDate", today); // Store today's date

    disableWish();

    openBox();

});

function openBox() {

    closedBox.classList.add("hidden");

    openedBox.classList.remove("hidden");

    openSound.play();

    const randomCode = eventCodes[Math.floor(Math.random() * eventCodes.length)];

    prizeLink.href = randomCode.link;

    prizeImage.src = randomCode.img;

    prize.classList.remove("hidden");

    congratulations.style.display = "block";

    // Launch Lottie confetti animation

    launchConfetti();

}

function launchConfetti() {

    confettiAnimation.classList.remove("hidden");

    setTimeout(() => {

        confettiAnimation.classList.add("hidden");

    }, 5000); // Confetti duration

}

// Check if the user can make a wish today

const lastWishDate = localStorage.getItem("lastWishDate");

const today = getTodayDateString();

if (lastWishDate === today) {

    disableWish(); // Already made a wish today

} else {

    enableWish(); // User can make a wish

}