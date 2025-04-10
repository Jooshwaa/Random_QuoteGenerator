Form


// THE FOLLOWING IS TO TOGGLE THE FORM ELEMENT TO DISPLAY FROM HOME PAGE

const toggleFrmBtn = document.getElementById('modal');
//console.log(toggleFrmBtn);


const formDisplay = () => {
  const formEl = document.getElementById('modal-form');
  const closeBtn = document.querySelector('.btn-close');
  toggleFrmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!formEl) {
      console.log('error')
    } else {
      formEl.classList.toggle('hidden');
    }
  });

  console.log(closeBtn)

  closeBtn.addEventListener('click', () => {
    if (!closeBtn) {
      alert('undefined')
    } else {
      formEl.classList.toggle('hidden')
    }
  })
}
formDisplay();


const emailInput = document.querySelector('[data-email]');
const password = document.querySelector('[data-password]');
const imagesFile = document.querySelector('[data-images]');
const formbtn = document.querySelector('[data-submit]');
// this is to set the img url after verification!
const profileImg = document.getElementById('pro-img');


function getData() {
  let data = {
    email: [],
    password: [],
    img: []
  }

  formbtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (formbtn.click) {
      console.log('yes')
    }



    if (emailInput && password) {
      const emailData = emailInput.value;
      const passord = password.value;
      const imge = imagesFile.value;
      data.email.push(emailData);
      data.password.push(passord);
      data.img.push(imge);

      // this is to save the derived data from the input to local storage 
      localStorage.setItem('data', JSON.stringify(data));
      console.log(data);

      emailInput.value = '';
      password.value = '';
      imge.value = '';
    } else {
      console.log('error in logic');
    }
  })
  console.log(data);

  window.addEventListener('load', () => {
    const localStore = JSON.parse(localStorage.getItem('data'));
    console.log(localStore);

  });
}

getData()