'use strict'
{
  const h =  document.documentElement.scrollHeight;

  for (let i = 1; i < Math.floor(h / 100); i++) {
    const el_scale = `<div class="ruler__scale"><span>${i}00</span></div>`;
    const ruler = document.getElementById('ruler');
    ruler.insertAdjacentHTML('beforeend', el_scale);
  }
}
