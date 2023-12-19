# Account
(*account*)

### Available Operations

* [getAccount](#getaccount) - Account Resource
* [getTeamsTeamIdAgents](#getteamsteamidagents) - Team agents list
* [getTeamsTeamIdIntegrations](#getteamsteamidintegrations) - Team integrations list
* [getTeamsTeamIdPeople](#getteamsteamidpeople) - Teams Resource

## getAccount

Information about the authorized account.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetAccountSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: GetAccountSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.account.getAccount(operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `security`                                                                         | [operations.GetAccountSecurity](../../sdk/models/operations/getaccountsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetAccountResponse](../../sdk/models/operations/getaccountresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getTeamsTeamIdAgents

List currently connected agents associated with a given team.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetTeamsTeamIdAgentsSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: GetTeamsTeamIdAgentsSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.account.getTeamsTeamIdAgents({
    teamId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetTeamsTeamIdAgentsRequest](../../sdk/models/operations/getteamsteamidagentsrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.GetTeamsTeamIdAgentsSecurity](../../sdk/models/operations/getteamsteamidagentssecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetTeamsTeamIdAgentsResponse](../../sdk/models/operations/getteamsteamidagentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getTeamsTeamIdIntegrations

Returns a list of integrations configured for the team.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetTeamsTeamIdIntegrationsSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: GetTeamsTeamIdIntegrationsSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.account.getTeamsTeamIdIntegrations({
    teamId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetTeamsTeamIdIntegrationsRequest](../../sdk/models/operations/getteamsteamidintegrationsrequest.md)   | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `security`                                                                                                         | [operations.GetTeamsTeamIdIntegrationsSecurity](../../sdk/models/operations/getteamsteamidintegrationssecurity.md) | :heavy_check_mark:                                                                                                 | The security requirements to use for the request.                                                                  |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetTeamsTeamIdIntegrationsResponse](../../sdk/models/operations/getteamsteamidintegrationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getTeamsTeamIdPeople

List people and integrations associated with a given team.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetTeamsTeamIdPeopleSecurity } from "Runscope-API/dist/sdk/models/operations";

async function run() {
  const sdk = new RunscopeAPI();
const operationSecurity: GetTeamsTeamIdPeopleSecurity = "Bearer <YOUR_ACCESS_TOKEN_HERE>";

  const res = await sdk.account.getTeamsTeamIdPeople({
    teamId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetTeamsTeamIdPeopleRequest](../../sdk/models/operations/getteamsteamidpeoplerequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.GetTeamsTeamIdPeopleSecurity](../../sdk/models/operations/getteamsteamidpeoplesecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetTeamsTeamIdPeopleResponse](../../sdk/models/operations/getteamsteamidpeopleresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
