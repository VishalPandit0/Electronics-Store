require('dotenv').config();

"use strict";
const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    try {
      const lineItems = products.map((product) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: product.attributes.name,
          },
          unit_amount: Math.round(product.attributes.price * 100),
        },
        quantity: product.attributes.quantity, // Access quantity from attributes
      }));

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["IN"] },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL ,
        cancel_url: process.env.CLIENT_URL ,
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: { products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      return { error };
    }
  },
}));
