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

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: DeleteBucketsBucketKeyTestsTestIdSecurity = "";

  const res = await sdk.tests.deleteBucketsBucketKeyTestsTestId({
    bucketKey: "string",
    testId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.DeleteBucketsBucketKeyTestsTestIdRequest](../../models/operations/deletebucketsbucketkeyteststestidrequest.md)   | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `security`                                                                                                                   | [operations.DeleteBucketsBucketKeyTestsTestIdSecurity](../../models/operations/deletebucketsbucketkeyteststestidsecurity.md) | :heavy_check_mark:                                                                                                           | The security requirements to use for the request.                                                                            |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.DeleteBucketsBucketKeyTestsTestIdResponse](../../models/operations/deletebucketsbucketkeyteststestidresponse.md)>**


## getBucketsBucketKeyTests

Returns a list of tests.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetBucketsBucketKeyTestsSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: GetBucketsBucketKeyTestsSecurity = "";

  const res = await sdk.tests.getBucketsBucketKeyTests({
    bucketKey: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetBucketsBucketKeyTestsRequest](../../models/operations/getbucketsbucketkeytestsrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.GetBucketsBucketKeyTestsSecurity](../../models/operations/getbucketsbucketkeytestssecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetBucketsBucketKeyTestsResponse](../../models/operations/getbucketsbucketkeytestsresponse.md)>**


## getBucketsBucketKeyTestsTestId

Retrieve the details of a given test by ID.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetBucketsBucketKeyTestsTestIdSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: GetBucketsBucketKeyTestsTestIdSecurity = "";

  const res = await sdk.tests.getBucketsBucketKeyTestsTestId({
    bucketKey: "string",
    testId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetBucketsBucketKeyTestsTestIdRequest](../../models/operations/getbucketsbucketkeyteststestidrequest.md)   | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `security`                                                                                                             | [operations.GetBucketsBucketKeyTestsTestIdSecurity](../../models/operations/getbucketsbucketkeyteststestidsecurity.md) | :heavy_check_mark:                                                                                                     | The security requirements to use for the request.                                                                      |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetBucketsBucketKeyTestsTestIdResponse](../../models/operations/getbucketsbucketkeyteststestidresponse.md)>**


## getBucketsBucketKeyTestsTestIdMetrics

Return details of the test metrics for the specified timeframe.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetBucketsBucketKeyTestsTestIdMetricsSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: GetBucketsBucketKeyTestsTestIdMetricsSecurity = "";

  const res = await sdk.tests.getBucketsBucketKeyTestsTestIdMetrics({
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
| `request`                                                                                                                            | [operations.GetBucketsBucketKeyTestsTestIdMetricsRequest](../../models/operations/getbucketsbucketkeyteststestidmetricsrequest.md)   | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `security`                                                                                                                           | [operations.GetBucketsBucketKeyTestsTestIdMetricsSecurity](../../models/operations/getbucketsbucketkeyteststestidmetricssecurity.md) | :heavy_check_mark:                                                                                                                   | The security requirements to use for the request.                                                                                    |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.GetBucketsBucketKeyTestsTestIdMetricsResponse](../../models/operations/getbucketsbucketkeyteststestidmetricsresponse.md)>**


## postBucketsBucketKeyTests

Create a test.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PostBucketsBucketKeyTestsSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: PostBucketsBucketKeyTestsSecurity = "";

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
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PostBucketsBucketKeyTestsRequest](../../models/operations/postbucketsbucketkeytestsrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.PostBucketsBucketKeyTestsSecurity](../../models/operations/postbucketsbucketkeytestssecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PostBucketsBucketKeyTestsResponse](../../models/operations/postbucketsbucketkeytestsresponse.md)>**


## putBucketsBucketKeyTestsTestId

Modify a test's name, description, default environment and its steps. To modify other individual properties of a test, make requests to the steps, environments, and schedules subresources of the test.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PutBucketsBucketKeyTestsTestIdSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: PutBucketsBucketKeyTestsTestIdSecurity = "";

  const res = await sdk.tests.putBucketsBucketKeyTestsTestId({
    bucketKey: "string",
    testId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PutBucketsBucketKeyTestsTestIdRequest](../../models/operations/putbucketsbucketkeyteststestidrequest.md)   | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `security`                                                                                                             | [operations.PutBucketsBucketKeyTestsTestIdSecurity](../../models/operations/putbucketsbucketkeyteststestidsecurity.md) | :heavy_check_mark:                                                                                                     | The security requirements to use for the request.                                                                      |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PutBucketsBucketKeyTestsTestIdResponse](../../models/operations/putbucketsbucketkeyteststestidresponse.md)>**

