
        // 비밀번호/비밀번호 체크 일치여부 검사
        document.querySelector("#pwdCheck").onblur = isEqualPwd;
        //-----------------------------
        document.memberFrm.onsubmit = function () {
            const userId = document.getElementById("userId");
            const pwd = document.getElementById("pwd");
            const pwdCheck = document.getElementById("pwdCheck");
            const userName = document.getElementById("userName");
            const email = document.getElementById("email");
            const tel1 = document.getElementById("tel1");
            const tel2 = document.getElementById("tel2");
            const tel3 = document.getElementById("tel3");
            //---------------------------------

            //1.아이디검사
            //첫글자는 반드시 영소문자로 이루어지고,
            //아이디의 길이는 4~12글자사이
            //숫자가 하나이상 포함되어야함.


            const regExp1 = /^[a-z][a-z0-9]{3,11}$/;
            const regExp2 = /[0-9]/;
            // true -> !true -> 
            console.log(regExp1.test(userId.value));
            console.log(userId.value);

            if (!regExpTest(regExp1, userId, "아이디는 영소문자로 시작하고, 4~12글자여야합니다."))
                return false;
            if (!regExpTest(regExp2, userId, "아이디는 숫자를 하나이상 포함하세요."))
                return false;

            //-----------------------------


            //2.비밀번호 확인 검사
            //숫자/문자/특수문자/ 포함 형태의 8~15자리 이내의 암호 정규식
            //전체길이검사 /^.{8,15}$/
            //숫자하나 반드시 포함 /\d/
            //영문자 반드시 포함 /[a-zA-Z]/
            //특수문자 반드시 포함  /[\\*!&]/

            const regExpArr = [/^.{8,15}$/, /[0-9]/, /[a-zA-Z]/, /[\\@*!&]/];


            for (let i = 0; i < regExpArr.length; i++) {
                if (
                    !regExpTest(
                        regExpArr[i],
                        pwd,
                        "비밀번호는 8~15자리 숫자/문자/특수문자를 포함해야합니다."


                    )
                ) {
                    return false;
                }
            }
            //비밀번호일치여부
            if (!isEqualPwd()) {
                return false;
            }

            //-----------------------------

            //3.이름검사
            //한글2글자 이상만 허용.
            const regExp3 = /^[가-힣]{2,}$/;
            if (!regExpTest(regExp3, userName, "한글2글자이상 입력하세요."))
                return false;

            //-----------------------------

            //5.이메일 검사
            // 4글자 이상(\w = [a-zA-Z0-9_], [\w-\.]) @가 나오고
            // 1글자 이상(주소). 글자 가 1~3번 반복됨
            if (
                !regExpTest(
                    /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/,
                    email,
                    "이메일 형식에 어긋납니다."
                )
            )


                return false;

            //-----------------------------

            //6. 전화번호 검사
            // 전화번호 앞자리는 두자리이상, 두번째 자리는 3~4자리 숫자, 세번째 자리는 4자리 숫자
            if (!regExpTest(/^0\d{1,2}$/, tel1, "번호 2자리 이상 입력"))
                return false;
            if (!regExpTest(/^[0-9]{3,4}$/, tel2, "번호 3자리 이상 입력"))
                return false;
            if (!regExpTest(/^[0-9]{4}$/, tel3, "4자리 번호 입력"))
                return false;

            localStorage.setItem(userId.value, pwd.value);

            return true; // 생략가능

        };

        //-----------------------------

        function isEqualPwd() {
            if (pwd.value === pwdCheck.value) {
                return true;
            } else {
                alert("비밀번호가 일치하지 않습니다.");
                pwd.select();
                return false;
            }
        }


        function regExpTest(regExp, el, msg) {
            if (regExp.test(el.value)) {
                return true;
            }
            console.log('false');
            alert(msg);
            el.value = "";
            el.focus();
            return false;
        }

        //-----------------------------


    const saveMember = () => {
 
    const frm = document.memberFrm;
    const userName = frm.userName;
    const email = frm.email;
    const tel1 = frm.tel1;
    const tel2 = frm.tel2;
    const tel3 = frm.tel3;

    const guestMember = new Member(userName.value, email.value, tel1.value, tel2.value, tel3.value);
    console.log(guestMember);

    const guestMembers = JSON.parse(localStorage.getItem('guestMembers')) || [];
    guestMembers.push(guestMembers);
    const jsonStr = JSON.stringify(guestMembers);
    localStorage.setItem("guestMembers", jsonStr);

    loadMember();
    
    // 초기화
    userName.value ='';
    email.value ='';
    tel1.value ='';
    tel2.value ='';
    tel3.value ='';

    
  };

//   function MemberInfo(userId, pwd, userName, email, tel1, tel2, tel3) {

//                 this.userId = userId;
//                 this.pwd = pwd;
//                 this.userName = userName;
//                 this.email = email;
//                 this.tel1 = tel1;
//                 this.tel2 = tel2;
//                 this.tel3 = tel3;
    
//   }

    class Member {
        constructor(userId, pwd, userName, email, tel1, tel2, tel3) {
                this.userId = userId;
                this.pwd = pwd;
                this.userName = userName;
                this.email = email;
                this.tel1 = tel1;
                this.tel2 = tel2;
                this.tel3 = tel3;
         }
            toString() {
                return `Guestbook(userId  ${this.userId}, pwd = ${this.pwd}, userName = ${this.userName},email = ${this.email} tel = ${this.tel1}-${this.tel2}-${this.tel3})`;
            }
        }




//-----------------------------