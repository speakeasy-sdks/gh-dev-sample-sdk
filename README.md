# Runscope-API

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/gh-dev-sample-sdk.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/gh-dev-sample-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README
<!-- Start SDK Installation -->
# SDK Installation

## NPM

```bash
npm add https://github.com/speakeasy-sdks/gh-dev-sample-sdk
```

## Yarn

```bash
yarn add https://github.com/speakeasy-sdks/gh-dev-sample-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->


```typescript
import { RunscopeAPI } from "Runscope-API";
import { GetAccountSecurity } from "Runscope-API/dist/sdk/models/operations";

(async () => {
    const sdk = new RunscopeAPI();
    const operationSecurity: GetAccountSecurity = "";

    const res = await sdk.account.getAccount(operationSecurity);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
# Available Resources and Operations


## [account](docs/sdks/account/README.md)

* [getAccount](docs/sdks/account/README.md#getaccount) - Account Resource
* [getTeamsTeamIdAgents](docs/sdks/account/README.md#getteamsteamidagents) - Team agents list
* [getTeamsTeamIdIntegrations](docs/sdks/account/README.md#getteamsteamidintegrations) - Team integrations list
* [getTeamsTeamIdPeople](docs/sdks/account/README.md#getteamsteamidpeople) - Teams Resource

## [buckets](docs/sdks/buckets/README.md)

* [deleteBucketsBucketKey](docs/sdks/buckets/README.md#deletebucketsbucketkey) - Delete a single bucket resource.
* [getBuckets](docs/sdks/buckets/README.md#getbuckets) - Returns a list of buckets.
* [getBucketsBucketKey](docs/sdks/buckets/README.md#getbucketsbucketkey) - Returns a single bucket resource.
* [postBuckets](docs/sdks/buckets/README.md#postbuckets) - Create a new bucket

## [messages](docs/sdks/messages/README.md)

* [deleteBucketsBucketKeyMessages](docs/sdks/messages/README.md#deletebucketsbucketkeymessages) - Clear a bucket (remove all messages).
* [getBucketsBucketKeyErrors](docs/sdks/messages/README.md#getbucketsbucketkeyerrors) - Retrieve a list of error messages in a bucket
* [getBucketsBucketKeyMessages](docs/sdks/messages/README.md#getbucketsbucketkeymessages) - Retrieve a list of messages in a bucket
* [getBucketsBucketKeyMessagesMessageId](docs/sdks/messages/README.md#getbucketsbucketkeymessagesmessageid) - Retrieve the details for a single message.
* [postBucketsBucketKeyMessages](docs/sdks/messages/README.md#postbucketsbucketkeymessages) - Create a message

## [sharedEnvironments](docs/sdks/sharedenvironments/README.md)

* [getBucketsBucketKeyEnvironments](docs/sdks/sharedenvironments/README.md#getbucketsbucketkeyenvironments) - Returns list of shared environments for a specified bucket.
* [postBucketsBucketKeyEnvironments](docs/sdks/sharedenvironments/README.md#postbucketsbucketkeyenvironments) - Create new shared environment.
* [putBucketsBucketKeyEnvironmentsEnvironmentId](docs/sdks/sharedenvironments/README.md#putbucketsbucketkeyenvironmentsenvironmentid) - Update the details of a shared environment.

## [testEnvironments](docs/sdks/testenvironments/README.md)

* [getBucketsBucketKeyTestsTestIdEnvironments](docs/sdks/testenvironments/README.md#getbucketsbucketkeyteststestidenvironments) - Return details of the test's environments (only those that belong to the specified test)
* [postBucketsBucketKeyTestsTestIdEnvironments](docs/sdks/testenvironments/README.md#postbucketsbucketkeyteststestidenvironments) - Create new test environment.
* [putBucketsBucketKeyTestsTestIdEnvironmentsEnvironmentId](docs/sdks/testenvironments/README.md#putbucketsbucketkeyteststestidenvironmentsenvironmentid) - Update the details of a test environment.

## [testSteps](docs/sdks/teststeps/README.md)

* [deleteBucketsBucketKeyTestsTestIdStepsStepId](docs/sdks/teststeps/README.md#deletebucketsbucketkeyteststestidstepsstepid) - Delete a step from a test.
* [getBucketsBucketKeyTestsTestIdSteps](docs/sdks/teststeps/README.md#getbucketsbucketkeyteststestidsteps) - List test steps for a test.
* [postBucketsBucketKeyTestsTestIdSteps](docs/sdks/teststeps/README.md#postbucketsbucketkeyteststestidsteps) - Add new test step.
* [putBucketsBucketKeyTestsTestIdStepsStepId](docs/sdks/teststeps/README.md#putbucketsbucketkeyteststestidstepsstepid) - Update the details of a single test step.

## [tests](docs/sdks/tests/README.md)

* [deleteBucketsBucketKeyTestsTestId](docs/sdks/tests/README.md#deletebucketsbucketkeyteststestid) - Delete a test, including all steps, schedules, test-specific environments and results.
* [getBucketsBucketKeyTests](docs/sdks/tests/README.md#getbucketsbucketkeytests) - Returns a list of tests.
* [getBucketsBucketKeyTestsTestId](docs/sdks/tests/README.md#getbucketsbucketkeyteststestid) - Retrieve the details of a given test by ID.
* [getBucketsBucketKeyTestsTestIdMetrics](docs/sdks/tests/README.md#getbucketsbucketkeyteststestidmetrics) - Return details of the test metrics for the specified timeframe.
* [postBucketsBucketKeyTests](docs/sdks/tests/README.md#postbucketsbucketkeytests) - Create a test.
* [putBucketsBucketKeyTestsTestId](docs/sdks/tests/README.md#putbucketsbucketkeyteststestid) - Modify a test's name, description, default environment and its steps. To modify other individual properties of a test, make requests to the steps, environments, and schedules subresources of the test.
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->



<!-- End Dev Containers -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
