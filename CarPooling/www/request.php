<?php

$cmd = $_REQUEST['cmd'];
switch ($cmd) {
    //add items to the database
    case 1:
        //include("metre.php");
        //
        
        $DB_HOST = "localhost";
        $DB_NAME = "csashesi_beatrice-lungahu";
        $DB_USER = "csashesi_bl16";
        $DB_PWORD = "db!hiJ35";

        $link = mysqli_connect($DB_HOST, $DB_USER, $DB_PWORD, $DB_NAME);
        if ($link == false) {
            echo "not succesfull";
        }
        /*
          if(mysqli_select_db($DB_NAME,$link)){
          echo "echo can not select db";
          } */


        //$new_date = date('yy-mm-dd',strtotime($_POST['Date']));
        $owner = $_REQUEST['Owener'];
        $destination = $_REQUEST['Destination'];
        $time = $_REQUEST['Time'];
        $cost = $_REQUEST['Cost'];
        $People = $_REQUEST['NOoPeople'];
        $CostperPerson = $_REQUEST['CostPerPerson'];
        $point = $_REQUEST['MeetUpPoint'];
        $remaining = $_REQUEST['Remaining'];


        $str_query = "INSERT INTO MWC_CarPooling (Owener,Destination,Time,Cost,NOofPeople,CostPerPerson,MeetUpPoint,Remaining) VALUES('$owner','$destination','$time','$cost','$People','$CostperPerson','$point','$remaining')";

        //mysqli_query($link,$str_query);
        //echo mysqli_error($link);
        if (mysqli_query($link, $str_query)) {
            echo '{"result":1,"message": "SUCCESFULLY ADDED"}';
        } else {
            //echo $str_query;
            echo '{"result":0,"message": "unsuccessful"}';
        }

        break;

    //this displays the content added to the database
    case 2:
        $DB_HOST = "localhost";
        $DB_NAME = "csashesi_beatrice-lungahu";
        $DB_USER = "csashesi_bl16";
        $DB_PWORD = "db!hiJ35";

        $link = mysqli_connect($DB_HOST, $DB_USER, $DB_PWORD, $DB_NAME);
        if ($link == false) {
            echo "not succesfull";
        }
        /*
          if(mysqli_select_db($DB_NAME,$link)){
          echo "echo can not select db";
          } */


        $str_query = "SELECT * FROM MWC_CarPooling ";
        $result = mysqli_query($link, $str_query);
        $row = $result->fetch_assoc();
        echo '{"result":1,"values":['; //start of json object
        while ($row) {
            echo json_encode($row);   //convert the result array to json object
            $row = $result->fetch_assoc();
            if ($row) {
                echo ",";     //if there are more rows, add comma 
            }
        }
        echo "]}";
        break;

    case 3:

        $DB_HOST = "localhost";
        $DB_NAME = "csashesi_beatrice-lungahu";
        $DB_USER = "csashesi_bl16";
        $DB_PWORD = "db!hiJ35";

        $link = mysqli_connect($DB_HOST, $DB_USER, $DB_PWORD, $DB_NAME);
        if ($link == false) {
            echo "not succesfull";
        }
        //echo "Remaining is ".$Remaining;
        //echo "Poolid ".$poolid;
        $Remaining = $_REQUEST['Remaining'];
        $poolid = $_REQUEST['PoolId'];


        $str_query = "UPDATE MWC_CarPooling SET Remaining='$Remaining' WHERE PoolId='$poolid'";
        $result = mysqli_query($link, $str_query);
        if (mysqli_query($link, $str_query)) {
            echo '{"result":1,"message": "SUpdated"}';
        } else {
            //echo $str_query;
            echo '{"result":0,"message": "unsuccessful"}';
        }
        break;


    case 4:
        $DB_HOST = "localhost";
        $DB_NAME = "csashesi_beatrice-lungahu";
        $DB_USER = "csashesi_bl16";
        $DB_PWORD = "db!hiJ35";

        $link = mysqli_connect($DB_HOST, $DB_USER, $DB_PWORD, $DB_NAME);
        if ($link == false) {
            echo "not succesfull";
        }


        $name = $_REQUEST['JoinPoolName'];
        $pNumber = $_REQUEST['PhoneNumber'];



        $str_query = "INSERT INTO  MWC_PoolMembers (Name,PhoneNumber) VALUES('$name','$pNumber')";
        mysqli_query($link, $str_query);
        $poolDetails="You joined the pool";

        ob_start();
        //echo "here";
        $url = "https://api.smsgh.com/v3/messages/send?"
                . "From=CarPooling"
                . "&To=%2B$phoneNumber"
                . "&Content=$poolDetails"
                . "&ClientId=odfbifrp"
                . "&ClientSecret=rktegnml"
                . "&RegisteredDelivery=true";
        $response = file_get_contents($url);
        ob_end_clean();

        break;
}
?>