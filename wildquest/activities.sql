<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "wild_quest";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM activities";
$result = $conn->query($sql);

$activities = [];

while ($row = $result->fetch_assoc()) {
    $activities[] = $row;
}

echo json_encode($activities);

$conn->close();
?>
