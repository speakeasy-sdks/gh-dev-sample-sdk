/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Meta extends SpeakeasyBase {
    /**
     * Success or failure status of call.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}
