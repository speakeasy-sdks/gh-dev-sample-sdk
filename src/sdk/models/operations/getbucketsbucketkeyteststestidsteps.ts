/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetBucketsBucketKeyTestsTestIdStepsSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    runscopeAuth: string;
}

export class GetBucketsBucketKeyTestsTestIdStepsRequest extends SpeakeasyBase {
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

export class GetBucketsBucketKeyTestsTestIdStepsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
