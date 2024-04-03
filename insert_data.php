<?php
// Assuming data is sent in JSON format with a key 'values'
$data = file_get_contents("php://input");
$revdata = json_decode($data, true);

phpinfo();

// Connect to your database
$servername = "localhost";
$username = "root";
$password = "Meeh090347";
$dbname = "burger_online";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute SQL query to insert data
$sql = "INSERT INTO order_detail (bread,meat,topping,vegetable,sauce) VALUES (('$values[0]'), ('$values[1]'), ('$values[2]')('$values[3]'),('$values[4]'))";
if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
