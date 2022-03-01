/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/registry/v1alpha1/recommendation.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
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
import {Message, Timestamp, proto3} from "@bufbuild/protobuf";

/**
 * RecommendedRepository is the information about a repository needed to link to
 * its owner page.
 *
 * @generated from message buf.alpha.registry.v1alpha1.RecommendedRepository
 */
export class RecommendedRepository extends Message<RecommendedRepository> {

    /**
     * @generated from field: string owner = 1;
     */
    owner = "";

    /**
     * @generated from field: string name = 2;
     */
    name = "";

    /**
     * @generated from field: google.protobuf.Timestamp create_time = 3;
     */
    createTime?: Timestamp;

    /**
     * @generated from field: string description = 4;
     */
    description = "";

    /**
     * @generated from field: string repository_id = 5;
     */
    repositoryId = "";

    constructor(data?: PartialMessage<RecommendedRepository>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.RecommendedRepository";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 3, name: "create_time", kind: "message", T: Timestamp},
        {no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 5, name: "repository_id", kind: "scalar", T: 9 /* ScalarType.STRING */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecommendedRepository {
        return new RecommendedRepository().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecommendedRepository {
        return new RecommendedRepository().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecommendedRepository {
        return new RecommendedRepository().fromJsonString(jsonString, options);
    }

    static equals(a: RecommendedRepository | PlainMessage<RecommendedRepository> | undefined, b: RecommendedRepository | PlainMessage<RecommendedRepository> | undefined): boolean {
        return proto3.util.equals(RecommendedRepository, a, b);
    }

}


/**
 * RecommendedTemplate is the information needed to recommend a template and link
 * to its owner page.
 *
 * @generated from message buf.alpha.registry.v1alpha1.RecommendedTemplate
 */
export class RecommendedTemplate extends Message<RecommendedTemplate> {

    /**
     * @generated from field: string owner = 1;
     */
    owner = "";

    /**
     * @generated from field: string name = 2;
     */
    name = "";

    /**
     * @generated from field: string description = 3;
     */
    description = "";

    /**
     * @generated from field: string template_id = 4;
     */
    templateId = "";

    constructor(data?: PartialMessage<RecommendedTemplate>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.RecommendedTemplate";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 4, name: "template_id", kind: "scalar", T: 9 /* ScalarType.STRING */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecommendedTemplate {
        return new RecommendedTemplate().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecommendedTemplate {
        return new RecommendedTemplate().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecommendedTemplate {
        return new RecommendedTemplate().fromJsonString(jsonString, options);
    }

    static equals(a: RecommendedTemplate | PlainMessage<RecommendedTemplate> | undefined, b: RecommendedTemplate | PlainMessage<RecommendedTemplate> | undefined): boolean {
        return proto3.util.equals(RecommendedTemplate, a, b);
    }

}


/**
 * SetRecommendedRepository is the information needed to configure a repository recommendation
 *
 * @generated from message buf.alpha.registry.v1alpha1.SetRecommendedRepository
 */
export class SetRecommendedRepository extends Message<SetRecommendedRepository> {

    /**
     * @generated from field: string repository_id = 1;
     */
    repositoryId = "";

    /**
     * @generated from field: string description = 2;
     */
    description = "";

    constructor(data?: PartialMessage<SetRecommendedRepository>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.SetRecommendedRepository";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "repository_id", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetRecommendedRepository {
        return new SetRecommendedRepository().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetRecommendedRepository {
        return new SetRecommendedRepository().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetRecommendedRepository {
        return new SetRecommendedRepository().fromJsonString(jsonString, options);
    }

    static equals(a: SetRecommendedRepository | PlainMessage<SetRecommendedRepository> | undefined, b: SetRecommendedRepository | PlainMessage<SetRecommendedRepository> | undefined): boolean {
        return proto3.util.equals(SetRecommendedRepository, a, b);
    }

}


/**
 * SetRecommendedTemplate is the information needed to configure a template recommendation
 *
 * @generated from message buf.alpha.registry.v1alpha1.SetRecommendedTemplate
 */
export class SetRecommendedTemplate extends Message<SetRecommendedTemplate> {

    /**
     * @generated from field: string template_id = 1;
     */
    templateId = "";

    /**
     * @generated from field: string description = 2;
     */
    description = "";

    constructor(data?: PartialMessage<SetRecommendedTemplate>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.SetRecommendedTemplate";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "template_id", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetRecommendedTemplate {
        return new SetRecommendedTemplate().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetRecommendedTemplate {
        return new SetRecommendedTemplate().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetRecommendedTemplate {
        return new SetRecommendedTemplate().fromJsonString(jsonString, options);
    }

    static equals(a: SetRecommendedTemplate | PlainMessage<SetRecommendedTemplate> | undefined, b: SetRecommendedTemplate | PlainMessage<SetRecommendedTemplate> | undefined): boolean {
        return proto3.util.equals(SetRecommendedTemplate, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.RecommendedRepositoriesRequest
 */
export class RecommendedRepositoriesRequest extends Message<RecommendedRepositoriesRequest> {

    constructor(data?: PartialMessage<RecommendedRepositoriesRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.RecommendedRepositoriesRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecommendedRepositoriesRequest {
        return new RecommendedRepositoriesRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecommendedRepositoriesRequest {
        return new RecommendedRepositoriesRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecommendedRepositoriesRequest {
        return new RecommendedRepositoriesRequest().fromJsonString(jsonString, options);
    }

    static equals(a: RecommendedRepositoriesRequest | PlainMessage<RecommendedRepositoriesRequest> | undefined, b: RecommendedRepositoriesRequest | PlainMessage<RecommendedRepositoriesRequest> | undefined): boolean {
        return proto3.util.equals(RecommendedRepositoriesRequest, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.RecommendedRepositoriesResponse
 */
export class RecommendedRepositoriesResponse extends Message<RecommendedRepositoriesResponse> {

    /**
     * @generated from field: repeated buf.alpha.registry.v1alpha1.RecommendedRepository repositories = 1;
     */
    repositories: RecommendedRepository[] = [];

    constructor(data?: PartialMessage<RecommendedRepositoriesResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.RecommendedRepositoriesResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "repositories", kind: "message", T: RecommendedRepository, repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecommendedRepositoriesResponse {
        return new RecommendedRepositoriesResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecommendedRepositoriesResponse {
        return new RecommendedRepositoriesResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecommendedRepositoriesResponse {
        return new RecommendedRepositoriesResponse().fromJsonString(jsonString, options);
    }

    static equals(a: RecommendedRepositoriesResponse | PlainMessage<RecommendedRepositoriesResponse> | undefined, b: RecommendedRepositoriesResponse | PlainMessage<RecommendedRepositoriesResponse> | undefined): boolean {
        return proto3.util.equals(RecommendedRepositoriesResponse, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.RecommendedTemplatesRequest
 */
export class RecommendedTemplatesRequest extends Message<RecommendedTemplatesRequest> {

    constructor(data?: PartialMessage<RecommendedTemplatesRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.RecommendedTemplatesRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecommendedTemplatesRequest {
        return new RecommendedTemplatesRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecommendedTemplatesRequest {
        return new RecommendedTemplatesRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecommendedTemplatesRequest {
        return new RecommendedTemplatesRequest().fromJsonString(jsonString, options);
    }

    static equals(a: RecommendedTemplatesRequest | PlainMessage<RecommendedTemplatesRequest> | undefined, b: RecommendedTemplatesRequest | PlainMessage<RecommendedTemplatesRequest> | undefined): boolean {
        return proto3.util.equals(RecommendedTemplatesRequest, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.RecommendedTemplatesResponse
 */
export class RecommendedTemplatesResponse extends Message<RecommendedTemplatesResponse> {

    /**
     * @generated from field: repeated buf.alpha.registry.v1alpha1.RecommendedTemplate templates = 1;
     */
    templates: RecommendedTemplate[] = [];

    constructor(data?: PartialMessage<RecommendedTemplatesResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.RecommendedTemplatesResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "templates", kind: "message", T: RecommendedTemplate, repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecommendedTemplatesResponse {
        return new RecommendedTemplatesResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecommendedTemplatesResponse {
        return new RecommendedTemplatesResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecommendedTemplatesResponse {
        return new RecommendedTemplatesResponse().fromJsonString(jsonString, options);
    }

    static equals(a: RecommendedTemplatesResponse | PlainMessage<RecommendedTemplatesResponse> | undefined, b: RecommendedTemplatesResponse | PlainMessage<RecommendedTemplatesResponse> | undefined): boolean {
        return proto3.util.equals(RecommendedTemplatesResponse, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRecommendedRepositoriesRequest
 */
export class ListRecommendedRepositoriesRequest extends Message<ListRecommendedRepositoriesRequest> {

    constructor(data?: PartialMessage<ListRecommendedRepositoriesRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.ListRecommendedRepositoriesRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRecommendedRepositoriesRequest {
        return new ListRecommendedRepositoriesRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRecommendedRepositoriesRequest {
        return new ListRecommendedRepositoriesRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRecommendedRepositoriesRequest {
        return new ListRecommendedRepositoriesRequest().fromJsonString(jsonString, options);
    }

    static equals(a: ListRecommendedRepositoriesRequest | PlainMessage<ListRecommendedRepositoriesRequest> | undefined, b: ListRecommendedRepositoriesRequest | PlainMessage<ListRecommendedRepositoriesRequest> | undefined): boolean {
        return proto3.util.equals(ListRecommendedRepositoriesRequest, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRecommendedRepositoriesResponse
 */
export class ListRecommendedRepositoriesResponse extends Message<ListRecommendedRepositoriesResponse> {

    /**
     * @generated from field: repeated buf.alpha.registry.v1alpha1.RecommendedRepository repositories = 1;
     */
    repositories: RecommendedRepository[] = [];

    constructor(data?: PartialMessage<ListRecommendedRepositoriesResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.ListRecommendedRepositoriesResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "repositories", kind: "message", T: RecommendedRepository, repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRecommendedRepositoriesResponse {
        return new ListRecommendedRepositoriesResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRecommendedRepositoriesResponse {
        return new ListRecommendedRepositoriesResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRecommendedRepositoriesResponse {
        return new ListRecommendedRepositoriesResponse().fromJsonString(jsonString, options);
    }

    static equals(a: ListRecommendedRepositoriesResponse | PlainMessage<ListRecommendedRepositoriesResponse> | undefined, b: ListRecommendedRepositoriesResponse | PlainMessage<ListRecommendedRepositoriesResponse> | undefined): boolean {
        return proto3.util.equals(ListRecommendedRepositoriesResponse, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRecommendedTemplatesRequest
 */
export class ListRecommendedTemplatesRequest extends Message<ListRecommendedTemplatesRequest> {

    constructor(data?: PartialMessage<ListRecommendedTemplatesRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.ListRecommendedTemplatesRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRecommendedTemplatesRequest {
        return new ListRecommendedTemplatesRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRecommendedTemplatesRequest {
        return new ListRecommendedTemplatesRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRecommendedTemplatesRequest {
        return new ListRecommendedTemplatesRequest().fromJsonString(jsonString, options);
    }

    static equals(a: ListRecommendedTemplatesRequest | PlainMessage<ListRecommendedTemplatesRequest> | undefined, b: ListRecommendedTemplatesRequest | PlainMessage<ListRecommendedTemplatesRequest> | undefined): boolean {
        return proto3.util.equals(ListRecommendedTemplatesRequest, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRecommendedTemplatesResponse
 */
export class ListRecommendedTemplatesResponse extends Message<ListRecommendedTemplatesResponse> {

    /**
     * @generated from field: repeated buf.alpha.registry.v1alpha1.RecommendedTemplate templates = 1;
     */
    templates: RecommendedTemplate[] = [];

    constructor(data?: PartialMessage<ListRecommendedTemplatesResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.ListRecommendedTemplatesResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "templates", kind: "message", T: RecommendedTemplate, repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRecommendedTemplatesResponse {
        return new ListRecommendedTemplatesResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRecommendedTemplatesResponse {
        return new ListRecommendedTemplatesResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRecommendedTemplatesResponse {
        return new ListRecommendedTemplatesResponse().fromJsonString(jsonString, options);
    }

    static equals(a: ListRecommendedTemplatesResponse | PlainMessage<ListRecommendedTemplatesResponse> | undefined, b: ListRecommendedTemplatesResponse | PlainMessage<ListRecommendedTemplatesResponse> | undefined): boolean {
        return proto3.util.equals(ListRecommendedTemplatesResponse, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.SetRecommendedRepositoriesRequest
 */
export class SetRecommendedRepositoriesRequest extends Message<SetRecommendedRepositoriesRequest> {

    /**
     * @generated from field: repeated buf.alpha.registry.v1alpha1.SetRecommendedRepository repositories = 1;
     */
    repositories: SetRecommendedRepository[] = [];

    constructor(data?: PartialMessage<SetRecommendedRepositoriesRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.SetRecommendedRepositoriesRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "repositories", kind: "message", T: SetRecommendedRepository, repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetRecommendedRepositoriesRequest {
        return new SetRecommendedRepositoriesRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetRecommendedRepositoriesRequest {
        return new SetRecommendedRepositoriesRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetRecommendedRepositoriesRequest {
        return new SetRecommendedRepositoriesRequest().fromJsonString(jsonString, options);
    }

    static equals(a: SetRecommendedRepositoriesRequest | PlainMessage<SetRecommendedRepositoriesRequest> | undefined, b: SetRecommendedRepositoriesRequest | PlainMessage<SetRecommendedRepositoriesRequest> | undefined): boolean {
        return proto3.util.equals(SetRecommendedRepositoriesRequest, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.SetRecommendedRepositoriesResponse
 */
export class SetRecommendedRepositoriesResponse extends Message<SetRecommendedRepositoriesResponse> {

    constructor(data?: PartialMessage<SetRecommendedRepositoriesResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.SetRecommendedRepositoriesResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetRecommendedRepositoriesResponse {
        return new SetRecommendedRepositoriesResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetRecommendedRepositoriesResponse {
        return new SetRecommendedRepositoriesResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetRecommendedRepositoriesResponse {
        return new SetRecommendedRepositoriesResponse().fromJsonString(jsonString, options);
    }

    static equals(a: SetRecommendedRepositoriesResponse | PlainMessage<SetRecommendedRepositoriesResponse> | undefined, b: SetRecommendedRepositoriesResponse | PlainMessage<SetRecommendedRepositoriesResponse> | undefined): boolean {
        return proto3.util.equals(SetRecommendedRepositoriesResponse, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.SetRecommendedTemplatesRequest
 */
export class SetRecommendedTemplatesRequest extends Message<SetRecommendedTemplatesRequest> {

    /**
     * @generated from field: repeated buf.alpha.registry.v1alpha1.SetRecommendedTemplate templates = 1;
     */
    templates: SetRecommendedTemplate[] = [];

    constructor(data?: PartialMessage<SetRecommendedTemplatesRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.SetRecommendedTemplatesRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "templates", kind: "message", T: SetRecommendedTemplate, repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetRecommendedTemplatesRequest {
        return new SetRecommendedTemplatesRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetRecommendedTemplatesRequest {
        return new SetRecommendedTemplatesRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetRecommendedTemplatesRequest {
        return new SetRecommendedTemplatesRequest().fromJsonString(jsonString, options);
    }

    static equals(a: SetRecommendedTemplatesRequest | PlainMessage<SetRecommendedTemplatesRequest> | undefined, b: SetRecommendedTemplatesRequest | PlainMessage<SetRecommendedTemplatesRequest> | undefined): boolean {
        return proto3.util.equals(SetRecommendedTemplatesRequest, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.SetRecommendedTemplatesResponse
 */
export class SetRecommendedTemplatesResponse extends Message<SetRecommendedTemplatesResponse> {

    constructor(data?: PartialMessage<SetRecommendedTemplatesResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.SetRecommendedTemplatesResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetRecommendedTemplatesResponse {
        return new SetRecommendedTemplatesResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetRecommendedTemplatesResponse {
        return new SetRecommendedTemplatesResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetRecommendedTemplatesResponse {
        return new SetRecommendedTemplatesResponse().fromJsonString(jsonString, options);
    }

    static equals(a: SetRecommendedTemplatesResponse | PlainMessage<SetRecommendedTemplatesResponse> | undefined, b: SetRecommendedTemplatesResponse | PlainMessage<SetRecommendedTemplatesResponse> | undefined): boolean {
        return proto3.util.equals(SetRecommendedTemplatesResponse, a, b);
    }

}


