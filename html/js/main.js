
// From cfx-keks (https://github.com/citizenfx/cfx-server-data/tree/master/resources/%5Btest%5D/keks)
var count = 0;
var thisCount = 0;


const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector('.progressBar').style.left = '0%';
        document.querySelector('.progressBar').style.width = ((data.idx / count) * 100) + '%';
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;
        document.querySelector('.progressBar').style.left = '0%';
        document.querySelector('.progressBar').style.width = ((thisCount / count) * 100) + '%';
    },
};

window.addEventListener('message', function (e) {
    (handlers[e.data.eventName] || function () { })(e.data);
});

window.addEventListener("message", (event) => {
  if (event.data.type === "runEffect") {
    document.body.classList.add("glitch-effect");
    document.body.classList.add("play");
    setTimeout(() => {
      document.body.classList.remove("play");
    }, 5000); // Remove the play class after 5 seconds
    setTimeout(() => {
      ShutdownLoadingScreenNui(); // Call the native function to close the loading screen
    }, 5000); // Close the loading screen after 5 seconds
  }
});