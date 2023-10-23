/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Agent extends SpeakeasyBase {
    /**
     * The unique identifier for this agent.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "agent_id" })
    agentId?: string;

    /**
     * The name of the agent set in the configuration file or with the command line flag.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The version for this agent.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;
}
