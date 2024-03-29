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

async function run() {
  const sdk = new RunscopeAPI({
    runscopeAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.testSteps.deleteBucketsBucketKeyTestsTestIdStepsStepId({
    bucketKey: "<value>",
    stepId: "<value>",
    testId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.DeleteBucketsBucketKeyTestsTestIdStepsStepIdRequest](../../sdk/models/operations/deletebucketsbucketkeyteststestidstepsstepidrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.DeleteBucketsBucketKeyTestsTestIdStepsStepIdResponse](../../sdk/models/operations/deletebucketsbucketkeyteststestidstepsstepidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getBucketsBucketKeyTestsTestIdSteps

List test steps for a test.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";

async function run() {
  const sdk = new RunscopeAPI({
    runscopeAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.testSteps.getBucketsBucketKeyTestsTestIdSteps({
    bucketKey: "<value>",
    testId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.GetBucketsBucketKeyTestsTestIdStepsRequest](../../sdk/models/operations/getbucketsbucketkeyteststestidstepsrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.GetBucketsBucketKeyTestsTestIdStepsResponse](../../sdk/models/operations/getbucketsbucketkeyteststestidstepsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postBucketsBucketKeyTestsTestIdSteps

Add new test step.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";

async function run() {
  const sdk = new RunscopeAPI({
    runscopeAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.testSteps.postBucketsBucketKeyTestsTestIdSteps({
    testStep: {},
    bucketKey: "<value>",
    testId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PostBucketsBucketKeyTestsTestIdStepsRequest](../../sdk/models/operations/postbucketsbucketkeyteststestidstepsrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PostBucketsBucketKeyTestsTestIdStepsResponse](../../sdk/models/operations/postbucketsbucketkeyteststestidstepsresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.StandardError | 400                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## putBucketsBucketKeyTestsTestIdStepsStepId

Update the details of a single test step.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";

async function run() {
  const sdk = new RunscopeAPI({
    runscopeAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.testSteps.putBucketsBucketKeyTestsTestIdStepsStepId({
    testStep: {},
    bucketKey: "<value>",
    stepId: "<value>",
    testId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PutBucketsBucketKeyTestsTestIdStepsStepIdRequest](../../sdk/models/operations/putbucketsbucketkeyteststestidstepsstepidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PutBucketsBucketKeyTestsTestIdStepsStepIdResponse](../../sdk/models/operations/putbucketsbucketkeyteststestidstepsstepidresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.StandardError | 400                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |
