/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetTeamsTeamIdIntegrationsSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    runscopeAuth: string;
}

export class GetTeamsTeamIdIntegrationsRequest extends SpeakeasyBase {
    /**
     * Unique identifier for team
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
    teamId: string;
}

/**
 * List of integrations associated with the team.
 */
export class GetTeamsTeamIdIntegrationsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.Integration })
    @Expose({ name: "data" })
    @Type(() => shared.Integration)
    data?: shared.Integration[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Meta)
    meta?: shared.Meta;
}

export class GetTeamsTeamIdIntegrationsResponse extends SpeakeasyBase {
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
    rawResponse?: AxiosResponse;

    /**
     * List of integrations associated with the team.
     */
    @SpeakeasyMetadata()
    object?: GetTeamsTeamIdIntegrationsResponseBody;
}
