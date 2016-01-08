/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * 
 * @returns {undefined}
 * function to find the price per person
 */
/* global values, divContainer, divCardCard, divCardBlock, divCard */

function costPerPerson() {
    var tCost = document.getElementById("Tcost").value;
    var people = document.getElementById("people").value;
    var result = Number(tCost) / Number(people);
    if (!isNaN(result)) {
        document.getElementById("PCost").value = result;
    }


}

function scanBarcode() {
    cordova.plugins.barcodeScanner.scan(
            function (result) {
                // alert(result.text);
                document.getElementById("capturedd").value = result.text;


            },
            function (error) {
                alert("Scanning failed: " + error);
            }
    );
}
/*
 * 
 * function to find the remaining number of people to board
 */
function joinPool() {
    $errorMsg = $("<span class='error'>This field is required..!!</span>");

    var pool = document.getElementById("poolId");
    var id = pool.innerText;
    var numberR = document.getElementById("poolNumber");
    var nRemaining = Number(numberR.innerText);



    var numberUpdate = nRemaining - 1;
    var joinName = $("#nameO").val();
    var phoneNumber = $("#phoneNu").val();
    var owner = document.getElementById("Oname");
    var capturedId = $("#capturedd").val();

    var ownerPool = owner.innerText;
    var stringPool = "JoinPoolName=" + joinName + "&PhoneNumber=" + phoneNumber + "&PoolOwner=" + ownerPool + "&captured=" + capturedId;
    var stringVal = "PoolId=" + id + "&Remaining=" + numberUpdate;
    var theUrl = "request.php?cmd=3&" + stringVal;
    var obj = sendRequest(theUrl);
    var joinUrl = "request.php?cmd=4&" + stringPool;
    var obj2 = sendRequest(joinUrl);
    if (obj.result === 1 && obj2.result === 1) {
        alert("Sucessfull");
        location.reload();
    }
    else {
        alert("Not successful");
    }







}


function loadSignedPools() {

//alert("ready");
    var theUrl = "request.php?cmd=2";
    var obj = sendRequest(theUrl);
    if (obj.result === 1) {

        $.each(obj.values, function (i, value) {
            var modalController = $('<div><div>');
            modalController.html('<div id="' + i + '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title" id="poolId"> ' + value.PoolId + '</h4><h4 id="Oname"> OWNER NAME: ' + value.Owener + '</h4></div><div class="modal-body"><h5>Remaining to Fill Pool</h5><h5 id="poolNumber">' + value.Remaining + '</h5><div><input type="button" class= "btn-info" value ="SCAN" id="btnScan" onclick="scanBarcode()"></div><div><input type="text" name="captured" id="capturedd" placeholder="Scan your student or staff id"></div><input type="text" class="form-control" id="nameO" name="JoinPoolName" placeholder="name"><input type="text" class="form-control" id="phoneNu" name="PhoneNumber" placeholder="+233505358170"></div><div class="modal-footer"><input class="btn btn-success" type="submit" value="INTERESTED!" onClick="joinPool()"> <a href="#" class="btn" data-dismiss="modal">CLOSE</a></div></div></div></div>');

            var divElement = $('<div></div>');

            divElement.html('<div class="container-fluid" style="background-color: #e5ffe5;border-style: ridge; border-color:#000000; margin: 1% 0% 1% 0%; "><div class="card "><div class="card-header text-muted" ><h4><b> OWNER NAME: </b> ' + value.Owener + '</h4></div> <div class="card-block"><p><b>DESTINATION: </b>' + value.Destination + '<p><p class="card-text"><b>DEPARTURE: </b>' + value.Time + '</p>' + '<p><p class="card-text"><b>COST PER PERSON: </b>' + value.CostPerPerson + '</p><a href="#" class="btn btn-primary"  data-toggle="modal" data-target="#' + i + '">VIEW</a></div><div class="card-footer text-muted"></div><div class="card-footer text-muted"><h4><b>People Remaining to Fill Pool: </b>' + value.Remaining + '</h4></div> </div></div>');
            $("#cardsOutPut").append(divElement);
            $("#modalSample").append(modalController);

        });


    }

}


/*
 * 
 * 
 * @returns {jQuery|Object}
 * function to load the 
 */


function loadData() {
//alert("ready");
    var theUrl = "request.php?cmd=2";
    var obj = sendRequest(theUrl);
    if (obj.result === 1) {

        $.each(obj.values, function (i, value) {
            var modalController = $('<div><div>');
            modalController.html('<div id="' + i + '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title" id="poolId"> ' + value.PoolId + '</h4><h4 id="Oname"> OWNER NAME: ' + value.Owener + '</h4></div><div class="modal-body"><h5>Remaining to Fill Pool</h5><h5 id="poolNumber">' + value.Remaining + '</h5><div><input type="button" class= "btn-info" value ="SCAN" id="btnScan" onclick="scanBarcode()"></div><div><input type="text" name="captured" id="capturedd" placeholder="Scan your student or staff id"></div><input type="text" class="form-control" id="nameO" name="JoinPoolName" placeholder="name"><input type="text" class="form-control" id="phoneNu" name="PhoneNumber" placeholder="+233505358170"></div><div class="modal-footer"><input class="btn btn-success" type="submit" value="INTERESTED!" onClick="joinPool()"> <a href="#" class="btn" data-dismiss="modal">CLOSE</a></div></div></div></div>');

            var divElement = $('<div></div>');

            divElement.html('<div class="container-fluid" style="background-color: #e5ffe5;border-style: ridge; border-color:#000000; margin: 1% 0% 1% 0%; "><div class="card "><div class="card-header text-muted" ><h4><b> OWNER NAME: </b> ' + value.Owener + '</h4></div> <div class="card-block"><p><b>DESTINATION: </b>' + value.Destination + '<p><p class="card-text"><b>DEPARTURE: </b>' + value.Time + '</p>' + '<p><p class="card-text"><b>COST PER PERSON: </b>' + value.CostPerPerson + '</p><a href="#" class="btn btn-primary"  data-toggle="modal" data-target="#' + i + '">VIEW</a></div><div class="card-footer text-muted"></div><div class="card-footer text-muted"><h4><b>People Remaining to Fill Pool: </b>' + value.Remaining + '</h4></div> </div></div>');
            $("#cardsOutPut").append(divElement);
            $("#modalSample").append(modalController);

        });


    }

}

/*
 * function to send request
 * @param {type} u
 */
function sendRequest(u) {
    //alert("here");
    // alert(u);
    console.log(u);
    var obj = $.ajax({url: u, async: false});
    var result = $.parseJSON(obj.responseText);
    return result;
}

function signUp() {
    $("#signupform").submit(function (ev) {
        ev.preventDefault();
        var email = $("#email").val();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var phoneNumber = $("#pNumber").val();
        var userName = $("#userName").val();


        if (email == "" || firstName == "" || lastName == "" || phoneNumber === "" || userName === "") {
            alert("The values entered are invalid or Your passwords do not match");
        }
        else {
            var stringVal = "Email=" + email + "&FirstName=" + firstName + "&LastName=" + lastName + "&PhonNumber=" + phoneNumber + "&UserName=" + userName;
            var theUrl = "request.php?cmd=5&" + stringVal;

            var obj = sendRequest(theUrl);
            if (obj.result == 1) {
                alert("Succesfully Signed Up");
                document.getElementById("email").value = "";
                document.getElementById("firstName").value = "";
                document.getElementById("lastName").value = "";
                document.getElementById("pNumber").value = "";
                document.getElementById("userName").value = "";

            }
            else {
                alert("Unsuccessful");
                document.getElementById("email").value = "";
                document.getElementById("firstName").value = "";
                document.getElementById("lastName").value = "";
                document.getElementById("pNumber").value = "";
                document.getElementById("userName").value = "";

            }


        }



    });
}
/*
 * 
 * @returns {undefined}
 * function to signup the user
 */

function Login() {
    $("#loginbox").submit(function (ev) {
        ev.preventDefault();

        var username = $("#loginUsername").val();
        var password = $("#loginPassword").val();
        var stringVal = "UserName=" + username + "&randomPass=" + password;
        var theUrl = "request.php?cmd=6&" + stringVal;

        var obj = sendRequest(theUrl);

        if (obj.result == 1) {
            window.location.replace('createPool.html');

        }
    });
}

function checkPassword() {
    var password = $("#password").val();
    var confirmPassword = $("#cPassword");

    if (password !== confirmPassword) {
        $("checkConfirmPassword").html("Password do not match");
    }
    else {
        $("checkConfirmPassword").html("Passwords Match");
    }

}

/*
 * function to compute cost per person
 */


function saveToDataBase() {
    $("#submitData").submit(function (ev) {
        ev.preventDefault();
        var owner = $("#nameO").val();
        var destination = $("#destination").val();
        var time = $("#time").val();
        var tCost = $("#Tcost").val();
        var people = $("#people").val();
        var costperPerson = $("#PCost").val();
        var point = $("#Point").val();
        var peopleR = Number(people) - 1;
        alert(peopleR);
        var stringVal = "Owener=" + owner + "&Destination=" + destination + "&Time=" + time + "&Cost=" + tCost + "&NOoPeople=" + people + "&CostPerPerson=" + costperPerson + "&MeetUpPoint=" + point + "&Remaining=" + peopleR;
        var theUrl = "request.php?cmd=1&" + stringVal;
        // alert(theUrl);
        var obj = sendRequest(theUrl);
        if (obj.result === 1)
        {
            $('#showMessage').text(obj.message);
            $('#showMessage').show();
        }
        else
        {
            $('#showMessage').text("Error adding");
            $('#showMessage').css("backgroundColor", "red");
        }

    });
}