<?php
/**
 * Petshop Clients API
 * Handles CRUD operations for the clients table.
 */

// --- 1. Headers & CORS Configuration ---
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// --- 2. Database Connection ---
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "petshop";

$conn = new mysqli($servername, $username, $password, $dbname);

// Fixed: Added missing $ to conn
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Connection failed: " . $conn->connect_error]);
    exit();
}

// --- 3. Request Routing ---
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $id = $_GET['id'] ?? null;

        if ($id) {
            // Fetch single client
            $stmt = $conn->prepare("SELECT * FROM clients WHERE id = ?");
            $stmt->bind_param("s", $id); // Fixed: "string" corrected to "s"
            $stmt->execute();
            $result = $stmt->get_result();
            echo json_encode($result->fetch_assoc());
        } else {
            // Fetch all clients
            $result = $conn->query("SELECT * FROM clients");
            echo json_encode($result->fetch_all(MYSQLI_ASSOC));
        }
        break; // Fixed: Added break to prevent fall-through

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        
        if (isset($data['name'], $data['email'])) {
            $stmt = $conn->prepare("INSERT INTO clients (id, name, email) VALUES (?, ?, ?)");
            $stmt->bind_param("iss", $data['id'], $data['name'], $data['email']);
            
            if ($stmt->execute()) {
                http_response_code(201);
                echo json_encode(["message" => "Client created successfully"]);
            } else {
                http_response_code(500);
                echo json_encode(["message" => "Error creating client: " . $stmt->error]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "Incomplete data. Name and email required."]);
        }
        break;

    case 'PUT':
        $id = $_GET['id'] ?? null;
        
        if ($id) {
            $data = json_decode(file_get_contents("php://input"), true);
            $stmt = $conn->prepare("UPDATE clients SET name = ?, email = ? WHERE id = ?");
            $stmt->bind_param("sss", $data['name'], $data['email'], $id);
            
            if ($stmt->execute()) {
                echo json_encode(["message" => "Client updated successfully"]);
            } else {
                http_response_code(500);
                echo json_encode(["message" => "Error updating client: " . $stmt->error]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "Client ID is required"]);
        }
        break;

    case 'DELETE':
        $id = $_GET['id'] ?? null;
        
        if ($id) {
            $stmt = $conn->prepare("DELETE FROM clients WHERE id = ?");
            $stmt->bind_param("s", $id);
            
            if ($stmt->execute()) {
                echo json_encode(["message" => "Client deleted successfully"]);
            } else {
                http_response_code(500);
                echo json_encode(["message" => "Error deleting client: " . $stmt->error]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "Client ID is required"]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["message" => "Method not allowed"]);
        break;
}

// --- 4. Cleanup ---
$conn->close();
?>
