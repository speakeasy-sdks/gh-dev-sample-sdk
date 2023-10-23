# GetBucketsBucketKeyMessagesRequest


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `before`                                                     | *number*                                                     | :heavy_minus_sign:                                           | Only return messages before the given Unix timestamp         |
| `bucketKey`                                                  | *string*                                                     | :heavy_check_mark:                                           | Unique identifier for a bucket                               |
| `count`                                                      | *number*                                                     | :heavy_minus_sign:                                           | Maxiumum number of messages to return. Default 50, max 1000. |
| `since`                                                      | *number*                                                     | :heavy_minus_sign:                                           | Only return messages after the given Unix timestamp          |