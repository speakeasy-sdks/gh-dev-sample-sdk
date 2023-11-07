# Messages
(*.messages*)

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

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.DeleteBucketsBucketKeyMessagesRequest](../../models/operations/deletebucketsbucketkeymessagesrequest.md)   | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `security`                                                                                                             | [operations.DeleteBucketsBucketKeyMessagesSecurity](../../models/operations/deletebucketsbucketkeymessagessecurity.md) | :heavy_check_mark:                                                                                                     | The security requirements to use for the request.                                                                      |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.DeleteBucketsBucketKeyMessagesResponse](../../models/operations/deletebucketsbucketkeymessagesresponse.md)>**


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

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetBucketsBucketKeyErrorsRequest](../../models/operations/getbucketsbucketkeyerrorsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetBucketsBucketKeyErrorsResponse](../../models/operations/getbucketsbucketkeyerrorsresponse.md)>**


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

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetBucketsBucketKeyMessagesRequest](../../models/operations/getbucketsbucketkeymessagesrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetBucketsBucketKeyMessagesResponse](../../models/operations/getbucketsbucketkeymessagesresponse.md)>**


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

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetBucketsBucketKeyMessagesMessageIdRequest](../../models/operations/getbucketsbucketkeymessagesmessageidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetBucketsBucketKeyMessagesMessageIdResponse](../../models/operations/getbucketsbucketkeymessagesmessageidresponse.md)>**


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

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PostBucketsBucketKeyMessagesRequest](../../models/operations/postbucketsbucketkeymessagesrequest.md)   | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `security`                                                                                                         | [operations.PostBucketsBucketKeyMessagesSecurity](../../models/operations/postbucketsbucketkeymessagessecurity.md) | :heavy_check_mark:                                                                                                 | The security requirements to use for the request.                                                                  |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PostBucketsBucketKeyMessagesResponse](../../models/operations/postbucketsbucketkeymessagesresponse.md)>**

