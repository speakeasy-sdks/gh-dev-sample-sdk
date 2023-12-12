# TestEnvironments
(*testEnvironments*)

### Available Operations

* [getBucketsBucketKeyTestsTestIdEnvironments](#getbucketsbucketkeyteststestidenvironments) - Return details of the test's environments (only those that belong to the specified test)
* [postBucketsBucketKeyTestsTestIdEnvironments](#postbucketsbucketkeyteststestidenvironments) - Create new test environment.
* [putBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentId](#putbucketsbucketkeyteststestidenvironmentsenvironmentid) - Update the details of a test environment.

## getBucketsBucketKeyTestsTestIdEnvironments

Return details of the test's environments (only those that belong to the specified test)

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetBucketsBucketKeyTestsTestIdEnvironmentsSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: GetBucketsBucketKeyTestsTestIdEnvironmentsSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.testEnvironments.getBucketsBucketKeyTestsTestIdEnvironments({
    bucketKey: "string",
    testId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.GetBucketsBucketKeyTestsTestIdEnvironmentsRequest](../../sdk/models/operations/getbucketsbucketkeyteststestidenvironmentsrequest.md)   | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `security`                                                                                                                                         | [operations.GetBucketsBucketKeyTestsTestIdEnvironmentsSecurity](../../sdk/models/operations/getbucketsbucketkeyteststestidenvironmentssecurity.md) | :heavy_check_mark:                                                                                                                                 | The security requirements to use for the request.                                                                                                  |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.GetBucketsBucketKeyTestsTestIdEnvironmentsResponse](../../sdk/models/operations/getbucketsbucketkeyteststestidenvironmentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postBucketsBucketKeyTestsTestIdEnvironments

Create new test environment.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PostBucketsBucketKeyTestsTestIdEnvironmentsSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: PostBucketsBucketKeyTestsTestIdEnvironmentsSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.testEnvironments.postBucketsBucketKeyTestsTestIdEnvironments({
    environment: {
      emails: {},
      headers: {},
      initialVariables: {},
      integrations: [
        {},
      ],
      name: "string",
      regions: [
        "string",
      ],
      remoteAgents: [
        {},
      ],
      scriptLibrary: [
        "string",
      ],
    },
    bucketKey: "string",
    testId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.PostBucketsBucketKeyTestsTestIdEnvironmentsRequest](../../sdk/models/operations/postbucketsbucketkeyteststestidenvironmentsrequest.md)   | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `security`                                                                                                                                           | [operations.PostBucketsBucketKeyTestsTestIdEnvironmentsSecurity](../../sdk/models/operations/postbucketsbucketkeyteststestidenvironmentssecurity.md) | :heavy_check_mark:                                                                                                                                   | The security requirements to use for the request.                                                                                                    |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.PostBucketsBucketKeyTestsTestIdEnvironmentsResponse](../../sdk/models/operations/postbucketsbucketkeyteststestidenvironmentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentId

Update the details of a test environment.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PutBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentIdSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: PutBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentIdSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.testEnvironments.putBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentId({
    environment: {
      emails: {},
      headers: {},
      initialVariables: {},
      integrations: [
        {},
      ],
      name: "string",
      regions: [
        "string",
      ],
      remoteAgents: [
        {},
      ],
      scriptLibrary: [
        "string",
      ],
    },
    bucketKey: "string",
    environmentId: "string",
    testId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                    | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                    | [operations.PutBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentIdRequest](../../sdk/models/operations/putbucketsbucketkeyteststestidenvironmentsenvironmentidrequest.md)   | :heavy_check_mark:                                                                                                                                                           | The request object to use for the request.                                                                                                                                   |
| `security`                                                                                                                                                                   | [operations.PutBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentIdSecurity](../../sdk/models/operations/putbucketsbucketkeyteststestidenvironmentsenvironmentidsecurity.md) | :heavy_check_mark:                                                                                                                                                           | The security requirements to use for the request.                                                                                                                            |
| `config`                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                           | Available config options for making requests.                                                                                                                                |


### Response

**Promise<[operations.PutBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentIdResponse](../../sdk/models/operations/putbucketsbucketkeyteststestidenvironmentsenvironmentidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
