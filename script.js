try {    
    let deptSelect = document.getElementById("deptSelect");
    let deptValue = deptSelect.value;
    deptSelect.addEventListener("onchange", loadtable);
    function loadtable() {
        let tbl1 = document.getElementById("tbl1")
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let List = JSON.parse(this.responseText);                
                let item = List.list;
                // console.log(item);
                // let output = "<caption>Items to Buy<select name='Departmentselect' id='deptSelect'><option value='all'>All</option><option value='food'>Food Items</option><option value='stationary'>Stationary</option><option value='health'>Health</option></select></caption><tr><th>Sr.No.</th><th>Name</th><th>Quantiy</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
                // let deptSelect = document.getElementById("deptSelect");
                deptValue = deptSelect.value;                
                let output = "<caption>List of Items</caption><tr><th>Sl.No.</th><th>Name</th><th>Quantiy</th><th>Unit</th><th>Category</th><th>Details</th></tr>";
                for (let i = 0; i < item.length; i++) {
                    if (deptValue == "all") {
                        output += "<tr>";
                        output += "<td>" + item[i].SlNum + "</td>";
                        output += "<td>" + item[i].Name + "</td>";
                        output += "<td>" + item[i].Quantity + "</td>";
                        output += "<td>" + item[i].Unit + "</td>";
                        output += "<td>" + item[i].Category + "</td>";
                        output += "<td>" + item[i].Notes + "</td>";
                    }
                    else if (deptValue == item[i].Category) {
                        output += "<tr>";
                        output += "<td>" + item[i].SlNum + "</td>";
                        output += "<td>" + item[i].Name + "</td>";
                        output += "<td>" + item[i].Quantity + "</td>";
                        output += "<td>" + item[i].Unit + "</td>";
                        output += "<td>" + item[i].Category + "</td>";
                        output += "<td>" + item[i].Notes + "</td>";
                    }

                }

                tbl1.innerHTML = output;
            }
        }
        xhttp.open("GET", "list.json", true);
        xhttp.send();
    }
}
catch (e) {
    document.getElementById("listdiv").innerHTML = e;
}