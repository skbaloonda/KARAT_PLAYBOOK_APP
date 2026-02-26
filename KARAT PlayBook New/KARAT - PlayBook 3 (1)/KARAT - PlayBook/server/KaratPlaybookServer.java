import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.*;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Paths;

public class KaratPlaybookServer {
    
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8081), 0);
        server.createContext("/", new StaticFileHandler());
        server.setExecutor(null);
        
        System.out.println();
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    KARAT - PLAYBOOK SERVER                   ║");
        System.out.println("║                                                              ║");
        System.out.println("║  🚀 Server Status: RUNNING                                   ║");
        System.out.println("║  📡 Port: 8081                                               ║");
        System.out.println("║  🌐 Access your website at:                                  ║");
        System.out.println("║     ➤ http://localhost:8081                                  ║");
        System.out.println("║  ✋ To stop server: Press Ctrl+C                             ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
        
        server.start();
        System.out.println("✅ Server started successfully!");
        System.out.println("🎯 Ready to serve your KARAT - PlayBook website");
    }
    
    static class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String requestPath = exchange.getRequestURI().getPath();
            
            if (requestPath.equals("/")) {
                requestPath = "/home-page/index.html";
            }
            
            String fileName = requestPath.substring(1);
            
            // Handle root-level requests for home-page files
            if (!fileName.contains("/") && (fileName.endsWith(".css") || fileName.endsWith(".js") || fileName.endsWith(".html"))) {
                fileName = "home-page/" + fileName;
            }
            
            File file = new File("../" + fileName);
            
            try {
                if (file.exists() && file.isFile()) {
                    byte[] fileContent = Files.readAllBytes(Paths.get("../" + fileName));
                    
                    String contentType = getContentType(fileName);
                    exchange.getResponseHeaders().set("Content-Type", contentType);
                    
                    exchange.sendResponseHeaders(200, fileContent.length);
                    OutputStream outputStream = exchange.getResponseBody();
                    outputStream.write(fileContent);
                    outputStream.close();
                    
                    System.out.println("✅ Served: " + requestPath);
                    
                } else {
                    String notFound = "<!DOCTYPE html><html><head><title>404 - Not Found</title></head><body style='font-family:Arial;text-align:center;padding:50px;'><h1>404 - Page Not Found</h1><p><a href='/'>← Back to Home</a></p></body></html>";
                    exchange.getResponseHeaders().set("Content-Type", "text/html");
                    exchange.sendResponseHeaders(404, notFound.length());
                    OutputStream outputStream = exchange.getResponseBody();
                    outputStream.write(notFound.getBytes());
                    outputStream.close();
                    
                    System.out.println("❌ 404: " + requestPath);
                }
            } catch (Exception e) {
                String error = "Error: " + e.getMessage();
                exchange.sendResponseHeaders(500, error.length());
                OutputStream outputStream = exchange.getResponseBody();
                outputStream.write(error.getBytes());
                outputStream.close();
                
                System.out.println("💥 Error: " + e.getMessage());
            }
        }
        
        private String getContentType(String fileName) {
            if (fileName.endsWith(".html")) return "text/html";
            if (fileName.endsWith(".css")) return "text/css";
            if (fileName.endsWith(".js")) return "application/javascript";
            if (fileName.endsWith(".json")) return "application/json";
            if (fileName.endsWith(".png")) return "image/png";
            if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) return "image/jpeg";
            if (fileName.endsWith(".gif")) return "image/gif";
            if (fileName.endsWith(".ico")) return "image/x-icon";
            if (fileName.endsWith(".svg")) return "image/svg+xml";
            return "text/plain";
        }
    }
}
