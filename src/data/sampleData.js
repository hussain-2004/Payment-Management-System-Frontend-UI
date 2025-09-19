// src/data/dummyData.js

export const initialUsers = [
  { id: 1, name: "Hussain", email: "hussain@example.com", role: "admin", status: "active", createdAt: "2024-01-15" },
  { id: 2, name: "Subbu", email: "subbu@example.com", role: "manager", status: "active", createdAt: "2024-01-20" },
  { id: 3, name: "Virat", email: "virat@example.com", role: "user", status: "inactive", createdAt: "2024-02-01" },
  { id: 4, name: "Sandeep", email: "sandeep@example.com", role: "user", status: "active", createdAt: "2024-02-10" },
  { id: 5, name: "Aditya", email: "aditya@example.com", role: "manager", status: "active", createdAt: "2024-03-01" },
  { id: 6, name: "Anees", email: "anees@example.com", role: "user", status: "active", createdAt: "2024-03-05" },
  { id: 7, name: "Srijith", email: "srijith@example.com", role: "user", status: "inactive", createdAt: "2024-03-10" },
  { id: 8, name: "Koushik", email: "koushik@example.com", role: "manager", status: "active", createdAt: "2024-03-15" }
];

export const initialPayments = [
  {
    id: "pay_001",
    userId: 1,
    amount: 1250.0,
    currency: "USD",
    status: "completed",
    category: "payment",
    reference: "REF-001",
    description: "Invoice payment for services",
    createdAt: "2024-03-01T16:00:00"
  },
  {
    id: "pay_002",
    userId: 2,
    amount: 750.5,
    currency: "USD",
    status: "pending",
    category: "transfer",
    reference: "REF-002",
    description: "Account transfer",
    createdAt: "2024-03-02T19:45:00"
  },
  {
    id: "pay_003",
    userId: 3,
    amount: 200.0,
    currency: "USD",
    status: "failed",
    category: "payment",
    reference: "REF-003",
    description: "Subscription renewal",
    createdAt: "2024-03-03T15:15:00"
  },
  {
    id: "pay_004",
    userId: 4,
    amount: 95.25,
    currency: "USD",
    status: "completed",
    category: "refund",
    reference: "REF-004",
    description: "Product return refund",
    createdAt: "2024-03-04T16:50:00"
  },
  {
    id: "pay_005",
    userId: 5,
    amount: 50.0,
    currency: "USD",
    status: "completed",
    category: "fee",
    reference: "REF-005",
    description: "Processing fee",
    createdAt: "2024-03-05T21:40:00"
  },
  {
    id: "pay_006",
    userId: 6,
    amount: 65765.0,
    currency: "EUR",
    status: "pending",
    category: "payment",
    reference: "REF-006",
    description: "Large payment request",
    createdAt: "2024-03-06T10:30:00"
  },
  {
    id: "pay_007",
    userId: 7,
    amount: 480.75,
    currency: "USD",
    status: "completed",
    category: "refund",
    reference: "REF-007",
    description: "Refund for subscription",
    createdAt: "2024-03-07T12:20:00"
  },
  {
    id: "pay_008",
    userId: 8,
    amount: 1299.99,
    currency: "USD",
    status: "pending",
    category: "payment",
    reference: "REF-008",
    description: "Annual service fee",
    createdAt: "2024-03-08T18:45:00"
  }
];
