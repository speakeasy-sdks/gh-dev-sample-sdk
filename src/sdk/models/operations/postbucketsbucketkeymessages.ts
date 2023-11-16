/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostBucketsBucketKeyMessagesSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    runscopeAuth: string;
}

export class PostBucketsBucketKeyMessagesRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    newMessage: shared.NewMessage;

    /**
     * Unique identifier for a bucket
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucketKey" })
    bucketKey: string;
}

/**
 * An object representing errors for this item. Only present if status is error, otherwise this will be null.
 */
export class ErrorT extends SpeakeasyBase {
    /**
     * A numeric error code for the specific problem we encountered with this message. (error status only)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: number;

    /**
     * A description of the problem we encountered with this message. (error status only)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    /**
     * A link to more help about the warning. (error status only)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "more_info" })
    moreInfo?: string;
}

/**
 * An object representing warnings (non-fatal warnings) for this item. Only present if status is warning, otherwise this will be null.
 */
export class Warning extends SpeakeasyBase {
    /**
     * A numeric error code for the specific problem we encountered with this message. (warning status only)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: number;

    /**
     * A description of the problem we encountered with this message. (warning status only)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    /**
     * A link to more help about the warning. (warning status only)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "more_info" })
    moreInfo?: string;
}

export class Data extends SpeakeasyBase {
    /**
     * An object representing errors for this item. Only present if status is error, otherwise this will be null.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    @Type(() => ErrorT)
    error?: ErrorT;

    /**
     * One of the following: success, error, or warning.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;

    /**
     * If the message had a unique_identifier, it will be returned in this field, to help match the responses to the messages that were submitted.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unique_identifier" })
    uniqueIdentifier?: string;

    /**
     * This message's Runscope-generated ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;

    /**
     * An object representing warnings (non-fatal warnings) for this item. Only present if status is warning, otherwise this will be null.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "warning" })
    @Type(() => Warning)
    warning?: Warning;
}

export class Meta extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error_count" })
    errorCount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "succcess_count" })
    succcessCount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "warning_count" })
    warningCount?: number;
}

/**
 * The response includes a list of result objects for the message(s) submitted. It will always return an array, even if only one message was created. The order of the result objects corresponds to the order of messages submitted.
 */
export class PostBucketsBucketKeyMessagesResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Data })
    @Expose({ name: "data" })
    @Type(() => Data)
    data?: Data[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => Meta)
    meta?: Meta;
}

export class PostBucketsBucketKeyMessagesResponse extends SpeakeasyBase {
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

    /**
     * The response includes a list of result objects for the message(s) submitted. It will always return an array, even if only one message was created. The order of the result objects corresponds to the order of messages submitted.
     */
    @SpeakeasyMetadata()
    object?: PostBucketsBucketKeyMessagesResponseBody;
}
