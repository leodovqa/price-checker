<?php
include 'db.php';  // Include the database connection script

header('Content-Type: application/json; charset=utf-8');

$query = "SELECT * FROM users";
$result = pg_query($con, $query);

$data = array();
while ($row = pg_fetch_assoc($result)) {
    $data[] = $row;
}

print_r(json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));

// Closing connection
pg_close($con);
