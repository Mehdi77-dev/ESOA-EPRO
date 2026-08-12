const generateEmailTemplate = require('./emailTemplate');
try {
  const payload = {"nom":"test","prenom":"test","filiere":"Optique","diplome":"Bac","email":"test@test.com","telephone":"600000000"};
  console.log("Testing generation...");
  const html = generateEmailTemplate(payload);
  console.log("Generation success! HTML length:", html.length);
} catch (e) {
  console.error("Generation failed:", e);
}
