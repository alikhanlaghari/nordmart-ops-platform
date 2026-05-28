import Fastify from "fastify";
import proxy from "@fastify/http-proxy";

const app = Fastify({
  logger: true,
});

app.get("/health", async () => {
  return {
    service: "api-gateway",
    status: "ok",
  };
});

app.register(proxy, {
  upstream: "http://product-service:3001",
  prefix: "/products",
  rewritePrefix: "/products",
});

const start = async () => {
  try {
    await app.listen({
      port: 3000,
      host: "0.0.0.0",
    });

    console.log("API Gateway running on port 3000");
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();