phoneBooks = [];
function addContact(name, phoneNumber, email) {
  let obj = {
    name: name,
    phoneNumber: phoneNumber,
    email: email,
  };
  phoneBooks.push(obj);
}
function displayContact(arr) {
  arr.forEach((element) => {
    console.log(`
        Tên: ${element.name}
        Số điện thoại: ${element.phoneNumber}
        Email: ${element.email}   
        `);
  });
}

addContact("Duy", "0999913131", "adwoa242@gmail.com");
addContact("DuyA", "014143131", "papwa242@gmail.com");
addContact("DuyB", "0676713131", "bbmmma242@gmail.com");

displayContact(phoneBooks);
