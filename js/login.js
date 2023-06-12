
document.getElementById("btn1").addEventListener('click', () => {

    const userId = document.getElementById("userId"); // 유저 input 받아오기
    const pwd = document.getElementById("pwd"); // 비번 input 받아오기 
    const key = localStorage.getItem(userId.value); // userId 의 value값

    console.log(key); // ->존재하지 않으면 NULL값이 된다.
    if (!key) { // 
        alert("존재하지 않는 아이디입니다.");
        event.preventDefault(); //이벤트의 기본 동작을 취소하는 역할
        return;
    }
    console.log(key);
    console.log(pwd.value);
    if (key !== pwd.value) { /// ->key값이 입력한 value값과 다를떄,,
        alert("일치하지 않는 비밀번호입니다.");
        event.preventDefault();
        return;
    }
    if (key !== null && key == pwd.value) {
        alert("로그인 완료");
        event.preventDefault();
    }
})

