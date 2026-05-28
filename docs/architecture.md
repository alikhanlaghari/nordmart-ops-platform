# NordMart Ops Platform Architecture

## Purpose

This document explains the high-level architecture of the NordMart Ops Platform.

The goal is to build a realistic retail and inventory operations system using a cloud-native microservices approach.

## Version 1 Local Architecture

```text
Frontend Dashboard
        |
        v
API Gateway
        |
        |---------------------> Product Service
        |---------------------> Inventory Service
        |---------------------> Order Service
                                      |
                                      v
                              RabbitMQ Event Bus
                                      |
                                      v
                              Notification Service
```
PostgreSQL is used as the local database.

## Service Responsibilities

### Frontend Dashboard
Provides the user interface for viewing products, inventory, and orders.

### API Gateway
Acts as the single entry point for the frontend and routes requests to backend services.

### Product Service
Manages product information such as:
- Product name
- Price
- Category
- Product status

### Inventory Service
Manages:
- Stock levels
- Inventory updates
- Inventory synchronization

### Order Service
Handles:
- Customer orders
- Order processing
- Publishing order-related events

### Notification Service
Listens to events and simulates operational notifications.

### PostgreSQL
Stores application data locally during development.

### RabbitMQ
Provides asynchronous communication between services.

---

## Production Thinking

This architecture is designed with future cloud-native evolution in mind and prepares the platform for Azure-based production deployment using technologies such as:

- Azure API Management
- Azure Container Apps
- Azure Service Bus
- Azure Functions
- Terraform
- GitHub Actions
- Azure Kubernetes Service (AKS)

The goal is to gradually evolve the platform from a local development environment into a scalable, observable, and production-ready cloud architecture.