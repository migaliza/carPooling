/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * 
 * @param {type} u
 * @returns {Object}
 */
/*
 * function to send request
 * 
 */
function sendRequest(u) {
    //alert(u);
    var obj = $.ajax({url: u, async: false});
    var result = $.parseJSON(obj.responseText);
    return result;
}

  /*
   * function to compute cost per person
   */
  $(document).ready(function(){
    $(".input").keyup(function(){
          var val1 = +$("#Tcost").val();
          var val2 = +$("#people").val();
          $("#PCost").val(val1+val2);
    });
});
  
function saveToDataBase() {
    $("#submitData").submit(function (ev) {
        ev.preventDefault();
        var owner = $("#nameO").val();
        var destination = $("#destination").val();
        var time = $("#time").val();
        var tCost = $("#Tcost").val();
        var people =$("#people").val() ;
        var costperPerson=$("#PCost").val();
        var point=$("#Point").val();
        var stringVal = "Owener=" + owner + "&Destination=" + destination + "&Time=" + time + "&Cost=" + tCost+ "&NOoPeople=" + people+ "&CostPerPerson=" + costperPerson+ "&MeetUpPoint=" + point;
        var theUrl = "request.php?cmd=1&" + stringVal;
        var obj = sendRequest(theUrl);
        if (obj.result == 1)
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