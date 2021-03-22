'use strict';

let hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

function getRandomNum(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const seattle =
{
  location: 'Seattle',
  minCustomerPerH: 23,
  maxCustomerPerH: 65,
  avrCockies: 6.3,
  numOfCustPerH: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,


  getCustNumber: function()
  {
    for (let i = 0; i < hours.length; i++)
    {
      let tempNum = getRandomNum(this.minCustomerPerH, this.maxCustomerPerH);
      this.numOfCustPerH.push(tempNum);
    }
  },

  calcAmountOfCockiesPerH: function()
  {
    for (let i =0; i < hours.length; i++)
    {
      const perHour = Math.floor(this.numOfCustPerH[i]*this.avrCockies);
      this.cookiesPerHour.push(perHour);
      this.totalCookiesPerDay = this.totalCookiesPerDay + perHour;
    }
  },

  render: function(){

    const container = document.getElementById('location');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const pEl = document.createElement('p');
    articleEl.appendChild(pEl);
    pEl.textContent = this.location;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total ${this.totalCookiesPerDay} cookies`;

    const hr = document.createElement('hr');
    articleEl.appendChild(hr);
  }
};

seattle.getCustNumber();
seattle.calcAmountOfCockiesPerH();
seattle.render();


const tokyo =
{
  location: 'Tokyo',
  minCustomerPerH: 3,
  maxCustomerPerH: 24,
  avrCockies: 1.2,
  numOfCustPerH: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,


  getCustNumber: function()
  {
    for (let i = 0; i < hours.length; i++)
    {
      let tempNum = getRandomNum(this.minCustomerPerH, this.maxCustomerPerH);
      this.numOfCustPerH.push(tempNum);
    }
  },

  calcAmountOfCockiesPerH: function()
  {
    for (let i =0; i < hours.length; i++)
    {
      const perHour = Math.floor(this.numOfCustPerH[i]*this.avrCockies);
      this.cookiesPerHour.push(perHour);
      this.totalCookiesPerDay = this.totalCookiesPerDay + perHour;
    }
  },

  render: function(){

    const container = document.getElementById('location');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const pEl = document.createElement('p');
    articleEl.appendChild(pEl);
    pEl.textContent = this.location;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total ${this.totalCookiesPerDay} cookies`;

    const hr = document.createElement('hr');
    articleEl.appendChild(hr);
  }
};

tokyo.getCustNumber();
tokyo.calcAmountOfCockiesPerH();
tokyo.render();


const dubai =
{
  location: 'Dubai',
  minCustomerPerH: 11,
  maxCustomerPerH: 38,
  avrCockies: 3.7,
  numOfCustPerH: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,


  getCustNumber: function()
  {
    for (let i = 0; i < hours.length; i++)
    {
      let tempNum = getRandomNum(this.minCustomerPerH, this.maxCustomerPerH);
      this.numOfCustPerH.push(tempNum);
    }
  },

  calcAmountOfCockiesPerH: function()
  {
    for (let i =0; i < hours.length; i++)
    {
      const perHour = Math.floor(this.numOfCustPerH[i]*this.avrCockies);
      this.cookiesPerHour.push(perHour);
      this.totalCookiesPerDay = this.totalCookiesPerDay + perHour;
    }
  },

  render: function(){

    const container = document.getElementById('location');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const pEl = document.createElement('p');
    articleEl.appendChild(pEl);
    pEl.textContent = this.location;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total ${this.totalCookiesPerDay} cookies`;

    const hr = document.createElement('hr');
    articleEl.appendChild(hr);
  }
};

dubai.getCustNumber();
dubai.calcAmountOfCockiesPerH();
dubai.render();



const paris =
{
  location: 'Paris',
  minCustomerPerH: 20,
  maxCustomerPerH: 38,
  avrCockies: 2.3,
  numOfCustPerH: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,


  getCustNumber: function()
  {
    for (let i = 0; i < hours.length; i++)
    {
      let tempNum = getRandomNum(this.minCustomerPerH, this.maxCustomerPerH);
      this.numOfCustPerH.push(tempNum);
    }
  },

  calcAmountOfCockiesPerH: function()
  {
    for (let i =0; i < hours.length; i++)
    {
      const perHour = Math.floor(this.numOfCustPerH[i]*this.avrCockies);
      this.cookiesPerHour.push(perHour);
      this.totalCookiesPerDay = this.totalCookiesPerDay + perHour;
    }
  },

  render: function(){

    const container = document.getElementById('location');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const pEl = document.createElement('p');
    articleEl.appendChild(pEl);
    pEl.textContent = this.location;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total ${this.totalCookiesPerDay} cookies`;

    const hr = document.createElement('hr');
    articleEl.appendChild(hr);
  }
};

paris.getCustNumber();
paris.calcAmountOfCockiesPerH();
paris.render();



const lima =
{
  location: 'Lima',
  minCustomerPerH: 2,
  maxCustomerPerH: 16,
  avrCockies: 4.6,
  numOfCustPerH: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,


  getCustNumber: function()
  {
    for (let i = 0; i < hours.length; i++)
    {
      let tempNum = getRandomNum(this.minCustomerPerH, this.maxCustomerPerH);
      this.numOfCustPerH.push(tempNum);
    }
  },

  calcAmountOfCockiesPerH: function()
  {
    for (let i =0; i < hours.length; i++)
    {
      const perHour = Math.floor(this.numOfCustPerH[i]*this.avrCockies);
      this.cookiesPerHour.push(perHour);
      this.totalCookiesPerDay = this.totalCookiesPerDay + perHour;
    }
  },

  render: function(){

    const container = document.getElementById('location');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const pEl = document.createElement('p');
    articleEl.appendChild(pEl);
    pEl.textContent = this.location;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total ${this.totalCookiesPerDay} cookies`;

    const hr = document.createElement('hr');
    articleEl.appendChild(hr);
  }
};

lima.getCustNumber();
lima.calcAmountOfCockiesPerH();
lima.render();
