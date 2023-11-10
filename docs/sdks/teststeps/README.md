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

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.DeleteBucketsBucketKeyTestsTestIdStepsStepIdRequest](../../sdk/models/operations/deletebucketsbucketkeyteststestidstepsstepidrequest.md)   | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `security`                                                                                                                                             | [operations.DeleteBucketsBucketKeyTestsTestIdStepsStepIdSecurity](../../sdk/models/operations/deletebucketsbucketkeyteststestidstepsstepidsecurity.md) | :heavy_check_mark:                                                                                                                                     | The security requirements to use for the request.                                                                                                      |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.DeleteBucketsBucketKeyTestsTestIdStepsStepIdResponse](../../sdk/models/operations/deletebucketsbucketkeyteststestidstepsstepidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.GetBucketsBucketKeyTestsTestIdStepsRequest](../../sdk/models/operations/getbucketsbucketkeyteststestidstepsrequest.md)   | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `security`                                                                                                                           | [operations.GetBucketsBucketKeyTestsTestIdStepsSecurity](../../sdk/models/operations/getbucketsbucketkeyteststestidstepssecurity.md) | :heavy_check_mark:                                                                                                                   | The security requirements to use for the request.                                                                                    |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.GetBucketsBucketKeyTestsTestIdStepsResponse](../../sdk/models/operations/getbucketsbucketkeyteststestidstepsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.PostBucketsBucketKeyTestsTestIdStepsRequest](../../sdk/models/operations/postbucketsbucketkeyteststestidstepsrequest.md)   | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `security`                                                                                                                             | [operations.PostBucketsBucketKeyTestsTestIdStepsSecurity](../../sdk/models/operations/postbucketsbucketkeyteststestidstepssecurity.md) | :heavy_check_mark:                                                                                                                     | The security requirements to use for the request.                                                                                      |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PostBucketsBucketKeyTestsTestIdStepsResponse](../../sdk/models/operations/postbucketsbucketkeyteststestidstepsresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.StandardError | 400                  | application/json     |
| errors.SDKError      | 400-600              | */*                  |

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

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.PutBucketsBucketKeyTestsTestIdStepsStepIdRequest](../../sdk/models/operations/putbucketsbucketkeyteststestidstepsstepidrequest.md)   | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `security`                                                                                                                                       | [operations.PutBucketsBucketKeyTestsTestIdStepsStepIdSecurity](../../sdk/models/operations/putbucketsbucketkeyteststestidstepsstepidsecurity.md) | :heavy_check_mark:                                                                                                                               | The security requirements to use for the request.                                                                                                |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.PutBucketsBucketKeyTestsTestIdStepsStepIdResponse](../../sdk/models/operations/putbucketsbucketkeyteststestidstepsstepidresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.StandardError | 400                  | application/json     |
| errors.SDKError      | 400-600              | */*                  |
