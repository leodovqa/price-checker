<?php
include 'db.php';  // Include the database connection script

header('Content-Type: application/json; charset=utf-8');

// Get a query that needed to be fetched
$query = "SELECT * FROM users";
$result = pg_query($con, $query);

// Write all the data into an array
$data = array();
while ($row = pg_fetch_assoc($result)) {
    $data[] = $row;
}

//Print all the data via JSON encoded so I can use it later on the HTML/JS
print_r(json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));

// Closing connection
pg_close($con);
