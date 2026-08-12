const generateEmailTemplate = (data) => {
  const { nom, prenom, email, telephone, diplome, filiere } = data;
  
  // Format phone number for WhatsApp Link (remove leading zero, add 212)
  let waNumber = telephone.replace(/\D/g, '');
  if (waNumber.startsWith('0')) {
    waNumber = '212' + waNumber.substring(1);
  } else if (!waNumber.startsWith('212')) {
    waNumber = '212' + waNumber;
  }

  const waLink = `https://wa.me/${waNumber}`;
  const mailtoLink = `mailto:${email}`;

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouvelle Inscription</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #F8FAFC;
      margin: 0;
      padding: 40px 20px;
      color: #334155;
      -webkit-font-smoothing: antialiased;
    }
    .container {
      max-width: 520px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #E2E8F0;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    }
    .header {
      text-align: center;
      padding: 40px 30px 30px;
      border-bottom: 1px solid #F1F5F9;
    }
    .brand {
      font-size: 24px;
      font-weight: 800;
      color: #0B1E40;
      letter-spacing: -0.5px;
      margin: 0;
    }
    .brand span {
      color: #EF6C00;
    }
    .title {
      font-size: 16px;
      font-weight: 500;
      color: #64748B;
      margin: 12px 0 0 0;
    }
    .content {
      padding: 40px;
    }
    .info-group {
      margin-bottom: 24px;
    }
    .info-group:last-child {
      margin-bottom: 0;
    }
    .label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #94A3B8;
      font-weight: 600;
      margin-bottom: 8px;
      display: block;
    }
    .value {
      font-size: 15px;
      color: #0F172A;
      font-weight: 500;
      padding: 14px 16px;
      background-color: #F8FAFC;
      border-radius: 8px;
      border: 1px solid #F1F5F9;
      margin: 0;
    }
    .highlight {
      color: #EF6C00;
      font-weight: 600;
      background-color: #FFF7ED;
      border-color: #FFEDD5;
    }
    .actions {
      padding: 0 40px 40px;
    }
    .btn {
      display: block;
      width: 100%;
      text-align: center;
      padding: 14px 0;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      font-size: 14px;
      margin-bottom: 12px;
      box-sizing: border-box;
    }
    .btn:last-child {
      margin-bottom: 0;
    }
    .btn-whatsapp {
      background-color: #20B25E;
      color: #ffffff !important;
      border: 1px solid #20B25E;
    }
    .btn-whatsapp:hover {
      background-color: #1a944e;
    }
    .btn-secondary {
      background-color: #ffffff;
      color: #0F172A !important;
      border: 1px solid #E2E8F0;
    }
    .footer {
      text-align: center;
      padding: 24px;
      font-size: 12px;
      color: #94A3B8;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="brand">ESOA <span>EPRO</span></h1>
      <h2 class="title">Nouvelle Candidature</h2>
    </div>
    
    <div class="content">
      <div class="info-group">
        <span class="label">Candidat</span>
        <div class="value">${prenom} ${nom}</div>
      </div>
      
      <div class="info-group">
        <span class="label">Filière Souhaitée</span>
        <div class="value highlight">${filiere}</div>
      </div>
      
      <div class="info-group">
        <span class="label">Dernier Diplôme</span>
        <div class="value">${diplome}</div>
      </div>
      
      <div class="info-group">
        <span class="label">Numéro de Téléphone</span>
        <div class="value">
          <a href="${waLink}" style="color: #0F172A; text-decoration: none; font-weight: 600;">+212 ${telephone}</a>
        </div>
      </div>
      
      <div class="info-group">
        <span class="label">Adresse Email</span>
        <div class="value">${email}</div>
      </div>
    </div>
    
    <div class="actions">
      <a href="${waLink}" class="btn btn-whatsapp" style="color: #ffffff; text-decoration: none;">Contacter sur WhatsApp</a>
      <a href="${mailtoLink}" class="btn btn-secondary" style="color: #0F172A; text-decoration: none;">Répondre par Email</a>
    </div>
  </div>
  
  <div class="footer">
    Cet email est généré automatiquement par votre système d'inscription.
  </div>
</body>
</html>
  `;
};

module.exports = generateEmailTemplate;
