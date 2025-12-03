"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const TELEGRAM_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN!;
  const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!;
  const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY!;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const body = {
  access_key: WEB3FORMS_KEY,
  name,
  email,
  phone,
  message,
  subject: "Повідомлення з сайту",
};

    try {
      // 🔹 1. Надсилання в Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();

      // 🔹 2. Надсилання в Telegram
      const telegramText = `
🔔 <b>Нове повідомлення з сайту</b>

<b>Ім’я:</b> ${name}
<b>Email:</b> ${email}
<b>Телефон:</b> ${phone}
<b>Повідомлення:</b> ${message}
      `;

      await fetch("/api/send-telegram", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name, email, phone, message }), // ✅ тільки для Telegram
});

      if (response.ok) {
        setStatus("success");
        form.reset(); // ✅ Безпечний reset
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Контакти</h1>
      <p className="mb-6">Залиште повідомлення — відповімо якнайшвидше.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-medium">Ім’я</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Введіть ваше ім’я"
            className="mt-1 block w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="name@example.com"
            className="mt-1 block w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Телефон</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+380 ..."
            className="mt-1 block w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Повідомлення</label>
          <textarea
            name="message"
            required
            placeholder="Коротко опишіть ваш запит"
            className="mt-1 block w-full border rounded px-3 py-2"
            rows={5}
          />
        </div>

        <button
          type="submit"
          className="bg-emerald-600 text-white font-semibold px-6 py-2 rounded"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Надсилається..." : "Надіслати"}
        </button>

        {status === "success" && (
          <p className="text-green-600">Дякуємо! Повідомлення надіслано.</p>
        )}
        {status === "error" && (
          <p className="text-red-600">Помилка надсилання. Спробуйте ще раз.</p>
        )}
      </form>
    </main>
  );
}
