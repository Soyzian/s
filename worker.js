export default {
  async email(message, env, ctx) {
    // 1. Análisis básico del correo
    const spamKeywords = ["viagra", "casino", "ganador"];
    const subject = message.headers.get("subject") || "";
    const from = message.from;

    // 2. Lógica de filtrado
    if (spamKeywords.some(word => subject.toLowerCase().includes(word))) {
      message.reject("Correo rechazado por sospecha de spam.");
      return;
    }

    // 3. Reenvío a tu dirección real si pasa el filtro
    await message.forward("tu-email-real@ejemplo.com");
  }
};
