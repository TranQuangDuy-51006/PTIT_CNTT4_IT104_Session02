function displayUserInfo(user) {
  let title = "unknown";
  let company = "unknown";
  let email = "unknown";
  let phone = "unknown";

  if (user.job && user.job !== "NULL") {
    title = user.contact.title || "unknown";
    company = user.contact.company || "unknown";
  }

  if (user.contact && user.contact !== "NULL") {
    email = user.contact.email || "unknown";
    phone = user.contact.phone || "unknown";
  }

  console.log(`
    ${user.name} is ${user.age} years old,
    lives in ${user.location.city}, ${user.location.country},
    works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.
    `);
}

displayUserInfo({
  name: "John",
  age: 25,
  location: { city: "Hanoi", country: "Vietnam" },
});

displayUserInfo({
  name: "John",
  age: 25,
  location: { city: "Hanoi", country: "Vietnam" },
  contact: { email: "john@example.com", phone: "0123456789" },
  job: { title: "Developer", company: "Tech Corp" },
});
