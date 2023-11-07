# TestEnvironments
(*.testEnvironments*)

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

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: GetBucketsBucketKeyTestsTestIdEnvironmentsSecurity = "";

  const res = await sdk.testEnvironments.getBucketsBucketKeyTestsTestIdEnvironments({
    bucketKey: "string",
    testId: "string",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.GetBucketsBucketKeyTestsTestIdEnvironmentsRequest](../../models/operations/getbucketsbucketkeyteststestidenvironmentsrequest.md)   | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `security`                                                                                                                                     | [operations.GetBucketsBucketKeyTestsTestIdEnvironmentsSecurity](../../models/operations/getbucketsbucketkeyteststestidenvironmentssecurity.md) | :heavy_check_mark:                                                                                                                             | The security requirements to use for the request.                                                                                              |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.GetBucketsBucketKeyTestsTestIdEnvironmentsResponse](../../models/operations/getbucketsbucketkeyteststestidenvironmentsresponse.md)>**


## postBucketsBucketKeyTestsTestIdEnvironments

Create new test environment.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PostBucketsBucketKeyTestsTestIdEnvironmentsSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: PostBucketsBucketKeyTestsTestIdEnvironmentsSecurity = "";

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
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.PostBucketsBucketKeyTestsTestIdEnvironmentsRequest](../../models/operations/postbucketsbucketkeyteststestidenvironmentsrequest.md)   | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `security`                                                                                                                                       | [operations.PostBucketsBucketKeyTestsTestIdEnvironmentsSecurity](../../models/operations/postbucketsbucketkeyteststestidenvironmentssecurity.md) | :heavy_check_mark:                                                                                                                               | The security requirements to use for the request.                                                                                                |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.PostBucketsBucketKeyTestsTestIdEnvironmentsResponse](../../models/operations/postbucketsbucketkeyteststestidenvironmentsresponse.md)>**


## putBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentId

Update the details of a test environment.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PutBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentIdSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: PutBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentIdSecurity = "";

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
})();
```

### Parameters

| Parameter                                                                                                                                                                | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                | [operations.PutBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentIdRequest](../../models/operations/putbucketsbucketkeyteststestidenvironmentsenvironmentidrequest.md)   | :heavy_check_mark:                                                                                                                                                       | The request object to use for the request.                                                                                                                               |
| `security`                                                                                                                                                               | [operations.PutBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentIdSecurity](../../models/operations/putbucketsbucketkeyteststestidenvironmentsenvironmentidsecurity.md) | :heavy_check_mark:                                                                                                                                                       | The security requirements to use for the request.                                                                                                                        |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.PutBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentIdResponse](../../models/operations/putbucketsbucketkeyteststestidenvironmentsenvironmentidresponse.md)>**

