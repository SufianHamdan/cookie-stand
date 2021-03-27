
let workingHours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

let allObjects = [];

function getRandomNum(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let totOftot = 0;
function Locations(locName, minCust, maxCust, avrCook)
{
  this.locName = locName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avrCook = avrCook;
  this.custPerHourTemp = [];
  this.finalCustPerHour = [];
  this.totalCookPerday = 0;
  this.totalCookPerHour = 0;
  allObjects.push(this);
}

//console.log(allObjects);
Locations.prototype.getRandomCustNumb = function()
{
  for (let i = 0; i < workingHours.length; i++)
  {
    let tNumb = getRandomNum(this.minCust, this.maxCust);
    this.custPerHourTemp.push(tNumb);
  }
};


Locations.prototype.getFinalCustNumb = function()
{
  for (let i = 0; i < this.custPerHourTemp.length; i++)
  {
    this.finalCustPerHour[i] = Math.floor(this.custPerHourTemp[i] * this.avrCook);
  }

};

function createTable()
{
  const container = document.getElementById('location');
  const table = document.createElement('table');
  table.setAttribute('id', 'myTable');
  container.appendChild(table);
  const tableRow1 = document.createElement('tr');
  table.appendChild(tableRow1);
  const tableHeader1 = document.createElement('th');
  tableRow1.appendChild(tableHeader1);
  tableHeader1.textContent = '';

  for (let i = 0; i < workingHours.length; i++)
  {
    const tableHeader = document.createElement('th');
    tableRow1.appendChild(tableHeader);
    tableHeader.textContent = workingHours[i];
  }

  const lastheaderRow1 = document.createElement('th');
  tableRow1.appendChild(lastheaderRow1);
  lastheaderRow1.textContent = 'Daily Location Total';
  for (let e = 0; e < allObjects.length; e++)
  {
    const tableRow2 = document.createElement('tr');
    table.appendChild(tableRow2);
    const tableHeader2 = document.createElement('th');
    tableRow2.appendChild(tableHeader2);
    tableHeader2.textContent = allObjects[e].locName;
    let dailyCookPerLoc = 0;
    for (let i = 0; i < workingHours.length; i++)
    {
      const tableData = document.createElement('td');
      tableRow2.appendChild(tableData);
      tableData.textContent = allObjects[e].finalCustPerHour[i];
      this.totalCookPerday = this.totalCookPerday + allObjects[e].finalCustPerHour[i];
      dailyCookPerLoc = dailyCookPerLoc + allObjects[e].finalCustPerHour[i];
    }

    const tabledataLast = document.createElement('td');
    tableRow2.appendChild(tabledataLast);
    tabledataLast.textContent = dailyCookPerLoc;
  }

  const lastRow = document.createElement('tr');
  table.appendChild(lastRow);
  const lasthead = document.createElement('th');
  lastRow.appendChild(lasthead);
  lasthead.textContent = 'Total';
  for (let i = 0; i < workingHours.length; i++)
  {
    const lastData = document.createElement('td');
    lastRow.appendChild(lastData);

    let totalOfhour = 0;
    for (let q = 0; q < allObjects.length; q++)
    {
      totalOfhour = totalOfhour + allObjects[q].finalCustPerHour[i];
    }
    lastData.textContent = totalOfhour;
    totOftot = totOftot + totalOfhour;
  }
  const totalOftot = document.createElement('td');
  lastRow.appendChild(totalOftot);
  totalOftot.textContent = totOftot;

}



let amman = new Locations('Amman', 20, 50, 3.2);
amman.getRandomCustNumb();
amman.getFinalCustNumb();
let ss = new Locations('ss', 50, 90, 3.2);
ss.getRandomCustNumb();
ss.getFinalCustNumb();
createTable();
// console.log(this.custPerHourTemp);


let myForm = document.getElementById('form');
myForm.addEventListener('submit',addNewLoc);

function addNewLoc(event)
{
  let locationName = event.target.location.value;
  let miniCust = event.target.minCustomerPerH.value;
  let maxiCust = event.target.maxCustomerPerH.value;
  let avrageCoo = event.target.avrCockies.value;

  let adding = new Locations(locationName, miniCust, maxiCust, avrageCoo);
  adding.getRandomCustNumb();
  adding.getFinalCustNumb();
  let g = document.getElementById('myTable');
  g.remove();
  createTable();

}
