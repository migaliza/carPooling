<?php
$DB_HOST="localhost";
	$DB_NAME="csashesi_beatrice-lungahu";
	$DB_USER="csashesi_bl16";
	$DB_PWORD="db!hiJ35";

	//connect to database
	$link = mysqli_connect($DB_HOST , $DB_USER, $DB_PWORD,$DB_NAME);
	

		// username and password sent  
	$user_name=$_POST['username']; 
	$user_pass=$_POST['password'];
	$phoneNumber=$_POST['phonerNumber'];
	$randomPass = mt_rand(10,50);

	// To protect MySQL injection 
	
	
	$str_query="INSERT INTO login(username,phoneNumber,password,randompass) VALUES('$user_name',$phoneNumber,'$user_pass','$randomPass')";
	mysqli_query($link,$str_query);
	
	ob_start();
	echo "here";
	$url = "https://api.smsgh.com/v3/messages/send?"
    . "From=Beatrice"
    . "&To=%2B$phoneNumber"
    . "&Content=$randomPass"
    . "&ClientId=odfbifrp"
    . "&ClientSecret=rktegnml"
    . "&RegisteredDelivery=true";
 // Fire the request and wait for the response
 $response = file_get_contents($url) ;
// var_dump($response);
 ob_end_clean();
 //header("Location:http://cs.ashesi.edu.gh/~csashesi/class2016/beatrice-lungahu/MobileWeb/SMSGhana/index.php");


	

?>