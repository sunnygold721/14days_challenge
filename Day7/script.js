   setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const minute =time.getMinutes();
    const sec = time.getSeconds();

       const AMPM = hours >= 12 ? 'PM' : 'AM';
       const hour =hours % 12 || 12;

       const h =hour.toString().padStart(2, "0");
       const m =minute.toString().padStart(2, "0")
       const s =sec.toString().padStart(2, "0");

       const r = Math.round(Math.random() * 255);
       const g = Math.round(Math.random() * 255);
       const b = Math.round(Math.random() * 255);

      let timeElement = document.querySelector('.time')
       
       timeElement.innerHTML = `${h} : ${m} : ${s} ${AMPM}`;
       timeElement.style.color = `rgb(${r},${g},${b})`
       timeElement.style.border = `solid 4px rgb(${g},${b},${r})`

    }, 1000); 