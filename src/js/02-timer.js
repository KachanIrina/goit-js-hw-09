import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";
const refs = {
input: document.querySelector('#datetime-picker'),
button: document.querySelector('button[data-start]'),
startDays: document.querySelector('span[data-days]'),
startHours: document.querySelector('span[data-hours]'),
startMinutes: document.querySelector('span[data-minutes]'),
startSeconds: document.querySelector('span[data-seconds]'),
};
function addLeadingZero(value) {
  return String(value).padStart(2, '0')
   };
  
refs.button.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] - new Date() <= 0) {
        alert("Please choose a date in the future");
      } 
      else {
        refs.button.disabled = false;
        
        refs.button.addEventListener('click', () =>
    setInterval(() => {
      const currentTime = new Date(); 
      const targetData = selectedDates[0];
      const ms = targetData - currentTime;
      
      convertMs(ms);
      
      function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        const days = Math.floor(ms / day);
      
        const hours = Math.floor((ms % day) / hour);
       
        const minutes = Math.floor(((ms % day) % hour) / minute);
       
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        //return { days, hours, minutes, seconds };
        addLeadingZero()
      refs.startDays.textContent = addLeadingZero(`${days}`);
      refs.startHours.textContent = addLeadingZero(`${hours}`);
      refs.startMinutes.textContent = addLeadingZero(`${minutes}`);
      refs.startSeconds.textContent = addLeadingZero(`${seconds}`);
      };      
      
    }, 1000));
     
      };
      
    },
  };

  flatpickr(refs.input, options);

  