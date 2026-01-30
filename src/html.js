export const landingPage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Coder API</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background-color: #f4f5f7;
            color: #586069;
            margin: 0;
            padding: 2rem;
            line-height: 1.6;
            display: flex;
            justify-content: center;
        }
        .container {
            width: 100%;
            max-width: 600px;
        }
        h1 { 
            font-size: 24px;
            font-weight: 500;
            color: #2c3e50;
            margin-bottom: 32px;
            text-align: center;
        }
        h2 {
            font-size: 18px;
            font-weight: 500;
            color: #2c3e50;
            margin-top: 0;
            margin-bottom: 24px;
        }
        h3 {
            font-size: 16px;
            font-weight: 500;
            color: #2c3e50;
            margin-top: 24px;
            margin-bottom: 12px;
        }
        .card {
            background: #ffffff;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            padding: 32px 40px;
            margin-bottom: 24px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 8px;
            font-size: 13px;
            font-weight: 500;
            color: #2c3e50;
        }
        input[type="text"] {
            width: 100%;
            padding: 11px 12px;
            border: 1px solid #d1d5da;
            border-radius: 3px;
            font-size: 14px;
            font-family: inherit;
            box-sizing: border-box; 
            transition: border-color 0.2s, box-shadow 0.2s;
            color: #2c3e50;
        }
        input[type="text"]:focus {
            outline: none;
            border-color: #4A90E2;
            box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
        }
        ::placeholder {
            color: #95a5a6;
        }
        button {
            background-color: #4A90E2;
            color: white;
            border: none;
            padding: 12px 16px;
            font-size: 14px;
            font-weight: 500;
            border-radius: 3px;
            cursor: pointer;
            width: 100%;
            transition: background-color 0.2s;
        }
        button:hover { background-color: #357ABD; }
        button:active { background-color: #2E6DA4; }
        
        code {
            background: #f8f9fa;
            border: 1px solid #d1d5da;
            color: #2c3e50;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
            font-size: 13px;
        }
        .note {
            font-size: 14px;
            color: #586069;
            background-color: #f8f9fa;
            border: 1px solid #e1e4e8;
            border-left: 4px solid #4A90E2;
            border-radius: 3px;
            padding: 16px;
            margin-top: 24px;
        }
        .note strong {
            color: #2c3e50;
        }
        p {
            margin-bottom: 16px;
            font-size: 14px;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #7f8c8d;
            margin-top: 32px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>QR Coder API</h1>
        
        <div class="card">
            <h2>Try it out</h2>
            <form id="qrForm">
                <div class="form-group">
                    <label for="dataInput">Enter text to encode</label>
                    <input type="text" id="dataInput" placeholder="e.g., https://example.com or ID-12345" required>
                </div>
                <button type="submit">Generate QR Code</button>
            </form>
        </div>

        <div class="card">
            <h2>API Usage</h2>
            <p>This service generates SVG QR codes via a simple GET request.</p>
            <p><strong>Endpoint:</strong> <br><code>GET /?data={your_text}</code></p>
            
            <h3>Example</h3>
            <p><code>https://qrcoder.imtools.info/?data=Hello%20World</code></p>

            <div class="note">
                <p><strong>Primary Use Case:</strong> This API is designed to be used within KoboToolbox forms (or similar data collection tools) to dynamically generate QR codes for IDs, URLs, or other form values.</p>
            </div>
        </div>
        
        <div class="footer">
            Simple QR code generator API
        </div>
    </div>

    <script>
        document.getElementById('qrForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const data = document.getElementById('dataInput').value;
            if (data) {
                window.location.href = '/?data=' + encodeURIComponent(data);
            }
        });
    </script>
</body>
</html>`;
