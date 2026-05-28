import "dotenv/config";
import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const app = Fastify({
  logger: true,
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

type CreateProductBody = {
  name: string;
  price: number;
  category: string;
  status?: string;
};

app.get("/health", async () => {
  return {
    service: "product-service",
    status: "ok",
  };
});

app.get("/ready", async (request, reply) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    return {
      service: "product-service",
      status: "ready",
      database: "connected",
    };
  } catch (error) {
    reply.status(503);

    return {
      service: "product-service",
      status: "not_ready",
      database: "disconnected",
    };
  }
});

app.get("/products", async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return products;
});

app.post("/products", async (request, reply) => {
  const body = request.body as CreateProductBody;

  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
      category: body.category,
      status: body.status ?? "active",
    },
  });

  reply.status(201);

  return newProduct;
});

const start = async () => {
  try {
    await app.listen({
      port: 3001,
      host: "0.0.0.0",
    });

    console.log("Product Service running on port 3001");
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();