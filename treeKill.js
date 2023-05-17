
// const kill = require('tree-kill');
// const { spawn } = require("child_process");
// const options = {shell:true};  
// const ls = spawn('gst-launch-1.0', ['audiotestsrc ! autoaudiosink'], options);
// ls.stdout.on("data", data => {
//     console.log(`stdout: ${data}`);
//     console.log("Success");
//     setTimeout(() => {
//       kill(ls.pid);
//     }, 3000);
// });

// ls.stderr.on("data", data => {
//     console.log(`stderr: ${data}`);
// });

// ls.on('error', (error) => {
//     console.log(`error: ${error.message}`);
// });

// ls.on("close", code => {
//     console.log(`child process exited with code killed`);
// });
