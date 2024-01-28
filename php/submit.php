<?php
// Your PHP code for handling the form submission goes here

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assuming your form fields are 'name', 'email', and 'attendance'
    $name = $_POST['name'];
    $email = $_POST['email'];
    $attendance = $_POST['attendance'];

    // Database connection parameters
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "att_event";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Convert 'yes' and 'no' to 1 and 0 for a boolean field
    $attendance_status = ($attendance == 'yes') ? 1 : 0;

    // SQL query to insert data into the 'attendance_records' table
    $sql = "INSERT INTO attendance_record (name, email, attendance_status) VALUES ('$name', '$email', '$attendance_status')";

    // Execute the query
    if ($conn->query($sql) === TRUE) {
        echo "<div style='font-size: 24px; text-align: center; color: #4CAF50; padding: 20px;'>RSVP submitted successfully!</div>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>