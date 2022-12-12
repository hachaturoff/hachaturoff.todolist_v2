export function dateTime() {
    let dateTask = document.querySelectorAll('.date-task')
    let date = document.querySelector('#date-header')

    function formatDate(value) {
        if (value < 10) {
            value = '0' + value}
        return value;
    }

    let currentDatetime = new Date();
    let day = formatDate(currentDatetime.getDate());
    let month = formatDate(currentDatetime.getMonth()+1);
    let year = currentDatetime.getFullYear();

    date.innerHTML = day + "." + month +"."+ year;
    dateTask.forEach( item => {
        item.innerHTML = day + "." + month +"."+ year;
    })

}