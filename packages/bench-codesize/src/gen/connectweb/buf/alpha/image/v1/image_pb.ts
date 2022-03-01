/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/image/v1/image.proto (package buf.alpha.image.v1, syntax proto2)
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
import {DescriptorProto, EnumDescriptorProto, FieldDescriptorProto, FileOptions, Message, ServiceDescriptorProto, SourceCodeInfo, proto2} from "@bufbuild/protobuf";

/**
 * Image is an extended FileDescriptorSet.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/descriptor.proto
 *
 * @generated from message buf.alpha.image.v1.Image
 */
export class Image extends Message<Image> {

    /**
     * @generated from field: repeated buf.alpha.image.v1.ImageFile file = 1;
     */
    file: ImageFile[] = [];

    constructor(data?: PartialMessage<Image>) {
        super();
        proto2.util.initPartial(data, this);
    }

    static readonly runtime = proto2;
    static readonly typeName = "buf.alpha.image.v1.Image";
    static readonly fields: FieldList = proto2.util.newFieldList(() => [
        {no: 1, name: "file", kind: "message", T: ImageFile, repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Image {
        return new Image().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Image {
        return new Image().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Image {
        return new Image().fromJsonString(jsonString, options);
    }

    static equals(a: Image | PlainMessage<Image> | undefined, b: Image | PlainMessage<Image> | undefined): boolean {
        return proto2.util.equals(Image, a, b);
    }

}


/**
 * ImageFile is an extended FileDescriptorProto.
 *
 * Since FileDescriptorProto does not have extensions, we copy the fields from
 * FileDescriptorProto, and then add our own extensions via the
 * buf_image_file_extension field. This is compatible with a
 * FileDescriptorProto.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/descriptor.proto
 *
 * @generated from message buf.alpha.image.v1.ImageFile
 */
export class ImageFile extends Message<ImageFile> {

    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;

    /**
     * @generated from field: optional string package = 2;
     */
    package?: string;

    /**
     * @generated from field: repeated string dependency = 3;
     */
    dependency: string[] = [];

    /**
     * @generated from field: repeated int32 public_dependency = 10;
     */
    publicDependency: number[] = [];

    /**
     * @generated from field: repeated int32 weak_dependency = 11;
     */
    weakDependency: number[] = [];

    /**
     * @generated from field: repeated google.protobuf.DescriptorProto message_type = 4;
     */
    messageType: DescriptorProto[] = [];

    /**
     * @generated from field: repeated google.protobuf.EnumDescriptorProto enum_type = 5;
     */
    enumType: EnumDescriptorProto[] = [];

    /**
     * @generated from field: repeated google.protobuf.ServiceDescriptorProto service = 6;
     */
    service: ServiceDescriptorProto[] = [];

    /**
     * @generated from field: repeated google.protobuf.FieldDescriptorProto extension = 7;
     */
    extension: FieldDescriptorProto[] = [];

    /**
     * @generated from field: optional google.protobuf.FileOptions options = 8;
     */
    options?: FileOptions;

    /**
     * @generated from field: optional google.protobuf.SourceCodeInfo source_code_info = 9;
     */
    sourceCodeInfo?: SourceCodeInfo;

    /**
     * @generated from field: optional string syntax = 12;
     */
    syntax?: string;

    /**
     * buf_extension contains buf-specific extensions to FileDescriptorProtos.
     *
     * The prefixed name and high tag value is used to all but guarantee there
     * will never be any conflict with Google's FileDescriptorProto definition.
     * The definition of a FileDescriptorProto has not changed in years, so
     * we're not too worried about a conflict here.
     *
     * @generated from field: optional buf.alpha.image.v1.ImageFileExtension buf_extension = 8042;
     */
    bufExtension?: ImageFileExtension;

    constructor(data?: PartialMessage<ImageFile>) {
        super();
        proto2.util.initPartial(data, this);
    }

    static readonly runtime = proto2;
    static readonly typeName = "buf.alpha.image.v1.ImageFile";
    static readonly fields: FieldList = proto2.util.newFieldList(() => [
        {no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true},
        {no: 2, name: "package", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true},
        {no: 3, name: "dependency", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true},
        {no: 10, name: "public_dependency", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true},
        {no: 11, name: "weak_dependency", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true},
        {no: 4, name: "message_type", kind: "message", T: DescriptorProto, repeated: true},
        {no: 5, name: "enum_type", kind: "message", T: EnumDescriptorProto, repeated: true},
        {no: 6, name: "service", kind: "message", T: ServiceDescriptorProto, repeated: true},
        {no: 7, name: "extension", kind: "message", T: FieldDescriptorProto, repeated: true},
        {no: 8, name: "options", kind: "message", T: FileOptions, opt: true},
        {no: 9, name: "source_code_info", kind: "message", T: SourceCodeInfo, opt: true},
        {no: 12, name: "syntax", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true},
        {no: 8042, name: "buf_extension", kind: "message", T: ImageFileExtension, opt: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageFile {
        return new ImageFile().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageFile {
        return new ImageFile().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageFile {
        return new ImageFile().fromJsonString(jsonString, options);
    }

    static equals(a: ImageFile | PlainMessage<ImageFile> | undefined, b: ImageFile | PlainMessage<ImageFile> | undefined): boolean {
        return proto2.util.equals(ImageFile, a, b);
    }

}


/**
 * ImageFileExtension contains extensions to ImageFiles.
 *
 * The fields are not included directly on the ImageFile so that we can both
 * detect if extensions exist, which signifies this was created by buf and not
 * by protoc, and so that we can add fields in a freeform manner without
 * worrying about conflicts with FileDescriptorProto.
 *
 * @generated from message buf.alpha.image.v1.ImageFileExtension
 */
export class ImageFileExtension extends Message<ImageFileExtension> {

    /**
     * is_import denotes whether this file is considered an "import".
     *
     * An import is a file which was not derived from the local source files.
     * There are two cases where this could be true:
     *
     * 1. A Well-Known Type included from the compiler.
     * 2. A file that was included from a Buf module dependency.
     *
     * We use "import" as this matches with the protoc concept of
     * --include_imports, however import is a bit of an overloaded term.
     *
     * This will always be set.
     *
     * @generated from field: optional bool is_import = 1;
     */
    isImport?: boolean;

    /**
     * ModuleInfo contains information about the Buf module this file belongs to.
     *
     * This field is optional and will not be set if the module is not known.
     *
     * @generated from field: optional buf.alpha.image.v1.ModuleInfo module_info = 2;
     */
    moduleInfo?: ModuleInfo;

    /**
     * is_syntax_unspecified denotes whether the file did not have a syntax
     * explicitly specified.
     *
     * Per the FileDescriptorProto spec, it would be fine in this case to just
     * leave the syntax field unset to denote this and to set the syntax field
     * to "proto2" if it is specified. However, protoc does not set the syntax
     * field if it was "proto2", and plugins may (incorrectly) depend on this.
     * We also want to maintain consistency with protoc as much as possible.
     * So instead, we have this field which will denote whether syntax was not
     * specified.
     *
     * This will always be set.
     *
     * @generated from field: optional bool is_syntax_unspecified = 3;
     */
    isSyntaxUnspecified?: boolean;

    /**
     * unused_dependency are the indexes within the dependency field on
     * FileDescriptorProto for those dependencies that are not used.
     *
     * This matches the shape of the public_dependency and weak_dependency
     * fields.
     *
     * @generated from field: repeated int32 unused_dependency = 4;
     */
    unusedDependency: number[] = [];

    constructor(data?: PartialMessage<ImageFileExtension>) {
        super();
        proto2.util.initPartial(data, this);
    }

    static readonly runtime = proto2;
    static readonly typeName = "buf.alpha.image.v1.ImageFileExtension";
    static readonly fields: FieldList = proto2.util.newFieldList(() => [
        {no: 1, name: "is_import", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true},
        {no: 2, name: "module_info", kind: "message", T: ModuleInfo, opt: true},
        {no: 3, name: "is_syntax_unspecified", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true},
        {no: 4, name: "unused_dependency", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageFileExtension {
        return new ImageFileExtension().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageFileExtension {
        return new ImageFileExtension().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageFileExtension {
        return new ImageFileExtension().fromJsonString(jsonString, options);
    }

    static equals(a: ImageFileExtension | PlainMessage<ImageFileExtension> | undefined, b: ImageFileExtension | PlainMessage<ImageFileExtension> | undefined): boolean {
        return proto2.util.equals(ImageFileExtension, a, b);
    }

}


/**
 * ModuleInfo contains information about a Buf module that an ImageFile
 * belongs to.
 *
 * @generated from message buf.alpha.image.v1.ModuleInfo
 */
export class ModuleInfo extends Message<ModuleInfo> {

    /**
     * name is the name of the Buf module.
     *
     * This will always be set.
     *
     * @generated from field: optional buf.alpha.image.v1.ModuleName name = 1;
     */
    name?: ModuleName;

    /**
     * commit is the repository commit.
     *
     * This field is optional and will not be set if the commit is not known.
     *
     * @generated from field: optional string commit = 2;
     */
    commit?: string;

    constructor(data?: PartialMessage<ModuleInfo>) {
        super();
        proto2.util.initPartial(data, this);
    }

    static readonly runtime = proto2;
    static readonly typeName = "buf.alpha.image.v1.ModuleInfo";
    static readonly fields: FieldList = proto2.util.newFieldList(() => [
        {no: 1, name: "name", kind: "message", T: ModuleName, opt: true},
        {no: 2, name: "commit", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleInfo {
        return new ModuleInfo().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleInfo {
        return new ModuleInfo().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleInfo {
        return new ModuleInfo().fromJsonString(jsonString, options);
    }

    static equals(a: ModuleInfo | PlainMessage<ModuleInfo> | undefined, b: ModuleInfo | PlainMessage<ModuleInfo> | undefined): boolean {
        return proto2.util.equals(ModuleInfo, a, b);
    }

}


/**
 * ModuleName is a module name.
 *
 * All fields will always be set.
 *
 * @generated from message buf.alpha.image.v1.ModuleName
 */
export class ModuleName extends Message<ModuleName> {

    /**
     * @generated from field: optional string remote = 1;
     */
    remote?: string;

    /**
     * @generated from field: optional string owner = 2;
     */
    owner?: string;

    /**
     * @generated from field: optional string repository = 3;
     */
    repository?: string;

    constructor(data?: PartialMessage<ModuleName>) {
        super();
        proto2.util.initPartial(data, this);
    }

    static readonly runtime = proto2;
    static readonly typeName = "buf.alpha.image.v1.ModuleName";
    static readonly fields: FieldList = proto2.util.newFieldList(() => [
        {no: 1, name: "remote", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true},
        {no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true},
        {no: 3, name: "repository", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleName {
        return new ModuleName().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleName {
        return new ModuleName().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleName {
        return new ModuleName().fromJsonString(jsonString, options);
    }

    static equals(a: ModuleName | PlainMessage<ModuleName> | undefined, b: ModuleName | PlainMessage<ModuleName> | undefined): boolean {
        return proto2.util.equals(ModuleName, a, b);
    }

}


