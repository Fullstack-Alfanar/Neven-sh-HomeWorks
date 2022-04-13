var count = 0, sum = 0, avg = 0;

function mangment() {

    let namee = document.getElementById("name");
    let gradee = document.getElementById("grade");
    let tbody = document.getElementById("tbodyy");

    let Labelcounter = document.getElementById("Id-counter-label");
    let Labelavg = document.getElementById("Id-avg-label");

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdgrade = document.createElement("td");

    let LabelName = document.createElement("label");
    let Labelgrade = document.createElement("label");
    let h3 = document.createElement("h3");
    let h33 = document.createElement("h3");


    Labelgrade.className = "LabelGstyle";
    LabelName.className = "LabelNstyle"
    div1.className = "div1";
    div2.className = "div2";
    h3.className = "h3";
    h33.className = "h33";

    if (namee.value != "" && gradee.value != "" && namee.value != null && gradee.value != null) {

        count++;
        Labelcounter.innerHTML = count;
        sum += parseInt(gradee.value);
        avg = sum / count;
        Labelavg.innerHTML = avg;
        

        LabelName.textContent = namee.value;
        Labelgrade.textContent = gradee.value;

        tbody.appendChild(tr);
        tdName.appendChild(LabelName);
        tdgrade.appendChild(Labelgrade);

        tr.appendChild(tdName);
        tr.appendChild(tdgrade);


        div1.appendChild(Labelcounter);
        div2.appendChild(Labelavg);
        div1.appendChild(h3);
        div2.appendChild(h33);

        document.body.appendChild(div1);
        document.body.appendChild(div2);


        h3.innerHTML = "counter";
        h33.innerHTML = "average";


        namee.value = "";
        gradee.value = "";
    }

    else {
        alert("the input is impty");
    }

}








