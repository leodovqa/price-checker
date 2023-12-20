<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
// Allow the following HTTP methods
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// Allow the following HTTP headers
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$host = "surus.db.elephantsql.com";
$port = "5432";
$dbname = "ecflptzx";
$user = "ecflptzx";
$password = "2J7XG1Qc146lH4cpcjmzlscWlw7l0jHH";

// Establish a connection to the PostgreSQL database
$db = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

// Check the connection
if (!$db) {
    die("Connection failed: " . pg_last_error());
} else {
    echo "Connected successfully!";
}

// Close the connection when done
pg_close($db);
?>
