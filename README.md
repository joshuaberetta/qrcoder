# QR Code Generator API

A lightweight service that generates SVG QR codes from URL parameters. It features a simple web interface for manual use and a fast API designed for integration with data collection tools like KoboToolbox.

## Features

- **Instant Generation**: Returns optimized SVG images.
- **Web Interface**: Simple form to generate and download QR codes manually.
- **API First**: Designed for easy integration (GET requests).
- **Containerized**: Ready for deployment with Docker.

## Usage

### Web Interface
Navigate to the root URL (e.g., `https://qrcoder.imtools.info` or `http://localhost:3000`) to see the landing page where you can manually enter text to generate a QR code.

### API Endpoint
Make a GET request to the root URL with a `data` query parameter:

```
GET /?data=YourTextHere
```

**Example:**
```
https://qrcoder.imtools.info/?data=Hello%20World
```

This will return a downloadable SVG file containing the QR code.

## Integration Guide: KoboToolbox

This API is ideal for generating QR codes dynamically within KoboToolbox forms (or ODK Collect).

To use it in a form:
1. Construct a standard valid URL in a `calculate` field or similar.
2. Use that URL as an external image resource if supported, or simply provide the link for users to download/print.

## Deployment

### Docker (Recommended)
The project includes a `Dockerfile` and `docker-compose.yml` for easy deployment.

1. **Start the service:**
   ```bash
   docker-compose up -d --build
   ```
   The service will be available on port `3000`.

2. **Nginx Reverse Proxy:**
   An example configuration is provided in `nginx-qrcoder.conf` to serve the app behind Nginx on `qrcoder.imtools.info`.

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the server:
   ```bash
   npm start
   ```
   The server will start at `http://localhost:3000`.
