
export const getDate = strDate =>{
    let splitDate = strDate.split('T');
    let date = splitDate[0];

    let dd = date.split('-')[2];
    let mm = date.split('-')[1];
    let yyyy = date.split('-')[0];


    date = `${dd}.${mm}.${yyyy}`;
    
    return date.toString();
}


