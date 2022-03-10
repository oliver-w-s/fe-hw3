const tableInfo = [
  {
    studentName: "John",
    Age: 19,
    Phone: "455 - 983 - 0903",
    Address: "123 Ave, San Francisco, CA, 94011",
  },
  {
    studentName: "Alex",
    Age: 21,
    Phone: "455 - 983 - 0912",
    Address: "456 Rd, San Francisco, CA, 94012",
  },
  {
    studentName: "Josh",
    Age: 22,
    Phone: "455 - 345 - 0912",
    Address: "789 Dr, Newark, CA, 94016",
  },
  {
    studentName: "Matt",
    Age: 23,
    Phone: "321 - 345 - 0912",
    Address: "223 Dr, Sunnyvale, CA, 94016",
  },
];

let headers = Object.keys(tableInfo[0]);

function task1() {
  let table1 = document.getElementById("task1");

  let row = table1.insertRow(-1);
  for (let i = 0; i < headers.length; i++) {
    let headerCell = document.createElement("th");
    headerCell.innerHTML = headers[i];
    row.appendChild(headerCell);
  }

  for (let i = 0; i < tableInfo.length; i++) {
    row = table1.insertRow(-1);
    for (let j = 0; j < headers.length; j++) {
      var cell = row.insertCell(-1);
      cell.innerHTML = tableInfo[i][headers[j]];
    }
  }
}

task1();

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

function task2() {
  let div2 = document.getElementById("task2");
  let ol2 = document.createElement("ol");
  let ul2 = document.createElement("ul");
  for (let i = 0; i < list.length; i++) {
    let li = document.createElement("li");
    li.textContent = list[i];
    ol2.appendChild(li);
    li = document.createElement("li");
    li.textContent = list[i];
    ul2.appendChild(li);
  }
  div2.appendChild(ol2);
  div2.appendChild(ul2);
}

task2();
