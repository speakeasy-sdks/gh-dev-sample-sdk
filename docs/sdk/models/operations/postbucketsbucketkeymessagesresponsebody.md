# PostBucketsBucketKeyMessagesResponseBody

The response includes a list of result objects for the message(s) submitted. It will always return an array, even if only one message was created. The order of the result objects corresponds to the order of messages submitted.


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [operations.Data](../../../sdk/models/operations/data.md)[] | :heavy_minus_sign:                                          | N/A                                                         |
| `meta`                                                      | [operations.Meta](../../../sdk/models/operations/meta.md)   | :heavy_minus_sign:                                          | N/A                                                         |