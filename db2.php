<?php
header('Content-Type: application/json; charset=utf-8');

$host = "surus.db.elephantsql.com";
$port = "5432";
$dbname = "ecflptzx";
$user = "ecflptzx";
$password = "2J7XG1Qc146lH4cpcjmzlscWlw7l0jHH";

try {
    $db = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo $db;

    $query = "SELECT * FROM users";
    $stmt = $db->prepare($query);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Set the content type header to JSON
    header('Content-Type: application/json');

    // Output the results as JSON
    echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    //echo json_encode($result);
} catch (PDOException $e) {
    // Handle database connection errors
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
}
?>
