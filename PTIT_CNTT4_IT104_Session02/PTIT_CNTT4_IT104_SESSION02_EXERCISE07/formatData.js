function formatDate(date){
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    if(d < 10){
        d = "0" + d;
    }
    if(m < 10){
        m = "0" + m;
    }
    console.log(`${d}/${m}/${y} (Phụ thuộc vào thời gian hiện tại trên máy)`);
}

export{ formatDate };





