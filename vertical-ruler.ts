'use strict';
{
    const h:number = document.documentElement.scrollHeight;
    for (let i:number = 1; i < Math.floor(h / 100); i++) {
        const el_scale:string = "<div class=\"ruler__scale\"><span>" + i + "00</span></div>";
        const ruler:any = document.getElementById('ruler');
        ruler.insertAdjacentHTML('beforeend', el_scale);
    }
}
