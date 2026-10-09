import socket
import socketserver
from http.server import SimpleHTTPRequestHandler
import sys

PORT = 3000

socketserver.TCPServer.allow_reuse_address = True

class DualStackServer(socketserver.TCPServer):
    address_family = socket.AF_INET6

    def server_bind(self):
        try:
            self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
        except (AttributeError, OSError):
            pass
        super().server_bind()

def run():
    print(f"Starting server on port {PORT}...")
    sys.stdout.flush()
    try:
        with DualStackServer(("", PORT), SimpleHTTPRequestHandler) as httpd:
            print(f"Dual-stack server running successfully:")
            print(f"  • http://localhost:{PORT}")
            print(f"  • http://127.0.0.1:{PORT}")
            print(f"  • http://10.20.119.29:{PORT}")
            sys.stdout.flush()
            httpd.serve_forever()
    except Exception as e:
        print(f"Dual-stack init failed ({e}), starting standard IPv4 server...")
        sys.stdout.flush()
        with socketserver.TCPServer(("0.0.0.0", PORT), SimpleHTTPRequestHandler) as httpd:
            print(f"IPv4 server running on http://127.0.0.1:{PORT} and http://10.20.119.29:{PORT}")
            sys.stdout.flush()
            httpd.serve_forever()

if __name__ == "__main__":
    run()
