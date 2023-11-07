# Account
(*.account*)

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

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: GetAccountSecurity = "";

  const res = await sdk.account.getAccount(operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `security`                                                                     | [operations.GetAccountSecurity](../../models/operations/getaccountsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetAccountResponse](../../models/operations/getaccountresponse.md)>**


## getTeamsTeamIdAgents

List currently connected agents associated with a given team.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetTeamsTeamIdAgentsSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: GetTeamsTeamIdAgentsSecurity = "";

  const res = await sdk.account.getTeamsTeamIdAgents({
    teamId: "string",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetTeamsTeamIdAgentsRequest](../../models/operations/getteamsteamidagentsrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.GetTeamsTeamIdAgentsSecurity](../../models/operations/getteamsteamidagentssecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetTeamsTeamIdAgentsResponse](../../models/operations/getteamsteamidagentsresponse.md)>**


## getTeamsTeamIdIntegrations

Returns a list of integrations configured for the team.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetTeamsTeamIdIntegrationsSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: GetTeamsTeamIdIntegrationsSecurity = "";

  const res = await sdk.account.getTeamsTeamIdIntegrations({
    teamId: "string",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetTeamsTeamIdIntegrationsRequest](../../models/operations/getteamsteamidintegrationsrequest.md)   | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.GetTeamsTeamIdIntegrationsSecurity](../../models/operations/getteamsteamidintegrationssecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetTeamsTeamIdIntegrationsResponse](../../models/operations/getteamsteamidintegrationsresponse.md)>**


## getTeamsTeamIdPeople

List people and integrations associated with a given team.

### Example Usage

```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetTeamsTeamIdPeopleSecurity } from "Runscope-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RunscopeAPI();
const operationSecurity: GetTeamsTeamIdPeopleSecurity = "";

  const res = await sdk.account.getTeamsTeamIdPeople({
    teamId: "string",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetTeamsTeamIdPeopleRequest](../../models/operations/getteamsteamidpeoplerequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.GetTeamsTeamIdPeopleSecurity](../../models/operations/getteamsteamidpeoplesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetTeamsTeamIdPeopleResponse](../../models/operations/getteamsteamidpeopleresponse.md)>**

