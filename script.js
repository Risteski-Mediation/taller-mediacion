document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('registrationForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = `${data.get('nombre')} ${data.get('apellido')}`.trim();

  // Prototype behavior. Connect this form to Formspree, Brevo, Mailchimp,
  // a Google Form or your own backend before publishing.
  status.textContent = `Gracias, ${name}. El formulario está preparado; solo falta conectarlo al sistema de inscripción.`;
  form.reset();
});
