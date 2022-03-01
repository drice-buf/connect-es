/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/audit/v1alpha1/role.proto (package buf.alpha.audit.v1alpha1, syntax proto3)
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

import {proto3} from "@bufbuild/protobuf";

/**
 * @generated from enum buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1ServerRole
 */
export enum BufAlphaRegistryV1Alpha1ServerRole {

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_SERVER_ROLE_UNSPECIFIED = 0;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_SERVER_ROLE_UNSPECIFIED = 0,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_SERVER_ROLE_ADMIN = 1;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_SERVER_ROLE_ADMIN = 1,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_SERVER_ROLE_MEMBER = 2;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_SERVER_ROLE_MEMBER = 2,

}

// Retrieve enum metadata with: proto3.getEnumType(BufAlphaRegistryV1Alpha1ServerRole)
proto3.util.setEnumType(BufAlphaRegistryV1Alpha1ServerRole, "buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1ServerRole", [
    {no: 0, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_SERVER_ROLE_UNSPECIFIED"},
    {no: 1, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_SERVER_ROLE_ADMIN"},
    {no: 2, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_SERVER_ROLE_MEMBER"},
]);

/**
 * @generated from enum buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1OrganizationRole
 */
export enum BufAlphaRegistryV1Alpha1OrganizationRole {

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_ORGANIZATION_ROLE_UNSPECIFIED = 0;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_ORGANIZATION_ROLE_UNSPECIFIED = 0,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_ORGANIZATION_ROLE_OWNER = 1;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_ORGANIZATION_ROLE_OWNER = 1,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_ORGANIZATION_ROLE_ADMIN = 2;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_ORGANIZATION_ROLE_ADMIN = 2,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_ORGANIZATION_ROLE_MEMBER = 3;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_ORGANIZATION_ROLE_MEMBER = 3,

}

// Retrieve enum metadata with: proto3.getEnumType(BufAlphaRegistryV1Alpha1OrganizationRole)
proto3.util.setEnumType(BufAlphaRegistryV1Alpha1OrganizationRole, "buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1OrganizationRole", [
    {no: 0, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_ORGANIZATION_ROLE_UNSPECIFIED"},
    {no: 1, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_ORGANIZATION_ROLE_OWNER"},
    {no: 2, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_ORGANIZATION_ROLE_ADMIN"},
    {no: 3, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_ORGANIZATION_ROLE_MEMBER"},
]);

/**
 * @generated from enum buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1RepositoryRole
 */
export enum BufAlphaRegistryV1Alpha1RepositoryRole {

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_UNSPECIFIED = 0;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_UNSPECIFIED = 0,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_OWNER = 1;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_OWNER = 1,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_ADMIN = 2;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_ADMIN = 2,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_WRITE = 3;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_WRITE = 3,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_READ = 4;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_READ = 4,

}

// Retrieve enum metadata with: proto3.getEnumType(BufAlphaRegistryV1Alpha1RepositoryRole)
proto3.util.setEnumType(BufAlphaRegistryV1Alpha1RepositoryRole, "buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1RepositoryRole", [
    {no: 0, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_UNSPECIFIED"},
    {no: 1, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_OWNER"},
    {no: 2, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_ADMIN"},
    {no: 3, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_WRITE"},
    {no: 4, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_REPOSITORY_ROLE_READ"},
]);

/**
 * @generated from enum buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1TemplateRole
 */
export enum BufAlphaRegistryV1Alpha1TemplateRole {

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_UNSPECIFIED = 0;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_UNSPECIFIED = 0,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_OWNER = 1;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_OWNER = 1,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_ADMIN = 2;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_ADMIN = 2,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_WRITE = 3;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_WRITE = 3,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_READ = 4;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_READ = 4,

}

// Retrieve enum metadata with: proto3.getEnumType(BufAlphaRegistryV1Alpha1TemplateRole)
proto3.util.setEnumType(BufAlphaRegistryV1Alpha1TemplateRole, "buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1TemplateRole", [
    {no: 0, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_UNSPECIFIED"},
    {no: 1, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_OWNER"},
    {no: 2, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_ADMIN"},
    {no: 3, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_WRITE"},
    {no: 4, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_TEMPLATE_ROLE_READ"},
]);

/**
 * @generated from enum buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1PluginRole
 */
export enum BufAlphaRegistryV1Alpha1PluginRole {

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_UNSPECIFIED = 0;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_UNSPECIFIED = 0,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_OWNER = 1;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_OWNER = 1,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_ADMIN = 2;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_ADMIN = 2,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_WRITE = 3;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_WRITE = 3,

    /**
     * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_READ = 4;
     */
    BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_READ = 4,

}

// Retrieve enum metadata with: proto3.getEnumType(BufAlphaRegistryV1Alpha1PluginRole)
proto3.util.setEnumType(BufAlphaRegistryV1Alpha1PluginRole, "buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1PluginRole", [
    {no: 0, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_UNSPECIFIED"},
    {no: 1, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_OWNER"},
    {no: 2, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_ADMIN"},
    {no: 3, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_WRITE"},
    {no: 4, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_ROLE_READ"},
]);

