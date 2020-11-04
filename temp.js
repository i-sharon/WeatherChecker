$(document).ready(function(){
    
    $("#submitCity").click(function(){
        return getDetails();
    });
    
    
});

function getDetails(){
    var city = $("#city").val();
    
    if(city != ''){
        
        $.ajax({
           url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var show = showResults(data)      
                
                $("#showWeather").html(show);
                
                $("#city").val('');//reset city value
            }
            
        });
        
        
    }
    
}


function showResults(data){
    return  '<h2 >Current Weather in '+data.name+'</h2><br>'+
            "<h3 >Weather: "+data.weather[0].main+"</h3>"+
            "<h3 >Temperature: "+data.main.temp+" &deg;C</h3>"+
            "<h3 >Min Temperature: "+data.main.temp_min+"&deg;C</h3>"+
            "<h3 >Max Temperature: "+data.main.temp_max+"&deg;C</h3>";
}












