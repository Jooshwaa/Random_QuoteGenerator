Main


// This is to change the background images

const imgurl = [
  '/images/1ebd8aa0014b23677b5ba58de656b883.jpg',
  '/images/3a1a955c532483282476fcec5a508afa.jpg',
  '/images/27bde6ed0ff5392cc0cd682cceb62eea.jpg',
  '/images/75a4ccc9b163f2cbddc214785dc42252.jpg',
  '/images/Carrinho de compras em um laptop Conceito de compras online IA generativa _ Foto Premium.jpeg',
  '/images/download.jpeg',
  '/images/E-commerce en France _ quel bilan pour la vente en ligne au 1er trimestre 2023 _.jpeg',
  '/images/Learning from South Korea’s mobile-retailing boom.jpeg',

];

imgEl.src = imgurl[0]

let i = 1;
setInterval(() => {
  const imgEl = document.getElementById("imgEl");
  imgEl.src = imgurl[i];

  imgEl.classList.remove('fadehout')
  console.log(imgurl[i]);
  i = (i + 1) % imgurl.length;
}, 5000);


// this is to set the weather forecast 

const weatherData = {
  Lagos: {
    name: 'Lagos',
    desc: 'suny',
    temp: 35
  },
  Ilorin: {
    name: 'Ilorin',
    desc: 'suny',
    temp: 29
  },
  Abuja: {
    name: 'Abuja',
    desc: 'suny',
    temp: 28
  }
}

const city = document.getElementById('city');
const descript = document.getElementById('descript');
const tempt = document.getElementById('tempt');
const weatheCtn = document.getElementById('Wctn')
city.textContent = weatherData.Lagos.name;
descript.textContent = weatherData.Lagos.desc;
tempt.textContent = weatherData.Lagos.temp;



function updateWeatherBaseLocation() {
  if (weatherData) {
    const objKeys = Object.keys(weatherData);
    let i = 1;
    setInterval(() => {
      const currentCity = weatherData[objKeys[i]];
      city.textContent = currentCity.name;
      descript.textContent = currentCity.desc;
      tempt.textContent = currentCity.temp + '°';

      i = (i + 1) % objKeys.length;
    }, 1000 * 60 * 60);
  } else {
    weatherCtn.textContent = 'unknown content';
  }

}

updateWeatherBaseLocation();

const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thur',
    'Fri',
    'Sunday'
    ];


const time = document.getElementById('disTime');
const disDay = document.getElementById('disDay');
setInterval(() => {
  const date = new Date();
  disDay.textContent = days[date.getDay()];
  time.textContent = date.toLocaleTimeString();
}, 1000);


const headerGreetting = document.querySelector('.hdr-grt');
if (headerGreetting) {
  let greeting = 'Welcome , we have a special quote for you today!'
  let i = 0;

  const displayGreeting = setInterval(() => {
    if (i < greeting.length) {
      
headerGreetting.textContent += greeting[i];
      i++;
    } else {
      clearInterval(displayGreeting);
    }
  }, 100);
}