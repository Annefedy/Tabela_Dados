function addRow(){
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  cell1.innerHTML = '<input type="text" />';
  cell2.innerHTML = '<input type="text" />';
  cell3.innerHTML = '<input type="text" />';
  cell4.innerHTML = '<input type="text" />';
  cell5.innerHTML = '<input type="text" />';
  cell6.innerHTML = '<input type="text" />';
  cell7.innerHTML = '<button class="btn" onclick="removeRow(this);">Remover</button><button class="btn" onclick="editRow(this);">Alterar</button>';
}
function removeRow(row) {
    var i = row.parentNode.parentNode.rowIndex;
    var conf = confirm("Tem certeza que deseja remover a linha? Esta ação não pode ser desfeita.");
    if(conf == true){
      document.getElementById("myTable").deleteRow(i);
    }
}
function editRow(row){
  var cells = row.parentNode.parentNode.cells;
  cells[0].innerHTML='<input type="text" value="'+cells[0].innerHTML+'" />';
  cells[1].innerHTML='<input type="text" value="'+cells[1].innerHTML+'" />';
  cells[2].innerHTML='<input type="text" value="'+cells[2].innerHTML+'" />';
  cells[3].innerHTML='<input type="text" value="'+cells[3].innerHTML+'" />';
  cells[4].innerHTML='<input type="text" value="'+cells[4].innerHTML+'" />';
  cells[5].innerHTML='<input type="text" value="'+cells[5].innerHTML+'" />';
  cells[6].innerHTML='<button class="btn" onclick="saveRow(this);">Salvar</button>';
}
function saveRow(row){
  var cells = row.parentNode.parentNode.cells;
  cells[0].innerHTML=cells[0].children[0].value;
  cells[1].innerHTML=cells[1].children[0].value;
  cells[2].innerHTML=cells[2].children[0].value;
  cells[3].innerHTML=cells[3].children[0].value;
  cells[4].innerHTML=cells[4].children[0].value;
  cells[5].innerHTML=cells[5].children[0].value;
  cells[6].innerHTML='<button class="btn" onclick="removeRow(this);">Remover</button><button class="btn" onclick="editRow(this);">Alterar</button>';
}
function showMessage(){
  var elements = document.getElementsByClassName("modelo");
  for(var i=0; i<elements.length; i++){
    elements[i].onclick = function(){
      var cells = this.parentNode.cells;
      alert("A marca deste modelo é "+cells[2].innerHTML);
    };
  }
}
window.onload = function(){
  var teste = document.getElementById("teste").value;
  if(teste == "S"){
    document.getElementById("teste_header").innerHTML = "<div style='color:red; text-align:center;'>TESTE</div>";
  }
  showMessage();
}