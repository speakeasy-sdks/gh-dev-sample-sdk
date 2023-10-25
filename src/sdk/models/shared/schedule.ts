/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Schedule extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "environment_id" })
    environmentId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "exported_at" })
    exportedAt?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "interval" })
    interval?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "note" })
    note?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}