import type { OAuthProvider } from "@interep/reputation"

export type Provider = OAuthProvider | "poap" | "telegram" | "email"

export namespace Offchain {
    export type RequestOptions = {
        limit?: number
        offset?: number
    }

    export type GetGroupRequest = {
        provider: Provider
        name: string
    }

    export type HasMemberRequest = {
        provider: Provider
        name?: string
        identityCommitment: string
    }

    export type GetMerkleTreeProofRequest = HasMemberRequest & {
        name: string
    }

    export type AddMemberRequest = HasMemberRequest & {
        authenticationHeader?: string
        userAddress?: string
        userSignature?: string
    }

    export type RemoveMemberRequest = AddMemberRequest

    export type GetMerkleTreeLeavesRequest = {
        root: string
    }

    export type HasMerkleTreeLeafRequest = GetMerkleTreeLeavesRequest & {
        leaf: string
    }

    export type GetMerkleTreeRootBatchRequest = GetMerkleTreeLeavesRequest
}

export namespace Onchain {
    export type GetGroupRequest = {
        id: string
    }

    export type GetMembersRequest = {
        groupId: string
    }
}
