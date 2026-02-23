/**
 * Minions Orders SDK
 *
 * Order records, service selections, onboarding checklists, and invoices
 *
 * @module @minions-orders/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Orders.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
