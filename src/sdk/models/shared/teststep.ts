/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TestStep extends SpeakeasyBase {
    /**
     * Type of test step -- request, pause, condition, ghost-inspector, or subtest.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "step_type" })
    stepType?: string;
}