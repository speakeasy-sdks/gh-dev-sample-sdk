# TestSteps
(*testSteps*)

### Available Operations

* [deleteBucketsBucketKeyTestsTestIdStepsStepId](#deletebucketsbucketkeyteststestidstepsstepid) - Delete a step from a test.
* [getBucketsBucketKeyTestsTestIdSteps](#getbucketsbucketkeyteststestidsteps) - List test steps for a test.
* [postBucketsBucketKeyTestsTestIdSteps](#postbucketsbucketkeyteststestidsteps) - Add new test step.
* [putBucketsBucketKeyTestsTestIdStepsStepId](#putbucketsbucketkeyteststestidstepsstepid) - Update the details of a single test step.

## deleteBucketsBucketKeyTestsTestIdStepsStepId

Delete a step from a test.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { DeleteBucketsBucketKeyTestsTestIdStepsStepIdSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: DeleteBucketsBucketKeyTestsTestIdStepsStepIdSecurity = "";

  const res = await sdk.testSteps.deleteBucketsBucketKeyTestsTestIdStepsStepId({
    bucketKey: "string",
    stepId: "string",
    testId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.DeleteBucketsBucketKeyTestsTestIdStepsStepIdRequest](../../models/operations/deletebucketsbucketkeyteststestidstepsstepidrequest.md)   | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `security`                                                                                                                                         | [operations.DeleteBucketsBucketKeyTestsTestIdStepsStepIdSecurity](../../models/operations/deletebucketsbucketkeyteststestidstepsstepidsecurity.md) | :heavy_check_mark:                                                                                                                                 | The security requirements to use for the request.                                                                                                  |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.DeleteBucketsBucketKeyTestsTestIdStepsStepIdResponse](../../models/operations/deletebucketsbucketkeyteststestidstepsstepidresponse.md)>**


## getBucketsBucketKeyTestsTestIdSteps

List test steps for a test.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetBucketsBucketKeyTestsTestIdStepsSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: GetBucketsBucketKeyTestsTestIdStepsSecurity = "";

  const res = await sdk.testSteps.getBucketsBucketKeyTestsTestIdSteps({
    bucketKey: "string",
    testId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetBucketsBucketKeyTestsTestIdStepsRequest](../../models/operations/getbucketsbucketkeyteststestidstepsrequest.md)   | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `security`                                                                                                                       | [operations.GetBucketsBucketKeyTestsTestIdStepsSecurity](../../models/operations/getbucketsbucketkeyteststestidstepssecurity.md) | :heavy_check_mark:                                                                                                               | The security requirements to use for the request.                                                                                |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetBucketsBucketKeyTestsTestIdStepsResponse](../../models/operations/getbucketsbucketkeyteststestidstepsresponse.md)>**


## postBucketsBucketKeyTestsTestIdSteps

Add new test step.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PostBucketsBucketKeyTestsTestIdStepsSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: PostBucketsBucketKeyTestsTestIdStepsSecurity = "";

  const res = await sdk.testSteps.postBucketsBucketKeyTestsTestIdSteps({
    testStep: {},
    bucketKey: "string",
    testId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PostBucketsBucketKeyTestsTestIdStepsRequest](../../models/operations/postbucketsbucketkeyteststestidstepsrequest.md)   | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `security`                                                                                                                         | [operations.PostBucketsBucketKeyTestsTestIdStepsSecurity](../../models/operations/postbucketsbucketkeyteststestidstepssecurity.md) | :heavy_check_mark:                                                                                                                 | The security requirements to use for the request.                                                                                  |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PostBucketsBucketKeyTestsTestIdStepsResponse](../../models/operations/postbucketsbucketkeyteststestidstepsresponse.md)>**


## putBucketsBucketKeyTestsTestIdStepsStepId

Update the details of a single test step.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PutBucketsBucketKeyTestsTestIdStepsStepIdSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: PutBucketsBucketKeyTestsTestIdStepsStepIdSecurity = "";

  const res = await sdk.testSteps.putBucketsBucketKeyTestsTestIdStepsStepId({
    testStep: {},
    bucketKey: "string",
    stepId: "string",
    testId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.PutBucketsBucketKeyTestsTestIdStepsStepIdRequest](../../models/operations/putbucketsbucketkeyteststestidstepsstepidrequest.md)   | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `security`                                                                                                                                   | [operations.PutBucketsBucketKeyTestsTestIdStepsStepIdSecurity](../../models/operations/putbucketsbucketkeyteststestidstepsstepidsecurity.md) | :heavy_check_mark:                                                                                                                           | The security requirements to use for the request.                                                                                            |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.PutBucketsBucketKeyTestsTestIdStepsStepIdResponse](../../models/operations/putbucketsbucketkeyteststestidstepsstepidresponse.md)>**

