/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostBucketsBucketKeyTestsSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    runscopeAuth: string;
}

export class PostBucketsBucketKeyTestsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    test: shared.Test;

    /**
     * Unique identifier for a bucket
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucketKey" })
    bucketKey: string;
}

/**
 * List of tests for this bucket
 */
export class PostBucketsBucketKeyTestsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.Test })
    @Expose({ name: "data" })
    @Type(() => shared.Test)
    data?: shared.Test[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Meta)
    meta?: shared.Meta;
}

export class PostBucketsBucketKeyTestsResponse extends SpeakeasyBase {
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
    rawResponse?: AxiosResponse;

    /**
     * List of tests for this bucket
     */
    @SpeakeasyMetadata()
    object?: PostBucketsBucketKeyTestsResponseBody;
}
