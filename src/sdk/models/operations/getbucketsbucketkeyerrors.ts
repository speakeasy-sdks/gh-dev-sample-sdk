/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetBucketsBucketKeyErrorsRequest extends SpeakeasyBase {
    /**
     * Only return messages before the given Unix timestamp
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
    before?: number;

    /**
     * Unique identifier for a bucket
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucketKey" })
    bucketKey: string;

    /**
     * Maxiumum number of messages to return. Default 50, max 1000.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
    count?: number;

    /**
     * Only return messages after the given Unix timestamp
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
    since?: number;
}

export class GetBucketsBucketKeyErrorsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Unexpected error
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

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
