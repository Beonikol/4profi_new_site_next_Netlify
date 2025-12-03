// app/api/send-telegram/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const TELEGRAM_TOKEN = "8212892408:AAGiD5CVk3bokTvMEw6KM0rOGvId2BZwMjo";
    const TELEGRAM_CHAT_ID = "493243467";

    const text = `
🔔 <b>Нове повідомлення з сайту</b>

<b>Ім’я:</b> ${data.name}
<b>Email:</b> ${data.email}
<b>Телефон:</b> ${data.phone}
<b>Повідомлення:</b> ${data.message}
    `;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    const telegramData = await telegramRes.json();

    return NextResponse.json({ ok: true, telegram: telegramData });
  } catch (err) {
    console.error("Telegram API Error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
