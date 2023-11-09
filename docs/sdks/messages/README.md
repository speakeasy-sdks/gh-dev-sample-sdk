# Messages
(*messages*)

### Available Operations

* [deleteBucketsBucketKeyMessages](#deletebucketsbucketkeymessages) - Clear a bucket (remove all messages).
* [getBucketsBucketKeyErrors](#getbucketsbucketkeyerrors) - Retrieve a list of error messages in a bucket
* [getBucketsBucketKeyMessages](#getbucketsbucketkeymessages) - Retrieve a list of messages in a bucket
* [getBucketsBucketKeyMessagesMessageId](#getbucketsbucketkeymessagesmessageid) - Retrieve the details for a single message.
* [postBucketsBucketKeyMessages](#postbucketsbucketkeymessages) - Create a message

## deleteBucketsBucketKeyMessages

Clear a bucket (remove all messages).

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { DeleteBucketsBucketKeyMessagesSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: DeleteBucketsBucketKeyMessagesSecurity = "";

  const res = await sdk.messages.deleteBucketsBucketKeyMessages({
    bucketKey: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.DeleteBucketsBucketKeyMessagesRequest](../../sdk/models/operations/deletebucketsbucketkeymessagesrequest.md)   | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `security`                                                                                                                 | [operations.DeleteBucketsBucketKeyMessagesSecurity](../../sdk/models/operations/deletebucketsbucketkeymessagessecurity.md) | :heavy_check_mark:                                                                                                         | The security requirements to use for the request.                                                                          |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.DeleteBucketsBucketKeyMessagesResponse](../../sdk/models/operations/deletebucketsbucketkeymessagesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getBucketsBucketKeyErrors

Retrieve a list of error messages in a bucket

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";

(async() => {
  const sdk = new RunscopeAPI({
    runscopeAuth: "",
  });

  const res = await sdk.messages.getBucketsBucketKeyErrors({
    bucketKey: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetBucketsBucketKeyErrorsRequest](../../sdk/models/operations/getbucketsbucketkeyerrorsrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetBucketsBucketKeyErrorsResponse](../../sdk/models/operations/getbucketsbucketkeyerrorsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getBucketsBucketKeyMessages

Retrieve a list of messages in a bucket

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";

(async() => {
  const sdk = new RunscopeAPI({
    runscopeAuth: "",
  });

  const res = await sdk.messages.getBucketsBucketKeyMessages({
    bucketKey: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetBucketsBucketKeyMessagesRequest](../../sdk/models/operations/getbucketsbucketkeymessagesrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetBucketsBucketKeyMessagesResponse](../../sdk/models/operations/getbucketsbucketkeymessagesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getBucketsBucketKeyMessagesMessageId

Retrieve the details for a single message.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";

(async() => {
  const sdk = new RunscopeAPI({
    runscopeAuth: "",
  });

  const res = await sdk.messages.getBucketsBucketKeyMessagesMessageId({
    bucketKey: "string",
    messageId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.GetBucketsBucketKeyMessagesMessageIdRequest](../../sdk/models/operations/getbucketsbucketkeymessagesmessageidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.GetBucketsBucketKeyMessagesMessageIdResponse](../../sdk/models/operations/getbucketsbucketkeymessagesmessageidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postBucketsBucketKeyMessages

Create a message

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { PostBucketsBucketKeyMessagesSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: PostBucketsBucketKeyMessagesSecurity = "";

  const res = await sdk.messages.postBucketsBucketKeyMessages({
    newMessage: {
      request: {},
      response: {},
    },
    bucketKey: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PostBucketsBucketKeyMessagesRequest](../../sdk/models/operations/postbucketsbucketkeymessagesrequest.md)   | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `security`                                                                                                             | [operations.PostBucketsBucketKeyMessagesSecurity](../../sdk/models/operations/postbucketsbucketkeymessagessecurity.md) | :heavy_check_mark:                                                                                                     | The security requirements to use for the request.                                                                      |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PostBucketsBucketKeyMessagesResponse](../../sdk/models/operations/postbucketsbucketkeymessagesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
