# Tests
(*tests*)

### Available Operations

* [deleteBucketsBucketKeyTestsTestId](#deletebucketsbucketkeyteststestid) - Delete a test, including all steps, schedules, test-specific environments and results.
* [getBucketsBucketKeyTests](#getbucketsbucketkeytests) - Returns a list of tests.
* [getBucketsBucketKeyTestsTestId](#getbucketsbucketkeyteststestid) - Retrieve the details of a given test by ID.
* [getBucketsBucketKeyTestsTestIdMetrics](#getbucketsbucketkeyteststestidmetrics) - Return details of the test metrics for the specified timeframe.
* [postBucketsBucketKeyTests](#postbucketsbucketkeytests) - Create a test.
* [putBucketsBucketKeyTestsTestId](#putbucketsbucketkeyteststestid) - Modify a test's name, description, default environment and its steps. To modify other individual properties of a test, make requests to the steps, environments, and schedules subresources of the test.

## deleteBucketsBucketKeyTestsTestId

Delete a test, including all steps, schedules, test-specific environments and results.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { DeleteBucketsBucketKeyTestsTestIdSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: DeleteBucketsBucketKeyTestsTestIdSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.tests.deleteBucketsBucketKeyTestsTestId({
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

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.DeleteBucketsBucketKeyTestsTestIdRequest](../../sdk/models/operations/deletebucketsbucketkeyteststestidrequest.md)   | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `security`                                                                                                                       | [operations.DeleteBucketsBucketKeyTestsTestIdSecurity](../../sdk/models/operations/deletebucketsbucketkeyteststestidsecurity.md) | :heavy_check_mark:                                                                                                               | The security requirements to use for the request.                                                                                |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.DeleteBucketsBucketKeyTestsTestIdResponse](../../sdk/models/operations/deletebucketsbucketkeyteststestidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getBucketsBucketKeyTests

Returns a list of tests.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetBucketsBucketKeyTestsSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: GetBucketsBucketKeyTestsSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.tests.getBucketsBucketKeyTests({
    bucketKey: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetBucketsBucketKeyTestsRequest](../../sdk/models/operations/getbucketsbucketkeytestsrequest.md)   | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.GetBucketsBucketKeyTestsSecurity](../../sdk/models/operations/getbucketsbucketkeytestssecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetBucketsBucketKeyTestsResponse](../../sdk/models/operations/getbucketsbucketkeytestsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getBucketsBucketKeyTestsTestId

Retrieve the details of a given test by ID.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetBucketsBucketKeyTestsTestIdSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: GetBucketsBucketKeyTestsTestIdSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.tests.getBucketsBucketKeyTestsTestId({
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

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.GetBucketsBucketKeyTestsTestIdRequest](../../sdk/models/operations/getbucketsbucketkeyteststestidrequest.md)   | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `security`                                                                                                                 | [operations.GetBucketsBucketKeyTestsTestIdSecurity](../../sdk/models/operations/getbucketsbucketkeyteststestidsecurity.md) | :heavy_check_mark:                                                                                                         | The security requirements to use for the request.                                                                          |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetBucketsBucketKeyTestsTestIdResponse](../../sdk/models/operations/getbucketsbucketkeyteststestidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getBucketsBucketKeyTestsTestIdMetrics

Return details of the test metrics for the specified timeframe.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetBucketsBucketKeyTestsTestIdMetricsSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: GetBucketsBucketKeyTestsTestIdMetricsSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.tests.getBucketsBucketKeyTestsTestIdMetrics({
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

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.GetBucketsBucketKeyTestsTestIdMetricsRequest](../../sdk/models/operations/getbucketsbucketkeyteststestidmetricsrequest.md)   | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `security`                                                                                                                               | [operations.GetBucketsBucketKeyTestsTestIdMetricsSecurity](../../sdk/models/operations/getbucketsbucketkeyteststestidmetricssecurity.md) | :heavy_check_mark:                                                                                                                       | The security requirements to use for the request.                                                                                        |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.GetBucketsBucketKeyTestsTestIdMetricsResponse](../../sdk/models/operations/getbucketsbucketkeyteststestidmetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postBucketsBucketKeyTests

Create a test.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PostBucketsBucketKeyTestsSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: PostBucketsBucketKeyTestsSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.tests.postBucketsBucketKeyTests({
    test: {
      createdBy: {},
      lastRun: {},
      name: "string",
    },
    bucketKey: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PostBucketsBucketKeyTestsRequest](../../sdk/models/operations/postbucketsbucketkeytestsrequest.md)   | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `security`                                                                                                       | [operations.PostBucketsBucketKeyTestsSecurity](../../sdk/models/operations/postbucketsbucketkeytestssecurity.md) | :heavy_check_mark:                                                                                               | The security requirements to use for the request.                                                                |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PostBucketsBucketKeyTestsResponse](../../sdk/models/operations/postbucketsbucketkeytestsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putBucketsBucketKeyTestsTestId

Modify a test's name, description, default environment and its steps. To modify other individual properties of a test, make requests to the steps, environments, and schedules subresources of the test.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PutBucketsBucketKeyTestsTestIdSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: PutBucketsBucketKeyTestsTestIdSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.tests.putBucketsBucketKeyTestsTestId({
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

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PutBucketsBucketKeyTestsTestIdRequest](../../sdk/models/operations/putbucketsbucketkeyteststestidrequest.md)   | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `security`                                                                                                                 | [operations.PutBucketsBucketKeyTestsTestIdSecurity](../../sdk/models/operations/putbucketsbucketkeyteststestidsecurity.md) | :heavy_check_mark:                                                                                                         | The security requirements to use for the request.                                                                          |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PutBucketsBucketKeyTestsTestIdResponse](../../sdk/models/operations/putbucketsbucketkeyteststestidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
