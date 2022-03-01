/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/registry/v1alpha1/search.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
//
// Copyright 2020-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import {Visibility} from "./repository_pb.js";
import {PluginVisibility} from "./plugin_pb.js";

/**
 * @generated from enum buf.alpha.registry.v1alpha1.SearchFilter
 */
export enum SearchFilter {

    /**
     * @generated from enum value: SEARCH_FILTER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,

    /**
     * @generated from enum value: SEARCH_FILTER_USER = 1;
     */
    USER = 1,

    /**
     * @generated from enum value: SEARCH_FILTER_ORGANIZATION = 2;
     */
    ORGANIZATION = 2,

    /**
     * @generated from enum value: SEARCH_FILTER_REPOSITORY = 3;
     */
    REPOSITORY = 3,

    /**
     * @generated from enum value: SEARCH_FILTER_PLUGIN = 4;
     */
    PLUGIN = 4,

    /**
     * @generated from enum value: SEARCH_FILTER_TEMPLATE = 5;
     */
    TEMPLATE = 5,

    /**
     * @generated from enum value: SEARCH_FILTER_TEAM = 6;
     */
    TEAM = 6,

}

// Retrieve enum metadata with: proto3.getEnumType(SearchFilter)
proto3.util.setEnumType(SearchFilter, "buf.alpha.registry.v1alpha1.SearchFilter", [
    {no: 0, name: "SEARCH_FILTER_UNSPECIFIED"},
    {no: 1, name: "SEARCH_FILTER_USER"},
    {no: 2, name: "SEARCH_FILTER_ORGANIZATION"},
    {no: 3, name: "SEARCH_FILTER_REPOSITORY"},
    {no: 4, name: "SEARCH_FILTER_PLUGIN"},
    {no: 5, name: "SEARCH_FILTER_TEMPLATE"},
    {no: 6, name: "SEARCH_FILTER_TEAM"},
]);

/**
 * @generated from message buf.alpha.registry.v1alpha1.RepositorySearchResult
 */
export class RepositorySearchResult extends Message<RepositorySearchResult> {

    /**
     * @generated from field: string id = 1;
     */
    id = "";

    /**
     * @generated from field: string name = 2;
     */
    name = "";

    /**
     * The name of the user or organization
     * who is the owner of this repository.
     *
     * @generated from field: string owner = 3;
     */
    owner = "";

    /**
     * The visibility of the repository.
     *
     * @generated from field: buf.alpha.registry.v1alpha1.Visibility visibility = 4;
     */
    visibility = Visibility.UNSPECIFIED;

    /**
     * @generated from field: bool deprecated = 5;
     */
    deprecated = false;

    constructor(data?: PartialMessage<RepositorySearchResult>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.RepositorySearchResult";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 3, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 4, name: "visibility", kind: "enum", T: proto3.getEnumType(Visibility)},
        {no: 5, name: "deprecated", kind: "scalar", T: 8 /* ScalarType.BOOL */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RepositorySearchResult {
        return new RepositorySearchResult().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RepositorySearchResult {
        return new RepositorySearchResult().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RepositorySearchResult {
        return new RepositorySearchResult().fromJsonString(jsonString, options);
    }

    static equals(a: RepositorySearchResult | PlainMessage<RepositorySearchResult> | undefined, b: RepositorySearchResult | PlainMessage<RepositorySearchResult> | undefined): boolean {
        return proto3.util.equals(RepositorySearchResult, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.OrganizationSearchResult
 */
export class OrganizationSearchResult extends Message<OrganizationSearchResult> {

    /**
     * @generated from field: string id = 1;
     */
    id = "";

    /**
     * @generated from field: string name = 2;
     */
    name = "";

    constructor(data?: PartialMessage<OrganizationSearchResult>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.OrganizationSearchResult";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrganizationSearchResult {
        return new OrganizationSearchResult().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrganizationSearchResult {
        return new OrganizationSearchResult().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrganizationSearchResult {
        return new OrganizationSearchResult().fromJsonString(jsonString, options);
    }

    static equals(a: OrganizationSearchResult | PlainMessage<OrganizationSearchResult> | undefined, b: OrganizationSearchResult | PlainMessage<OrganizationSearchResult> | undefined): boolean {
        return proto3.util.equals(OrganizationSearchResult, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.UserSearchResult
 */
export class UserSearchResult extends Message<UserSearchResult> {

    /**
     * @generated from field: string id = 1;
     */
    id = "";

    /**
     * @generated from field: string username = 2;
     */
    username = "";

    /**
     * @generated from field: bool deactivated = 3;
     */
    deactivated = false;

    constructor(data?: PartialMessage<UserSearchResult>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.UserSearchResult";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 3, name: "deactivated", kind: "scalar", T: 8 /* ScalarType.BOOL */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserSearchResult {
        return new UserSearchResult().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserSearchResult {
        return new UserSearchResult().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserSearchResult {
        return new UserSearchResult().fromJsonString(jsonString, options);
    }

    static equals(a: UserSearchResult | PlainMessage<UserSearchResult> | undefined, b: UserSearchResult | PlainMessage<UserSearchResult> | undefined): boolean {
        return proto3.util.equals(UserSearchResult, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.TeamSearchResult
 */
export class TeamSearchResult extends Message<TeamSearchResult> {

    /**
     * @generated from field: string id = 1;
     */
    id = "";

    /**
     * @generated from field: string name = 2;
     */
    name = "";

    /**
     * @generated from field: string organization_name = 3;
     */
    organizationName = "";

    constructor(data?: PartialMessage<TeamSearchResult>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.TeamSearchResult";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 3, name: "organization_name", kind: "scalar", T: 9 /* ScalarType.STRING */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamSearchResult {
        return new TeamSearchResult().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamSearchResult {
        return new TeamSearchResult().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamSearchResult {
        return new TeamSearchResult().fromJsonString(jsonString, options);
    }

    static equals(a: TeamSearchResult | PlainMessage<TeamSearchResult> | undefined, b: TeamSearchResult | PlainMessage<TeamSearchResult> | undefined): boolean {
        return proto3.util.equals(TeamSearchResult, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.PluginSearchResult
 */
export class PluginSearchResult extends Message<PluginSearchResult> {

    /**
     * @generated from field: string id = 1;
     */
    id = "";

    /**
     * @generated from field: string name = 2;
     */
    name = "";

    /**
     * The name of the user or organization
     * who is the owner of this plugin.
     *
     * @generated from field: string owner = 3;
     */
    owner = "";

    /**
     * The visibility of the plugin.
     *
     * @generated from field: buf.alpha.registry.v1alpha1.PluginVisibility visibility = 4;
     */
    visibility = PluginVisibility.UNSPECIFIED;

    /**
     * @generated from field: bool deprecated = 5;
     */
    deprecated = false;

    constructor(data?: PartialMessage<PluginSearchResult>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.PluginSearchResult";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 3, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 4, name: "visibility", kind: "enum", T: proto3.getEnumType(PluginVisibility)},
        {no: 5, name: "deprecated", kind: "scalar", T: 8 /* ScalarType.BOOL */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PluginSearchResult {
        return new PluginSearchResult().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PluginSearchResult {
        return new PluginSearchResult().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PluginSearchResult {
        return new PluginSearchResult().fromJsonString(jsonString, options);
    }

    static equals(a: PluginSearchResult | PlainMessage<PluginSearchResult> | undefined, b: PluginSearchResult | PlainMessage<PluginSearchResult> | undefined): boolean {
        return proto3.util.equals(PluginSearchResult, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.TemplateSearchResult
 */
export class TemplateSearchResult extends Message<TemplateSearchResult> {

    /**
     * @generated from field: string id = 1;
     */
    id = "";

    /**
     * @generated from field: string name = 2;
     */
    name = "";

    /**
     * The name of the user or organization
     * who is the owner of this template.
     *
     * @generated from field: string owner = 3;
     */
    owner = "";

    /**
     * The visibility of the template.
     *
     * @generated from field: buf.alpha.registry.v1alpha1.PluginVisibility visibility = 4;
     */
    visibility = PluginVisibility.UNSPECIFIED;

    /**
     * @generated from field: bool deprecated = 5;
     */
    deprecated = false;

    constructor(data?: PartialMessage<TemplateSearchResult>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.TemplateSearchResult";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 3, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 4, name: "visibility", kind: "enum", T: proto3.getEnumType(PluginVisibility)},
        {no: 5, name: "deprecated", kind: "scalar", T: 8 /* ScalarType.BOOL */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TemplateSearchResult {
        return new TemplateSearchResult().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TemplateSearchResult {
        return new TemplateSearchResult().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TemplateSearchResult {
        return new TemplateSearchResult().fromJsonString(jsonString, options);
    }

    static equals(a: TemplateSearchResult | PlainMessage<TemplateSearchResult> | undefined, b: TemplateSearchResult | PlainMessage<TemplateSearchResult> | undefined): boolean {
        return proto3.util.equals(TemplateSearchResult, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.SearchResult
 */
export class SearchResult extends Message<SearchResult> {

    /**
     * @generated from oneof buf.alpha.registry.v1alpha1.SearchResult.item
     */
    item: {
        /**
         * @generated from field: buf.alpha.registry.v1alpha1.RepositorySearchResult repository = 1;
         */
        value: RepositorySearchResult;
        case: "repository";
    } | {
        /**
         * @generated from field: buf.alpha.registry.v1alpha1.OrganizationSearchResult organization = 2;
         */
        value: OrganizationSearchResult;
        case: "organization";
    } | {
        /**
         * @generated from field: buf.alpha.registry.v1alpha1.UserSearchResult user = 3;
         */
        value: UserSearchResult;
        case: "user";
    } | {
        /**
         * @generated from field: buf.alpha.registry.v1alpha1.TeamSearchResult team = 4;
         */
        value: TeamSearchResult;
        case: "team";
    } | {
        /**
         * @generated from field: buf.alpha.registry.v1alpha1.PluginSearchResult plugin = 5;
         */
        value: PluginSearchResult;
        case: "plugin";
    } | {
        /**
         * @generated from field: buf.alpha.registry.v1alpha1.TemplateSearchResult template = 6;
         */
        value: TemplateSearchResult;
        case: "template";
    } | { case: undefined; value?: undefined } = { case: undefined };

    constructor(data?: PartialMessage<SearchResult>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.SearchResult";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "repository", kind: "message", T: RepositorySearchResult, oneof: "item"},
        {no: 2, name: "organization", kind: "message", T: OrganizationSearchResult, oneof: "item"},
        {no: 3, name: "user", kind: "message", T: UserSearchResult, oneof: "item"},
        {no: 4, name: "team", kind: "message", T: TeamSearchResult, oneof: "item"},
        {no: 5, name: "plugin", kind: "message", T: PluginSearchResult, oneof: "item"},
        {no: 6, name: "template", kind: "message", T: TemplateSearchResult, oneof: "item"},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchResult {
        return new SearchResult().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchResult {
        return new SearchResult().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchResult {
        return new SearchResult().fromJsonString(jsonString, options);
    }

    static equals(a: SearchResult | PlainMessage<SearchResult> | undefined, b: SearchResult | PlainMessage<SearchResult> | undefined): boolean {
        return proto3.util.equals(SearchResult, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.SearchRequest
 */
export class SearchRequest extends Message<SearchRequest> {

    /**
     * The search string.
     *
     * @generated from field: string query = 1;
     */
    query = "";

    /**
     * @generated from field: uint32 page_size = 2;
     */
    pageSize = 0;

    /**
     * The first page is returned if this is 0.
     *
     * @generated from field: uint32 page_token = 3;
     */
    pageToken = 0;

    /**
     * Empty list means show all. Supplying one or more enums will 
     * limit the search to only the requested resources. 
     * Supplying all possible enums is equivalent to empty list of filters.
     *
     * @generated from field: repeated buf.alpha.registry.v1alpha1.SearchFilter filters = 4;
     */
    filters: SearchFilter[] = [];

    constructor(data?: PartialMessage<SearchRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.SearchRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */},
        {no: 3, name: "page_token", kind: "scalar", T: 13 /* ScalarType.UINT32 */},
        {no: 4, name: "filters", kind: "enum", T: proto3.getEnumType(SearchFilter), repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchRequest {
        return new SearchRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchRequest {
        return new SearchRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchRequest {
        return new SearchRequest().fromJsonString(jsonString, options);
    }

    static equals(a: SearchRequest | PlainMessage<SearchRequest> | undefined, b: SearchRequest | PlainMessage<SearchRequest> | undefined): boolean {
        return proto3.util.equals(SearchRequest, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.SearchResponse
 */
export class SearchResponse extends Message<SearchResponse> {

    /**
     * @generated from field: repeated buf.alpha.registry.v1alpha1.SearchResult search_results = 1;
     */
    searchResults: SearchResult[] = [];

    /**
     * There are no more pages if this is 0.
     *
     * @generated from field: uint32 next_page_token = 2;
     */
    nextPageToken = 0;

    constructor(data?: PartialMessage<SearchResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.SearchResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "search_results", kind: "message", T: SearchResult, repeated: true},
        {no: 2, name: "next_page_token", kind: "scalar", T: 13 /* ScalarType.UINT32 */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchResponse {
        return new SearchResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchResponse {
        return new SearchResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchResponse {
        return new SearchResponse().fromJsonString(jsonString, options);
    }

    static equals(a: SearchResponse | PlainMessage<SearchResponse> | undefined, b: SearchResponse | PlainMessage<SearchResponse> | undefined): boolean {
        return proto3.util.equals(SearchResponse, a, b);
    }

}


