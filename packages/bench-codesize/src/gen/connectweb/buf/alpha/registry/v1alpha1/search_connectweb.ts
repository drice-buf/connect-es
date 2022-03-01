/* eslint-disable */
// @generated by protoc-gen-connectweb v0.0.1 with parameter "ts_nocheck=false"
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

import {SearchRequest, SearchResponse} from "./search_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * SearchService is the search service.
 *
 * @generated from service buf.alpha.registry.v1alpha1.SearchService
 */
export const SearchService = {
    typeName: "buf.alpha.registry.v1alpha1.SearchService",
    methods: {
        /**
         * Search searches the BSR.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.SearchService.Search
         */
        search: {
            name: "Search",
            I: SearchRequest,
            O: SearchResponse,
            kind: MethodKind.Unary,
        },
    }
} as const;

