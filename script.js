window.onload=()=>{
    step = 1;
    box1 = document.getElementsByClassName('box-1')[0];
    box2 = document.getElementsByClassName('box-2')[0];
    console.log(box1,box2)
}

const handleChange = () => {
    if(step ===1){
        box1.classList.add('d-none')
        box2.classList.remove('d-none')
    }
}