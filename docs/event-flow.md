# NordMart Ops Platform Event Flow

## Purpose

This document explains how services communicate asynchronously using RabbitMQ.

The goal is to simulate production-style event-driven communication between microservices.

---

# Initial Event Flow

## Order Creation Flow

```text
1. Frontend sends order request
        |
        v
2. API Gateway forwards request
        |
        v
3. Order Service creates order
        |
        v
4. Order Service publishes event:
   "order.created"
        |
        v
5. RabbitMQ receives event
        |
        v
6. Notification Service consumes event
        |
        v
7. Notification Service logs notification message
```

---

# Planned Future Events

## Inventory Events

- inventory.updated
- inventory.low-stock

## Product Events

- product.created
- product.updated

## Order Events

- order.created
- order.cancelled
- order.completed

---

# Why Event-Driven Architecture

Event-driven systems improve:

- scalability
- service decoupling
- asynchronous processing
- fault isolation
- cloud-native flexibility

---

# Future Azure Evolution

RabbitMQ may later evolve into:

- Azure Service Bus
- Azure Event Grid
- Azure Functions consumers
- AKS-based event processing