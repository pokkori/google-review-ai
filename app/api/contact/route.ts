import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { company, name, email, phone, employees, message } = body;

    if (!company || !name || !email || !message) {
      return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
    }

    // Web3Forms (free tier, no backend needed)
    // Set NEXT_PUBLIC_WEB3FORMS_KEY in Vercel env vars
    const accessKey = process.env.WEB3FORMS_KEY;
    if (!accessKey) {
      // Fallback: just log and return success (for local dev)
      console.log("[Contact Form]", { company, name, email, phone, employees, message });
      return NextResponse.json({ ok: true });
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `【法人問い合わせ】${company} / ${name}`,
        from_name: `${company} ${name}`,
        email,
        message: `会社名: ${company}\n担当者: ${name}\nメール: ${email}\n電話: ${phone || "未記入"}\n従業員規模: ${employees || "未記入"}\n\n${message}`,
      }),
    });

    const data = await res.json();
    if (!data.success) {
      console.error("Web3Forms error:", data);
      return NextResponse.json({ error: "送信失敗" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
