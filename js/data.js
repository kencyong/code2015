function CallURL(){
       $.ajax({

    url: 'http://geoportal-geoportail.gc.ca/ArcGIS/rest/services/Reported_Observations_Aquatic_Invasive_Species_ENG/MapServer/?f=json&pretty=true',


    type: "GET",
    dataType: "jsonp",
    async:false,
     success: function (msg) {
         JsonpCallback(msg);
    },
    error: function () {
    	alert("HIIIII!!");
        //ErrorFunction();
    }

});

}


function JsonpCallback(json)
{
 alert(json.result);	
 //document.getElementById('summary').innerHtml=json.result;
}