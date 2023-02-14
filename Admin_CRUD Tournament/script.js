var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Date"] = document.getElementById("Date").value;
    formData["Time"] = document.getElementById("Time").value;
    formData["Team1"] = document.getElementById("Team1").value;
    formData["Team2"] = document.getElementById("Team2").value;
    formData["Team1_Score"] = document.getElementById("Team1_Score").value;
    formData["Team2_Score"] = document.getElementById("Team2_Score").value;
    formData["Winner"] = document.getElementById("Winner").value;
    formData["Group_Stage"] = document.getElementById("Group_Stage").value;
    formData["Game_Season"] = document.getElementById("Game_Season").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("tournamentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Date;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Time;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Team1;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Team2;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Team1_Score;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Team2_Score;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.Winner;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.Group_Stage;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.Game_Season;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Date").value = "";
    document.getElementById("Time").value = "";
    document.getElementById("Team1").value = "";
    document.getElementById("Team2").value = "";
    document.getElementById("Team1_Score").value = "";
    document.getElementById("Team2_Score").value = "";
    document.getElementById("Winner").value = "";
    document.getElementById("Group_Stage").value = "";
    document.getElementById("Game_Season").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Date").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Time").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Team1").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Team2").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Team1_Score").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Team2_Score").value = selectedRow.cells[5].innerHTML;
    document.getElementById("Winner").value = selectedRow.cells[6].innerHTML;
    document.getElementById("Group_Stage").value = selectedRow.cells[7].innerHTML;
    document.getElementById("Game_Season").value = selectedRow.cells[8].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Date;
    selectedRow.cells[1].innerHTML = formData.Time;
    selectedRow.cells[2].innerHTML = formData.Team1;
    selectedRow.cells[3].innerHTML = formData.Team2;
    selectedRow.cells[4].innerHTML = formData.Team1_Score;
    selectedRow.cells[5].innerHTML = formData.Team2_Score;
    selectedRow.cells[6].innerHTML = formData.Winner;
    selectedRow.cells[7].innerHTML = formData.Group_Stage;
    selectedRow.cells[8].innerHTML = formData.Game_Season;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tournamentList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Date").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}