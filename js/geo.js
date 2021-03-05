window.onload = function () {
    jQuery("#user-city").text(ymaps.geolocation.city);  
    jQuery("#user-country").text(ymaps.geolocation.country);
    var country = ymaps.geolocation.country;
    var city = ymaps.geolocation.city;
  if(country == 'Россия'){
     jQuery("#user-city").text('Средство №1 в'+' ' +city+'е' );
   } else {
     jQuery("#user").text('Страны СНГ');
 }    
}
