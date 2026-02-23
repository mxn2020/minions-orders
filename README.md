# minions-orders

**Order records, service selections, onboarding checklists, and invoices**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-orders/sdk minions-sdk

# Python
pip install minions-orders

# CLI (global)
npm install -g @minions-orders/cli
```

---

## CLI

```bash
# Show help
orders --help
```

---

## Python SDK

```python
from minions_orders import create_client

client = create_client()
```

---

## Project Structure

```
minions-orders/
  packages/
    core/           # TypeScript core library (@minions-orders/sdk on npm)
    python/         # Python SDK (minions-orders on PyPI)
    cli/            # CLI tool (@minions-orders/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [orders.minions.help](https://orders.minions.help)
- Blog: [orders.minions.blog](https://orders.minions.blog)
- App: [orders.minions.wtf](https://orders.minions.wtf)

---

## License

[MIT](LICENSE)
