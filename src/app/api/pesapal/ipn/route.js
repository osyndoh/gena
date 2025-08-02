import { Pesapal } from "pesapaljs-v3";

export async function POST(req) {
  try {
    const notification = await req.json();

    console.log("Received IPN notification:", notification);

    // Validate notification structure
    if (!notification || typeof notification !== 'object') {
      return new Response(
        JSON.stringify({ status: "error", message: "Invalid notification format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // In a real application, you would process the notification here.
    // This involves several critical steps:
    //
    // 1. **Signature Validation:**
    //    - The `pesapaljs-v3` library provides a method to verify the signature of the IPN request.
    //    - This is crucial to ensure the request is genuinely from Pesapal and not a malicious actor.
    //    - You would use `pesapal.verifySignature(notification)`
    //
    // 2. **Update Payment Status:**
    //    - If the signature is valid, you would update the payment status in your database.
    //    - Use the `OrderTrackingId` from the notification to identify the transaction.
    //
    // 3. **Respond to Pesapal:**
    //    - Pesapal expects a specific response format to acknowledge receipt of the IPN.
    //    - The response should be a JSON object with the status and the `OrderTrackingId`.

    // Example of a more complete implementation:
    /*
    const { PESAPAL_CONSUMER_KEY, PESAPAL_CONSUMER_SECRET } = process.env;
    const pesapal = new Pesapal({
      consumer_key: PESAPAL_CONSUMER_KEY,
      consumer_secret: PESAPAL_CONSUMER_SECRET,
      environment: "sandbox",
    });

    try {
      const isValid = pesapal.verifySignature(notification);
      if (isValid) {
        // Update your database with the payment status
        console.log("IPN signature is valid. Payment status:", notification.payment_status);

        return new Response(
          JSON.stringify({
            status: "success",
            message: "IPN received successfully",
            OrderTrackingId: notification.OrderTrackingId,
          }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      } else {
        console.warn("Invalid IPN signature received.");
        return new Response(JSON.stringify({ status: "error", message: "Invalid signature" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
    } catch (error) {
      console.error("Error processing IPN:", error);
      return new Response(
        JSON.stringify({ status: "error", message: "Internal server error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    */

    return new Response(
      JSON.stringify({ 
        status: "success", 
        message: "IPN received successfully",
        OrderTrackingId: notification.OrderTrackingId || "unknown"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return new Response(JSON.stringify({ status: "error", message: "Invalid JSON in request body" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    
    console.error("Error processing IPN:", error);
    return new Response(JSON.stringify({ status: "error", message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
