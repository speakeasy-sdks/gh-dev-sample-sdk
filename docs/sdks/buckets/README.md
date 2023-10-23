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

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: DeleteBucketsBucketKeySecurity = "";

  const res = await sdk.buckets.deleteBucketsBucketKey({
    bucketKey: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.DeleteBucketsBucketKeyRequest](../../models/operations/deletebucketsbucketkeyrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.DeleteBucketsBucketKeySecurity](../../models/operations/deletebucketsbucketkeysecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.DeleteBucketsBucketKeyResponse](../../models/operations/deletebucketsbucketkeyresponse.md)>**


## getBuckets

Returns a list of buckets.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetBucketsSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: GetBucketsSecurity = {
  runscopeAuth: "",
};

  const res = await sdk.buckets.getBuckets(operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `security`                                                                     | [operations.GetBucketsSecurity](../../models/operations/getbucketssecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetBucketsResponse](../../models/operations/getbucketsresponse.md)>**


## getBucketsBucketKey

Returns a single bucket resource.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";

(async() => {
  const sdk = new RunscopeAPI({
    runscopeAuth: "",
  });

  const res = await sdk.buckets.getBucketsBucketKey({
    bucketKey: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetBucketsBucketKeyRequest](../../models/operations/getbucketsbucketkeyrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetBucketsBucketKeyResponse](../../models/operations/getbucketsbucketkeyresponse.md)>**


## postBuckets

Create a new bucket

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PostBucketsSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: PostBucketsSecurity = "";

  const res = await sdk.buckets.postBuckets({
    name: "string",
    teamId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.NewBucket](../../models/shared/newbucket.md)                             | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.PostBucketsSecurity](../../models/operations/postbucketssecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.PostBucketsResponse](../../models/operations/postbucketsresponse.md)>**

