window.onload=()=>{
    box1 = document.getElementsByClassName('box-1')[0];
    box2 = document.getElementsByClassName('box-2')[0];
    box3 = document.getElementsByClassName('box-3')[0];
    box4 = document.getElementsByClassName('box-4')[0];
}

const handleChange = (e) => {
    if(e== 1){
        box1.classList.add('d-none')
        box2.classList.remove('d-none')
    }else if (e== 2){
        box2.classList.add('d-none');
        box3.classList.remove('d-none');
    }else if(e== 3){
        box1.classList.add('d-none')
        box3.classList.add('d-none');
        box4.classList.remove('d-none');
        box4.classList.toggleClass('d-flex');
    }
}

