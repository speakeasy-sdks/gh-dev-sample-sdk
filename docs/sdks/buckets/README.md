# Buckets
(*buckets*)

### Available Operations

* [deleteBucketsBucketKey](#deletebucketsbucketkey) - Delete a single bucket resource.
* [getBuckets](#getbuckets) - Returns a list of buckets.
* [getBucketsBucketKey](#getbucketsbucketkey) - Returns a single bucket resource.
* [postBuckets](#postbuckets) - Create a new bucket

## deleteBucketsBucketKey

Delete a single bucket resource.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { DeleteBucketsBucketKeySecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: DeleteBucketsBucketKeySecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.buckets.deleteBucketsBucketKey({
    bucketKey: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.DeleteBucketsBucketKeyRequest](../../sdk/models/operations/deletebucketsbucketkeyrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.DeleteBucketsBucketKeySecurity](../../sdk/models/operations/deletebucketsbucketkeysecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.DeleteBucketsBucketKeyResponse](../../sdk/models/operations/deletebucketsbucketkeyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getBuckets

Returns a list of buckets.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetBucketsSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: GetBucketsSecurity = {
  runscopeAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
};

  const res = await sdk.buckets.getBuckets(operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `security`                                                                         | [operations.GetBucketsSecurity](../../sdk/models/operations/getbucketssecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetBucketsResponse](../../sdk/models/operations/getbucketsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getBucketsBucketKey

Returns a single bucket resource.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";

async function run() {
  const sdk = new RunscopeAPI({
    runscopeAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.buckets.getBucketsBucketKey({
    bucketKey: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetBucketsBucketKeyRequest](../../sdk/models/operations/getbucketsbucketkeyrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetBucketsBucketKeyResponse](../../sdk/models/operations/getbucketsbucketkeyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postBuckets

Create a new bucket

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PostBucketsSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: PostBucketsSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.buckets.postBuckets({
    name: "string",
    teamId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.NewBucket](../../sdk/models/shared/newbucket.md)                             | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.PostBucketsSecurity](../../sdk/models/operations/postbucketssecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PostBucketsResponse](../../sdk/models/operations/postbucketsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
