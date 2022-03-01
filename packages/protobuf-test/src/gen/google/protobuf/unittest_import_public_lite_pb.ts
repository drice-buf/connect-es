/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file google/protobuf/unittest_import_public_lite.proto (package protobuf_unittest_import, syntax proto2)
//
// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// Author: liujisi@google.com (Pherl Liu)

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto2} from "@bufbuild/protobuf";

/**
 * @generated from message protobuf_unittest_import.PublicImportMessageLite
 */
export class PublicImportMessageLite extends Message<PublicImportMessageLite> {

    /**
     * @generated from field: optional int32 e = 1;
     */
    e?: number;

    constructor(data?: PartialMessage<PublicImportMessageLite>) {
        super();
        proto2.util.initPartial(data, this);
    }

    static readonly runtime = proto2;
    static readonly typeName = "protobuf_unittest_import.PublicImportMessageLite";
    static readonly fields: FieldList = proto2.util.newFieldList(() => [
        {no: 1, name: "e", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublicImportMessageLite {
        return new PublicImportMessageLite().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublicImportMessageLite {
        return new PublicImportMessageLite().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublicImportMessageLite {
        return new PublicImportMessageLite().fromJsonString(jsonString, options);
    }

    static equals(a: PublicImportMessageLite | PlainMessage<PublicImportMessageLite> | undefined, b: PublicImportMessageLite | PlainMessage<PublicImportMessageLite> | undefined): boolean {
        return proto2.util.equals(PublicImportMessageLite, a, b);
    }

}


