<!-- Start SDK Example Usage [usage] -->
```typescript
import { RunscopeAPI } from "Runscope-API";

async function run() {
    const sdk = new RunscopeAPI({
        runscopeAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const res = await sdk.account.getAccount();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->