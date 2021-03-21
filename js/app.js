'use strict';

let hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];


const Seattle =
{
  location: 'Seattle',
  minHcustomer: 23,
  maxHcustomer: 65,
  avrCockies: 6.3,

  getNumber: function(minc, maxc)
  {
    return Math.floor(Math.random() * (maxc - minc + 1) + minc);
  },

  getAvrCockies: function()
  {
    return (this.getNumber(this.minHcustomer,this.maxHcustomer)) * (Math.floor(this.avrCockies));
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

    let totalCookies = 0;
    for (let i = 0; i < hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      let avgCookies = this.getAvrCockies();
      liEl.textContent = hours[i]+ ': ' + avgCookies +' Cockies';
      totalCookies = totalCookies + avgCookies;
    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total: ' + Number(totalCookies) + ' Cockies';

    const hr = document.createElement('hr');
    articleEl.appendChild(hr);
  }
};

Seattle.render();



const Tokyo =
{
  location: 'Tokyo',
  minHcustomer: 3,
  maxHcustomer: 24,
  avrCockies: 1.2,

  getNumber: function(minc, maxc)
  {
    return Math.floor(Math.random() * (maxc - minc + 1) + minc);
  },

  getAvrCockies: function()
  {
    return (this.getNumber(this.minHcustomer,this.maxHcustomer)) * (Math.floor(this.avrCockies));
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

    let totalCookies = 0;
    for (let i = 0; i < hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      let avgCookies = this.getAvrCockies();
      liEl.textContent = hours[i]+ ': ' + avgCookies +' Cockies';
      totalCookies = totalCookies + avgCookies;
    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total: ' + Number(totalCookies) + ' Cockies';
    const hr = document.createElement('hr');
    articleEl.appendChild(hr);
  }
};

Tokyo.render();



const Dubai =
{
  location: 'Dubai',
  minHcustomer: 11,
  maxHcustomer: 38,
  avrCockies: 3.7,

  getNumber: function(minc, maxc)
  {
    return Math.floor(Math.random() * (maxc - minc + 1) + minc);
  },

  getAvrCockies: function()
  {
    return (this.getNumber(this.minHcustomer,this.maxHcustomer)) * (Math.floor(this.avrCockies));
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

    let totalCookies = 0;
    for (let i = 0; i < hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      let avgCookies = this.getAvrCockies();
      liEl.textContent = hours[i]+ ': ' + avgCookies +' Cockies';
      totalCookies = totalCookies + avgCookies;
    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total: ' + Number(totalCookies) + ' Cockies';
    const hr = document.createElement('hr');
    articleEl.appendChild(hr);
  }
};

Dubai.render();

const Paris =
{
  location: 'Paris',
  minHcustomer: 20,
  maxHcustomer: 38,
  avrCockies: 2.3,

  getNumber: function(minc, maxc)
  {
    return Math.floor(Math.random() * (maxc - minc + 1) + minc);
  },

  getAvrCockies: function()
  {
    return (this.getNumber(this.minHcustomer,this.maxHcustomer)) * (Math.floor(this.avrCockies));
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

    let totalCookies = 0;
    for (let i = 0; i < hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      let avgCookies = this.getAvrCockies();
      liEl.textContent = hours[i]+ ': ' + avgCookies +' Cockies';
      totalCookies = totalCookies + avgCookies;
    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total: ' + Number(totalCookies) + ' Cockies';
    const hr = document.createElement('hr');
    articleEl.appendChild(hr);
  }
};

Paris.render();

const Lima =
{
  location: 'Lima',
  minHcustomer: 2,
  maxHcustomer: 16,
  avrCockies:	4.6,

  getNumber: function(minc, maxc)
  {
    return Math.floor(Math.random() * (maxc - minc + 1) + minc);
  },

  getAvrCockies: function()
  {
    return (this.getNumber(this.minHcustomer,this.maxHcustomer)) * (Math.floor(this.avrCockies));
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

    let totalCookies = 0;
    for (let i = 0; i < hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      let avgCookies = this.getAvrCockies();
      liEl.textContent = hours[i]+ ': ' + avgCookies +' Cockies';
      totalCookies = totalCookies + avgCookies;
    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total: ' + Number(totalCookies) + ' Cockies';
    const hr = document.createElement('hr');
    articleEl.appendChild(hr);
  }
};

Lima.render();
