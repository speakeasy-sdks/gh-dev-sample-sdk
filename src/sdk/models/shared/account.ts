/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Team } from "./team";
import { Expose, Type } from "class-transformer";

export class Account extends SpeakeasyBase {
    /**
     * The email address for this account. Only present if authorized with the account:email scope.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * The unique identifier for this account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The name of the person for this account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata({ elemType: Team })
    @Expose({ name: "teams" })
    @Type(() => Team)
    teams?: Team[];
}
