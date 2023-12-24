<?php
header('Content-Type: application/json; charset=utf-8');

 $host = "surus.db.elephantsql.com";
 $user = "ecflptzx";
 $pass = "2J7XG1Qc146lH4cpcjmzlscWlw7l0jHH";
 $db = "ecflptzx";

// Open a PostgreSQL connection
$con = pg_connect("host=$host dbname=$db user=$user password=$pass") or die ("Could not connect to server\n");

// Check if the connection is successful
if (!$con) {
    die('Connection failed');
}

$query = 'SELECT * FROM users';
$results = pg_query($con, $query) or die('Query failed: ' . pg_last_error());

$row = pg_fetch_array($results);
//print_r($row);
