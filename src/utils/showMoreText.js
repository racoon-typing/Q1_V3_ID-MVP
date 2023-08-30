const formSubmit = document.getElementById('form');
const textAndForm = document.querySelector('.text-and-form');
const textHidden = document.getElementById('textHidden');

const userName = document.getElementById('name');
const phone = document.getElementById('phone');

const custom2 = document.getElementById('custom2');
const pub_id = document.getElementById('pub_id');
const lp_url = document.getElementById('lp_url');
const pixel = document.getElementById('lp_url');
const mediabuyer = document.getElementById('mediabuyer');

const fetchUrl =
  'https://tracking.affscalecpa.com/api/v2/affiliate/leads?api-key=8f0e5599984bbd97bb39506dd877afc32347e9ad';

formSubmit.addEventListener('submit', function (e) {
  e.preventDefault();

  const jsonData = {
    stream_code: 'zaiwq', // поменять
    goal_id: '320',
    firstname: userName.value,
    phone: phone.value,
    sub_id1: lp_url.value,
    sub_id2: pub_id.value,
    sub_id3: mediabuyer.value,
    aff_click_id: custom2.value,
  };

  console.log(jsonData);

  fetch(fetchUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(jsonData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log('успех');
      // Здесь можно добавить дополнительную логику в случае успешного ответа

      textHidden.classList.remove('hidden')
      textAndForm.classList.add('hidden')

    })
    .catch((error) => {
      console.error('Error:', error);
      console.log('провал');
      // Здесь можно добавить логику обработки ошибки
      textHidden.classList.remove('hidden')
      textAndForm.classList.add('hidden')
    });
});

const headers = {
  'Content-Type': 'application/json',
};
