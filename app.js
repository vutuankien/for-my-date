function submitForm() {
    const food = document.querySelector('input[name="food"]:checked');
    const play = document.querySelector('input[name="play"]:checked');
    const select = document.querySelector('input[name="select"]:checked');
    if (food && play && select) {
        
        localStorage.setItem('food', food.value);
        localStorage.setItem('play', play.value);
        localStorage.setItem('select', select.value);
        

        // Alert or message indicating successful submission
        swal("Đã nhận", "Cam xa mi ta vì đã chọn ạ", "success");
    } else {
        // Alert or message indicating that not all questions were answered
        swal("Đuma!", "Chưa chọn mà out đi đâu đóoo", "error");
    }

}

function submitComment() {
    const comment = document.getElementById('comment').value;
    swal("cảm ơn đã đánh giá nhóoo","sẽ rút kinh nghiệm lần sau","success")
    localStorage.setItem('comment', comment);
}