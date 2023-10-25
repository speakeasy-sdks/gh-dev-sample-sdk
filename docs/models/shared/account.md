# Account


## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `email`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | The email address for this account. Only present if authorized with the account:email scope. |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | The unique identifier for this account.                                                      |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The name of the person for this account.                                                     |
| `teams`                                                                                      | [Team](../../models/shared/team.md)[]                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |