function newAdvice(){
    const id_class = document.querySelector(".advice-number")
    const advice_class = document.querySelector(".advice")
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error recuperando los datos');
            }
            return response.json();
        })
        .then(data => {
            const slip = data.slip;
            const id = slip.id;
            const advice = slip.advice;
            
            console.log(id, advice)

            id_class.innerHTML = "Advice #" + id;
            advice_class.innerHTML = '"' + advice + '"';
        })
        .catch(error => {
            console.error(error);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    newAdvice();
})