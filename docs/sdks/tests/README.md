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

async function run() {
  const sdk = new RunscopeAPI({
    runscopeAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.tests.deleteBucketsBucketKeyTestsTestId({
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

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.DeleteBucketsBucketKeyTestsTestIdRequest](../../sdk/models/operations/deletebucketsbucketkeyteststestidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


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

async function run() {
  const sdk = new RunscopeAPI({
    runscopeAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.tests.getBucketsBucketKeyTests({
    bucketKey: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetBucketsBucketKeyTestsRequest](../../sdk/models/operations/getbucketsbucketkeytestsrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


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

async function run() {
  const sdk = new RunscopeAPI({
    runscopeAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.tests.getBucketsBucketKeyTestsTestId({
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

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetBucketsBucketKeyTestsTestIdRequest](../../sdk/models/operations/getbucketsbucketkeyteststestidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


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

async function run() {
  const sdk = new RunscopeAPI({
    runscopeAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.tests.getBucketsBucketKeyTestsTestIdMetrics({
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

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetBucketsBucketKeyTestsTestIdMetricsRequest](../../sdk/models/operations/getbucketsbucketkeyteststestidmetricsrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


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

async function run() {
  const sdk = new RunscopeAPI({
    runscopeAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.tests.postBucketsBucketKeyTests({
    test: {
      createdBy: {},
      lastRun: {},
      name: "<value>",
    },
    bucketKey: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PostBucketsBucketKeyTestsRequest](../../sdk/models/operations/postbucketsbucketkeytestsrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


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

async function run() {
  const sdk = new RunscopeAPI({
    runscopeAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.tests.putBucketsBucketKeyTestsTestId({
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

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PutBucketsBucketKeyTestsTestIdRequest](../../sdk/models/operations/putbucketsbucketkeyteststestidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PutBucketsBucketKeyTestsTestIdResponse](../../sdk/models/operations/putbucketsbucketkeyteststestidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
