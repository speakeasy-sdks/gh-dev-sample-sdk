<!-- Start SDK Example Usage -->


```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetAccountSecurity } from "Runscope-API/dist/sdk/models/operations";

(async () => {
    const sdk = new RunscopeAPI();
    const operationSecurity: GetAccountSecurity = "";

    const res = await sdk.account.getAccount(operationSecurity);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->