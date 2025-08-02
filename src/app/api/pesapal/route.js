import { Pesapal } from "pesapaljs-v3";

export async function POST(req) {
  const { amount, currency, description, callback_url, notification_id } =
    await req.json();

  const { PESAPAL_CONSUMER_KEY, PESAPAL_CONSUMER_SECRET } = process.env;

  if (!PESAPAL_CONSUMER_KEY || !PESAPAL_CONSUMER_SECRET) {
    console.error("Missing Pesapal API credentials");
    return new Response(
      JSON.stringify({ error: "Server configuration error." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const pesapal = new Pesapal({
      consumer_key: PESAPAL_CONSUMER_KEY,
      consumer_secret: PESAPAL_CONSUMER_SECRET,
      environment: "sandbox",
    });

    const paymentUrl = await pesapal.getPaymentURL({
      id: `TEST${Math.floor(Math.random() * 100000)}`,
      currency,
      amount,
      description,
      callback_url,
      notification_id,
    });

    return new Response(JSON.stringify({ paymentUrl }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error getting payment URL:", error.response?.data || error.message);
    return new Response(JSON.stringify({ error: "Failed to get payment URL" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
