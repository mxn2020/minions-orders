"""
Minions Orders SDK — Type Schemas
Custom MinionType schemas for Minions Orders.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

order_type = MinionType(
    id="orders-order",
    name="Order",
    slug="order",
    description="An order placed by a lead/client.",
    icon="🛒",
    schema=[
        FieldDefinition(name="leadId", type="string", label="leadId"),
        FieldDefinition(name="dealId", type="string", label="dealId"),
        FieldDefinition(name="serviceIds", type="string", label="serviceIds"),
        FieldDefinition(name="packageId", type="string", label="packageId"),
        FieldDefinition(name="totalAmount", type="number", label="totalAmount"),
        FieldDefinition(name="currency", type="string", label="currency"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="orderedAt", type="string", label="orderedAt"),
        FieldDefinition(name="completedAt", type="string", label="completedAt"),
    ],
)

onboarding_checklist_type = MinionType(
    id="orders-onboarding-checklist",
    name="Onboarding checklist",
    slug="onboarding-checklist",
    description="Steps to onboard a new client.",
    icon="✅",
    schema=[
        FieldDefinition(name="orderId", type="string", label="orderId"),
        FieldDefinition(name="steps", type="string", label="steps"),
        FieldDefinition(name="currentStep", type="number", label="currentStep"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

order_invoice_type = MinionType(
    id="orders-order-invoice",
    name="Order invoice",
    slug="order-invoice",
    description="An invoice generated for an order.",
    icon="🧾",
    schema=[
        FieldDefinition(name="orderId", type="string", label="orderId"),
        FieldDefinition(name="invoiceNumber", type="string", label="invoiceNumber"),
        FieldDefinition(name="amount", type="number", label="amount"),
        FieldDefinition(name="currency", type="string", label="currency"),
        FieldDefinition(name="issuedAt", type="string", label="issuedAt"),
        FieldDefinition(name="dueAt", type="string", label="dueAt"),
        FieldDefinition(name="paidAt", type="string", label="paidAt"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

custom_types: list[MinionType] = [
    order_type,
    onboarding_checklist_type,
    order_invoice_type,
]

