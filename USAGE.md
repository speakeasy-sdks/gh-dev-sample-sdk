<!-- Start SDK Example Usage [usage] -->
```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetAccountSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
    const sdk = new RunscopeAPI();
    const operationSecurity: GetAccountSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

    const res = await sdk.account.getAccount(operationSecurity);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->