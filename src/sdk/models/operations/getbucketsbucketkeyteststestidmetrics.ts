/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetBucketsBucketKeyTestsTestIdMetricsSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    runscopeAuth: string;
}

export class GetBucketsBucketKeyTestsTestIdMetricsRequest extends SpeakeasyBase {
    /**
     * Unique identifier for a bucket
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucketKey" })
    bucketKey: string;

    /**
     * Unique identifier for a test
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=testId" })
    testId: string;
}

export class GetBucketsBucketKeyTestsTestIdMetricsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * List of average response times and additional performance metrics belonging to this test.
     */
    @SpeakeasyMetadata()
    metrics?: shared.Metrics;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
