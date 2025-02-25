<?php 
	// this is the code that establishes a connection to the database
	// you do not need to modify any of this code
	// you should incldue this file all your .php files using: include('config/db_connect.php');

	// might log to XAMPP > xamppfiles > logs folder
    ini_set("error_reporting",E_ALL);
    ini_set("log_errors","1");
    ini_set("error_log","php_errors.txt");

	// connect to the database
    $conn = mysqli_connect('localhost', 'root', '', 'compx222-assignment3-2024');

	// check connection
	if(!$conn){
		die('Connection error: '. mysqli_connect_error());
	}

?>