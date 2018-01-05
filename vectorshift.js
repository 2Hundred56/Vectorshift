var PythonShell = require('python-shell');
var pyshell = new PythonShell('vshift_python/main.py');

// sends a message to the Python script via stdin
pyshell.send('start-process');

var queue = [];

pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  queue.push(message);
});

function sketchProc(processing) {
    processing.setup = function() {
        processing.background(100);
    }

    processing.draw = function() {
        pyshell.send('sig-start');
        while (true) {
            if (queue[queue.length - 1] == "$end") {
                break
            }
        }
        // Execute all js code in the queue
        for (var i=0;i<queue.length;i++) {
            if (queue[i].startsWith("$")) { // "$" commands are ignored as meta-instructions

            } else {
                eval(queue[i]);
            }
        }
        queue = [];

    }
}
var canvas = document.getElementById("main-canvas");
// attaching the sketchProc function to the canvas
var processingInstance = new Processing(canvas, sketchProc);
