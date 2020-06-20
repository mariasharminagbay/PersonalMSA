//var people = [{FName: '',LName: ''}];//['John', 'Mark', 'Luke', 'Mat']
//var peopleArray = new ListArray();
var people = [];

function create_row(FName, LName, index) {
  var row = ""
  row += "<tr id='" + index + "'>\n"
  row += "<td onclick='remove_person(" + index + ")'>❌</td>\n"
  row += "<td>" + FName + "</td>\n"
  row += "<td>" + LName + "</td>\n"
  
  row += "</tr>"
  return row
}

function refresh_table(){
  var code_snippet = ""
  for(var person in people)
    code_snippet += create_row(people[0],people[1], person)
/*   for(var i=0; i < people.length; i++)
    for(var j in people[i])
        alert(code_snippet);
        code_snippet += create_row(people[j],i) */
        

  var table = document.querySelector('#my_table')
  table.innerHTML = code_snippet 
}

function remove_person(index){
  people.splice(index, 1)
  refresh_table()
}

function onEnterUp(event) {
  if (event.code !== 'Enter') return;
  //var name_input = document.querySelector('input')
  //alert('Hello');
  var FName_input = document.getElementById("FName").value;
  var LName_input = document.getElementById("LName").value;
  alert(FName_input);
  alert(LName_input);

  //let element = {FName: FName_input,LName: LName_input,LName: LName_input};

  people[0] = FName_input;
  people[1] = LName_input;
 
  alert(people.length);

/*     var iterator = people.values();
    for (let elements of iterator) {
        alert(elements)
    } */

  FName_input.value = ""
  LName_input.value = ""
  refresh_table()
}