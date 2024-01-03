// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51OTLgCIARiDUiRz9Y8J0KkIClYD4OmT1QU2ay11URqEhWJmDd22bVBz7Gggf5rQOWBIEtPJYUzdvU8p7NQKGrKc800j3tnn1ea"
);
const express = require("express");
const app = express();
app.use(express.static("public"));

const MY_DOMAIN = "http://localhost:4242";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data:{
          currency:'usd',
          product_data:{
            name:'string'
          },
          unit_amount:7
        },
        quantity: 2,
      },
    ],
    mode: "payment",
    success_url: `${MY_DOMAIN}?success=true`,
    cancel_url: `${MY_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on port 4242"));
