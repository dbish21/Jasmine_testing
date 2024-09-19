import subprocess
import json
import http.server
import socketserver
import socket
import sys

# 1. Make a GET request to icanhazdadjoke.com API using curl
def get_pirate_jokes():
    try:
        curl_command = [
            'curl', '-H', 'Accept: application/json',
            'https://icanhazdadjoke.com/search?term=pirate'
        ]
        result = subprocess.run(curl_command, capture_output=True, text=True)
        return json.loads(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Error running curl: {e}")
        return {"results": []}

# 2. Use dig to find IP address of icanhazdadjoke.com
def get_ip_address():
    try:
        return socket.gethostbyname('icanhazdadjoke.com')
    except socket.gaierror:
        return "Unable to resolve IP address for icanhazdadjoke.com"

# 3. Serve a simple web page
def serve_webpage():
    PORT = 8000
    Handler = http.server.SimpleHTTPRequestHandler

    # Get all available IP addresses
    hostname = socket.gethostname()
    ip_addresses = socket.gethostbyname_ex(hostname)[2]
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"Server started on port {PORT}")
            print("Available addresses:")
            for ip in ip_addresses:
                print(f"http://{ip}:{PORT}")
            print(f"http://localhost:{PORT}")
            print(f"http://127.0.0.1:{PORT}")
            print("\nPress Ctrl+C to stop the server")
            httpd.serve_forever()
    except OSError as e:
        print(f"Error starting server: {e}")
        if e.errno == 98:  # Address already in use
            print(f"Port {PORT} is already in use. Try a different port.")
        sys.exit(1)
    except KeyboardInterrupt:
        print("\nServer stopped.")

if __name__ == "__main__":
    # 1. Get and print pirate jokes
    jokes = get_pirate_jokes()
    print("Pirate jokes:")
    for joke in jokes['results']:
        print(f"- {joke['joke']}")

    # 2. Get and print IP address
    ip_address = get_ip_address()
    print(f"\nIP address of icanhazdadjoke.com: {ip_address}")

    # 3. Serve webpage
    print("\nStarting web server...")
    serve_webpage()
