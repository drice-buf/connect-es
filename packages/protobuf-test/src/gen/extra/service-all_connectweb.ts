/* eslint-disable */
// @generated by protoc-gen-connectweb v0.0.1 with parameter "ts_nocheck=false"
// @generated from file extra/service-all.proto (package spec, syntax proto3)

import {Int32Value, MethodIdempotency, MethodKind, StringValue} from "@bufbuild/protobuf";

/**
 * @generated from service spec.ServiceAll
 */
export const ServiceAll = {
    typeName: "spec.ServiceAll",
    methods: {
        /**
         * @generated from rpc spec.ServiceAll.Unary
         */
        unary: {
            name: "Unary",
            I: StringValue,
            O: Int32Value,
            kind: MethodKind.Unary,
            idempotency: MethodIdempotency.Idempotent,
        },
        /**
         * @generated from rpc spec.ServiceAll.ServerStream
         */
        serverStream: {
            name: "ServerStream",
            I: StringValue,
            O: Int32Value,
            kind: MethodKind.ServerStreaming,
            idempotency: MethodIdempotency.NoSideEffects,
        },
        /**
         * @generated from rpc spec.ServiceAll.ClientStream
         */
        clientStream: {
            name: "ClientStream",
            I: StringValue,
            O: Int32Value,
            kind: MethodKind.ClientStreaming,
        },
        /**
         * @generated from rpc spec.ServiceAll.Bidi
         * @deprecated
         */
        bidi: {
            name: "Bidi",
            I: StringValue,
            O: Int32Value,
            kind: MethodKind.BiDiStreaming,
        },
    }
} as const;

