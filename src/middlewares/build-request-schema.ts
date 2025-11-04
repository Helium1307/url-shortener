import type { ZodType } from "zod";

type RequestSchema = {
  body?: ZodType;
  querystring?: ZodType;
  params?: ZodType;
  headers?: ZodType;
  response?: Record<number, ZodType>;
};

export function buildRequestSchema(schema: RequestSchema) {
  return {
    schema,
  };
}
