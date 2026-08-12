const payload = {
  nom: "el yaridi",
  prenom: "Soufiane",
  email: "soufiane@gmail.com",
  telephone: "788995223",
  diplome: "Baccalauréat",
  filiere: "Orthoptie"
};

fetch("http://localhost:5000/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(console.log)
.catch(console.error);
