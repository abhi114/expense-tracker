const formatDate = (date) =>{
    const d = new Date(date);
    let month = `${d.getMonth() + 1}`; // cause months starts with 0
    let day = `${d.getDate()}`;
    const year = `${d.getFullYear()}`

    if(month.length < 2){
        month = `0${month}`;
    }
    if(day.length < 2){
        day = `0${day}`;
    }
    return [year,month,day].join('-');
}
export default formatDate