/**
 * @module @minions-orders/sdk/schemas
 * Custom MinionType schemas for Minions Orders.
 */

import type { MinionType } from 'minions-sdk';

export const orderType: MinionType = {
  id: 'orders-order',
  name: 'Order',
  slug: 'order',
  description: 'An order placed by a lead/client.',
  icon: '🛒',
  schema: [
    { name: 'leadId', type: 'string', label: 'leadId' },
    { name: 'dealId', type: 'string', label: 'dealId' },
    { name: 'serviceIds', type: 'string', label: 'serviceIds' },
    { name: 'packageId', type: 'string', label: 'packageId' },
    { name: 'totalAmount', type: 'number', label: 'totalAmount' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'orderedAt', type: 'string', label: 'orderedAt' },
    { name: 'completedAt', type: 'string', label: 'completedAt' },
  ],
};

export const onboardingchecklistType: MinionType = {
  id: 'orders-onboarding-checklist',
  name: 'Onboarding checklist',
  slug: 'onboarding-checklist',
  description: 'Steps to onboard a new client.',
  icon: '✅',
  schema: [
    { name: 'orderId', type: 'string', label: 'orderId' },
    { name: 'steps', type: 'string', label: 'steps' },
    { name: 'currentStep', type: 'number', label: 'currentStep' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const orderinvoiceType: MinionType = {
  id: 'orders-order-invoice',
  name: 'Order invoice',
  slug: 'order-invoice',
  description: 'An invoice generated for an order.',
  icon: '🧾',
  schema: [
    { name: 'orderId', type: 'string', label: 'orderId' },
    { name: 'invoiceNumber', type: 'string', label: 'invoiceNumber' },
    { name: 'amount', type: 'number', label: 'amount' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'issuedAt', type: 'string', label: 'issuedAt' },
    { name: 'dueAt', type: 'string', label: 'dueAt' },
    { name: 'paidAt', type: 'string', label: 'paidAt' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const customTypes: MinionType[] = [
  orderType,
  onboardingchecklistType,
  orderinvoiceType,
];

