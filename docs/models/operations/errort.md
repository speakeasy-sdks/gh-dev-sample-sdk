# ErrorT

An object representing errors for this item. Only present if status is error, otherwise this will be null.


## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `code`                                                                                              | *number*                                                                                            | :heavy_minus_sign:                                                                                  | A numeric error code for the specific problem we encountered with this message. (error status only) |
| `message`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | A description of the problem we encountered with this message. (error status only)                  |
| `moreInfo`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | A link to more help about the warning. (error status only)                                          |