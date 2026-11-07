const LEADS_ENDPOINT = import.meta.env.VITE_LEADS_ENDPOINT || '/system/api/v1/public/prospectos'
const CONTACT_EMAIL = 'alexis@amf-technologies.com'

function openMail(subject, fields) {
  const body = Object.values(fields).filter(Boolean).join('\n')
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return 'mail'
}

// Los contactos llegan al portal de AMF (/system). Si no responde, se abre el correo del visitante con los datos ya escritos: el contacto no se pierde.
export async function sendLead(origen, subject, fields) {
  try {
    const response = await fetch(LEADS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ origen, ...fields }),
    })
    if (response.ok) return 'sent'
  } catch (err) {
    console.error(err)
  }
  return openMail(subject, fields)
}
