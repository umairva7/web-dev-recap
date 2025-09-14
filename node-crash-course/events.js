import EventEmitter from 'events';

const emitter = new EventEmitter();

// Listener
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit event
emitter.emit('greet', 'Umair');
emitter.emit('greet', 'Ali');

// File operations using events
emitter.on('fileRead', (data) => {
  console.log('File content:', data);
}); 

emitter.on('error', (err) => {
  console.error('Error:', err);
}
);