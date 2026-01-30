import http from 'node:http';
import worker from './src/index.js';

const server = http.createServer(async (req, res) => {
    try {
        const baseURL = `http://${req.headers.host || 'localhost'}`;
        const url = new URL(req.url, baseURL);
        
        // Create a web standard Request from the Node request
        const webRequest = new Request(url, {
            method: req.method,
            headers: req.headers,
        });

        const webResponse = await worker.fetch(webRequest);

        res.statusCode = webResponse.status;
        webResponse.headers.forEach((value, key) => {
            res.setHeader(key, value);
        });

        // Handle body - handling as arrayBuffer covers both text and binary (like images)
        if (webResponse.body) {
            const body = await webResponse.arrayBuffer();
            res.end(Buffer.from(body));
        } else {
            res.end();
        }

    } catch (err) {
        console.error('Error processing request:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
});

const PORT = process.env.PORT || 8004;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
