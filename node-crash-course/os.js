import os from 'os';

console.log('Platform:', os.platform()); // win32, linux, darwin
console.log('CPU Architecture:', os.arch());
console.log('Number of CPUs:', os.cpus().length);
console.log('Free Memory:', os.freemem());
console.log('Total Memory:', os.totalmem());
console.log('Home Dir:', os.homedir());
console.log('Uptime (seconds):', ((os.uptime())/60)/24); // in days
