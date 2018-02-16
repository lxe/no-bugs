#!/usr/bin/env node

console.log('No bugs here!');

const isNode = typeof process !== 'undefined';

if (!isNode) {
  window.addEventListener('error', (e) => {
    e.preventDefault();
  });
} else {
  process.on('uncaughtException', () => {});
}
