const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/.env' });

const generateEmailTemplate = require('./emailTemplate');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Configuration du transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Vous pouvez utiliser d'autres services (Outlook, Yahoo, etc.)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Route pour l'envoi de l'email
app.post('/api/contact', async (req, res) => {
  try {
    const { nom, prenom, email, telephone, diplome, filiere } = req.body;

    // Validation basique côté serveur
    if (!nom || !prenom || !email || !telephone || !diplome || !filiere) {
      return res.status(400).json({ success: false, message: 'Tous les champs sont requis.' });
    }

    const htmlContent = generateEmailTemplate(req.body);

    const mailOptions = {
      from: `"Inscriptions ESOA EPRO" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `🎓 Nouvelle Inscription : ${prenom} ${nom} - ${filiere}`,
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    res.status(200).json({ success: true, message: 'Email envoyé avec succès.' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).json({ success: false, message: 'Erreur serveur lors de l\'envoi de l\'email.' });
  }
});

// Démarrage du serveur (local) ou export pour Vercel (production)
if (process.env.NODE_ENV !== 'production' && require.main === module) {
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
}

module.exports = app;
