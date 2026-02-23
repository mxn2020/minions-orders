---
title: Quick Start
description: Get up and running with Minions Orders in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-orders/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_orders import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
orders info
```
