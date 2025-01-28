# Node.js Server Hang: Missing 'res.end()'

This repository demonstrates a common yet easily overlooked error in Node.js HTTP servers: forgetting to call `res.end()` after sending a response.  This seemingly small omission can lead to the server hanging and connections remaining open indefinitely, causing performance issues and potential instability.

## The Bug

The `bug.js` file contains a simple HTTP server that omits the crucial `res.end()` call.  This results in the server failing to properly close the response, leading to the hang.

## The Solution

The `bugSolution.js` file provides the corrected code, which includes the `res.end()` call, ensuring proper response closure and preventing the server hang.  This fix resolves the issue and allows the server to handle requests efficiently.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js` and observe the hanging behavior. You may need to interrupt it with Ctrl+C.
4. Run `node bugSolution.js` and observe that it works correctly.