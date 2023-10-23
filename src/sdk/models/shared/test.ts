/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class TestCreatedBy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class TestLastRun extends SpeakeasyBase {}

export class Test extends SpeakeasyBase {
    /**
     * The date the test was created in seconds (Unix time stamp format).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "created_by" })
    @Type(() => TestCreatedBy)
    createdBy?: TestCreatedBy;

    @SpeakeasyMetadata()
    @Expose({ name: "default_environment_id" })
    defaultEnvironmentId?: string;

    /**
     * The description for the test.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_run" })
    @Type(() => TestLastRun)
    lastRun?: TestLastRun;

    /**
     * The name for the test.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "trigger_url" })
    triggerUrl?: string;
}
