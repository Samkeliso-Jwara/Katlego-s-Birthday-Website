<?

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "att_system";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$rsvpStatus = $_POST['attendance'];


$sql = "INSERT INTO attendance_records (name, email, rsvp_status) VALUES ('$name', '$email', '$rsvpStatus')";

// Execute the query
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>