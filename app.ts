import fastify from "fastify";
import mongoose from "mongoose";
import Url from "./src/models/url";
import z from "zod";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { customAlphabet } from "nanoid";
import { buildRequestSchema } from "./src/middlewares/build-request-schema";

export const app = fastify({ logger: true });
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

mongoose
  .connect(
    "mongodb://root:pass12345@localhost:27017/url-shortener-db?authSource=admin",
  )
  .then(() => {
    console.log("conectado ao mongo");
  });

const shortUrlSchema = z.object({
  url: z.url(),
});

const getUrlCodeSchema = z.object({
  urlCode: z.string().length(7),
});

app.post(
  "/",
  buildRequestSchema({ body: shortUrlSchema }),
  async (request, reply) => {
    const { url: originalUrl } = shortUrlSchema.parse(request.body);

    const nanoid7 = customAlphabet(
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      7,
    );

    await Url.create({
      urlCode: nanoid7(),
      originalUrl,
    });

    return reply.status(204).send();
  },
);

app.get(
  "/:urlCode",
  buildRequestSchema({ params: getUrlCodeSchema }),
  async (request, reply) => {
    const { urlCode } = getUrlCodeSchema.parse(request.params);
    const url = await Url.findOne({ urlCode });

    if (!url) {
      return reply.status(404).send({ error: "URL not found" });
    }

    return reply.redirect(url.originalUrl);
  },
);
