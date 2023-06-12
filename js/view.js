window.onload = () => {
    loadGMember();
  };


const loadGMember = () => {
    const tbody = document.querySelector("table#tbl-member tbody");
    const Members = JSON.parse(localStorage.getItem('Member'));

    // guestbook -> tr -> tbody
    tbody.innerHTML = Members.reduce((userId, email, tel1, tel2, tel3 , index) => {
      const tr = `
      <tr>
        <td>${index + 1}</td>
        <td>${guestName}</td>
        <td>${tel1}-${tel2}-${tel3}</td>
        <td>${email}</td>
      </tr>
      `;
      return html + tr;
    }, "");

  };