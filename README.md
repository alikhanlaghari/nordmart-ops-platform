# NordMart Ops Platform

NordMart Ops Platform is a cloud-native portfolio project for a retail and inventory operations system.

The project starts as a local microservices application and will gradually evolve toward Azure cloud deployment using containers, CI/CD, Infrastructure as Code, messaging, and observability.

## Version 1 Architecture

Frontend Dashboard  
→ API Gateway  
→ Product Service  
→ Inventory Service  
→ Order Service  
→ RabbitMQ Event Bus  
→ Notification Service

## Initial Services

- frontend
- api-gateway
- product-service
- inventory-service
- order-service
- notification-service
- postgres
- rabbitmq

## Technology Stack

- Frontend: React, TypeScript, Vite
- Backend: Node.js 24 LTS, TypeScript, Fastify
- Database: PostgreSQL
- ORM: Prisma
- Event Bus: RabbitMQ
- Local orchestration: Docker Compose
- API testing: Postman or Thunder Client

## Future Cloud Evolution

- Azure API Management
- Azure Container Apps
- Azure Service Bus
- Azure Functions
- Terraform
- GitHub Actions
- Azure Kubernetes Service