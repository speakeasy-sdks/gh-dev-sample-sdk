# SharedEnvironments
(*sharedEnvironments*)

### Available Operations

* [getBucketsBucketKeyEnvironments](#getbucketsbucketkeyenvironments) - Returns list of shared environments for a specified bucket.
* [postBucketsBucketKeyEnvironments](#postbucketsbucketkeyenvironments) - Create new shared environment.
* [putBucketsBucketKeyEnvironmentsEnvironmentId](#putbucketsbucketkeyenvironmentsenvironmentid) - Update the details of a shared environment.

## getBucketsBucketKeyEnvironments

Returns list of shared environments for a specified bucket.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetBucketsBucketKeyEnvironmentsSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: GetBucketsBucketKeyEnvironmentsSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.sharedEnvironments.getBucketsBucketKeyEnvironments({
    bucketKey: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetBucketsBucketKeyEnvironmentsRequest](../../sdk/models/operations/getbucketsbucketkeyenvironmentsrequest.md)   | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `security`                                                                                                                   | [operations.GetBucketsBucketKeyEnvironmentsSecurity](../../sdk/models/operations/getbucketsbucketkeyenvironmentssecurity.md) | :heavy_check_mark:                                                                                                           | The security requirements to use for the request.                                                                            |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetBucketsBucketKeyEnvironmentsResponse](../../sdk/models/operations/getbucketsbucketkeyenvironmentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postBucketsBucketKeyEnvironments

Create new shared environment.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PostBucketsBucketKeyEnvironmentsSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: PostBucketsBucketKeyEnvironmentsSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.sharedEnvironments.postBucketsBucketKeyEnvironments({
    environment: {
      emails: {},
      headers: {},
      initialVariables: {},
      integrations: [
        {},
      ],
      name: "<value>",
      regions: [
        "<value>",
      ],
      remoteAgents: [
        {},
      ],
      scriptLibrary: [
        "<value>",
      ],
    },
    bucketKey: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PostBucketsBucketKeyEnvironmentsRequest](../../sdk/models/operations/postbucketsbucketkeyenvironmentsrequest.md)   | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `security`                                                                                                                     | [operations.PostBucketsBucketKeyEnvironmentsSecurity](../../sdk/models/operations/postbucketsbucketkeyenvironmentssecurity.md) | :heavy_check_mark:                                                                                                             | The security requirements to use for the request.                                                                              |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PostBucketsBucketKeyEnvironmentsResponse](../../sdk/models/operations/postbucketsbucketkeyenvironmentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## putBucketsBucketKeyEnvironmentsEnvironmentId

Update the details of a shared environment.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PutBucketsBucketKeyEnvironmentsEnvironmentIdSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: PutBucketsBucketKeyEnvironmentsEnvironmentIdSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.sharedEnvironments.putBucketsBucketKeyEnvironmentsEnvironmentId({
    environment: {
      emails: {},
      headers: {},
      initialVariables: {},
      integrations: [
        {},
      ],
      name: "<value>",
      regions: [
        "<value>",
      ],
      remoteAgents: [
        {},
      ],
      scriptLibrary: [
        "<value>",
      ],
    },
    bucketKey: "<value>",
    environmentId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.PutBucketsBucketKeyEnvironmentsEnvironmentIdRequest](../../sdk/models/operations/putbucketsbucketkeyenvironmentsenvironmentidrequest.md)   | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `security`                                                                                                                                             | [operations.PutBucketsBucketKeyEnvironmentsEnvironmentIdSecurity](../../sdk/models/operations/putbucketsbucketkeyenvironmentsenvironmentidsecurity.md) | :heavy_check_mark:                                                                                                                                     | The security requirements to use for the request.                                                                                                      |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.PutBucketsBucketKeyEnvironmentsEnvironmentIdResponse](../../sdk/models/operations/putbucketsbucketkeyenvironmentsenvironmentidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
