const events = document.getElementById('events');
const input = document.querySelector('input');

const title = document.getElementById('title');
const start_count = document.getElementById('start_count');
const start_1 = document.querySelector('.start_1');
const quote = document.getElementById('quote');
const button = document.querySelector('button');
let check;

var countDown;

function to_js() {

    var option = events.options[events.selectedIndex];
    if (option.text == 'NEW YEAR') {
        input.value = '2023-01-01';
        title.innerHTML = 'NEW YEAR STARTS IN'
        start_1.style.display = 'none';
        quote.innerHTML = '“Let all the failures of your past year be your best guide in the New Year.”';
        check = setInterval(toTimer, 1000);

    }
    if (option.text == 'BIRTHDAY') {
        clearInterval(check);
        start_1.style.display = 'block';
        title.innerHTML = 'YOUR BIRTHDAY  COUNTDOWN';
        quote.innerHTML = '“Birthdays are a new start, a fresh beginning. Move forward with confidence and courage. All your days be amazing!”';


    }
    if (option.text == 'ANNIVERSARY') {
        clearInterval(check);
        start_1.style.display = 'block';
        title.innerHTML = 'YOUR ANNIVERSARY  COUNTDOWN';
        quote.innerHTML = 'Happy Anniversary! May God continue to bless you and keep you happy.'
    }

}


button.addEventListener('click', BirthDayAndAnniversary
)

events.addEventListener('change', () => {
    to_js();
});


function toTimer() {
    countDown = new Date(input.value).getTime() - new Date().getTime();

    const days = Math.floor(countDown / (1000 * 3600 * 24));
    countDown = countDown % (1000 * 3600 * 24);
    const hours = Math.floor(countDown / (1000 * 3600));
    countDown = countDown % (1000 * 3600);
    const minutes = Math.floor(countDown / (1000 * 60));
    countDown = countDown % (1000 * 60);
    const seconds = Math.floor(countDown / (1000));


    let temp = [days, hours, minutes, seconds].map((e) => {
        if (e <= 9) {
            return '0' + e;
        }
        return e;
    })

    document.querySelector('#days').innerHTML = temp[0];
    document.querySelector('#hours').innerHTML = temp[1];
    document.querySelector('#minutes').innerHTML = temp[2];
    document.querySelector('#seconds').innerHTML = temp[3];

}


function BirthDayAndAnniversary() {
    check = setInterval(toTimer, 1000)
}