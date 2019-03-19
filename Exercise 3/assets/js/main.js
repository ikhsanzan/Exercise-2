

$.getJSON('https://swapi.co/api/planets/?page=2', function (isi) {
    console.log(isi.results);
    console.log(isi.results.length);
    console.log(isi.results[0]);
    $('#myTable').append("<table align='center' class='head table table-striped'><tr><td align='center' width='160'>Nama</td><td  align='center' width='160'>Age</td><td align='center' width='160'>Climate</td><td  align='center' width='160'>Diameter</td></tr></table>");

    for (var i = 0; i < isi.results.length; i++) {
        let name = isi.results[i].name;
        console.log(name);
        let age = isi.results[i].rotation_period;
        console.log(age);
        let der = isi.results[i].climate;
        console.log(der);
        let diameter = isi.results[i].diameter;
        console.log(diameter);        
        var rotation_period = isi.results[i].rotation_period;
        var climate = isi.results[i].climate;

        $('#myTable').append("<table class='table table-dark table-striped' align='center'><tr><td width='160' align='center'>"+name+"</td><td align='center' width='160'>"+ rotation_period +"</td><td align='center' width='160'>"+climate+"<td><td align='center' width='160'>"+diameter+"</td></tr></table>");

    }

}
);

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });