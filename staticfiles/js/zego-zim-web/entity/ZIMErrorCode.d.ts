export interface ZIMError {
    code: ZIMErrorCode;
    message: string;
}
export declare enum ZIMErrorCode {
    Success = 0,
    Failed = 1,
    CommonModuleParamInvalid = 6000001,
    CommonModuleNotInit = 6000002,
    CommonModuleInvalidAppID = 6000003,
    CommonModuleTriggerSDKFrequencyLimit = 6000004,
    CommonModuleTriggerServerFrequencyLimit = 6000005,
    CommonModuleSwitchServerError = 6000006,
    CommonModuleIMServerError = 6000007,
    CommonModuleUploadLogError = 6000010,
    CommonModuleUserIsNotExist = 6000011,
    CommonModuleUserInfoQueriedLimit = 6000012,
    CommonModuleUnsupportedRequest = 6000013,
    CommonModuleUnactivatedIMServer = 6000014,
    CommonModuleExceedDAULimit = 6000015,
    CommonModuleExceedMAULimit = 6000016,
    NetworkModuleCommonError = 6000101,
    NetworkModuleServerError = 6000102,
    NetworkModuleTokenInvalid = 6000103,
    NetworkModuleNetworkError = 6000104,
    NetworkModuleRequestTimeout = 6000105,
    NetworkModuleTokenExpired = 6000106,
    NetworkModuleTokenVersionError = 6000107,
    NetworkModuleTokenTimeIsTooShort = 6000108,
    NetworkModuleTokenTimeIsTooLong = 6000109,
    NetworkModuleUserHasAlreadyLogged = 6000111,
    NetworkModuleUserIsNotLogged = 6000121,
    ConversationModuleCommonError = 6000601,
    ConversationModuleServerError = 6000602,
    ConversationModuleConversationDoesNotExist = 6000603,
    ConversationModulePinnedListReachedLimit = 6000604,
    MessageModuleCommonError = 6000201,
    MessageModuleServerError = 6000202,
    MessageModuleSendMessageFailed = 6000203,
    MessageModuleTargetDoesNotExist = 6000204,
    MessageModuleFileNotExist = 6000211,
    MessageModuleFileServerError = 6000212,
    MessageModuleFileTypeUnsupported = 6000213,
    MessageModuleFileSizeInvalid = 6000214,
    MessageModuleFileDurationInvalid = 6000215,
    MessageModuleAuditRejected = 6000221,
    MessageModuleAuditFailed = 6000222,
    MessageModuleAuditCustomSentRejected = 6000230,
    MessageModuleMutedInGroup = 6000231,
    MessageModuleReceiptReadError = 6000277,
    MessageModuleMessageExceedsRevokeTime = 6000278,
    MessageModuleMessageHasBeenRevoked = 6000279,
    MessageModuleMessageReactionTypeExisted = 6000280,
    MessageModuleMessageReceiptLimit = 6000282,
    MessageModuleSenderInBlacklist = 6000284,
    RoomModuleCommonError = 6000301,
    RoomModuleServerError = 6000302,
    RoomModuleCreateRoomError = 6000303,
    RoomModuleJoinRoomError = 6000304,
    RoomModuleLeaveRoomError = 6000306,
    RoomModuleTheRoomMemberQueryFailed = 6000310,
    RoomModuleTheRoomMembersQueryFailedCompletely = 6000311,
    RoomModuleUserIsAlreadyInTheRoom = 6000320,
    RoomModuleUserIsNotInTheRoom = 6000321,
    RoomModuleTheRoomDoesNotExist = 6000322,
    RoomModuleTheRoomAlreadyExists = 6000323,
    RoomModuleTheNumberOfExistingRoomsHasReachedLimit = 6000324,
    RoomModuleTheNumberOfJoinedRoomsHasReachedLimit = 6000325,
    RoomModuleRoomAttributesCommonError = 6000330,
    RoomModuleRoomAttributesOperationFailedCompletely = 6000331,
    RoomModuleRoomAttributesQueryFailed = 6000333,
    RoomModuleTheNumberOfRoomAttributesExceedsLimit = 6000334,
    RoomModuleTheLengthOfRoomAttributeKeyExceedsLimit = 6000335,
    RoomModuleTheLengthOfRoomAttributeValueExceedsLimit = 6000336,
    RoomModuleTheTotalLengthOfRoomAttributesValueExceedsLimit = 6000337,
    RoomModuleRoomMemberAttributesCommonError = 6000350,
    RoomModuleTheTotalLengthOfRoomMemberAttributesExceedsLimit = 6000351,
    RoomModuleTheLengthOfRoomMemberAttributesKeyExceedsLimit = 6000352,
    RoomModuleTheLengthOfRoomMemberAttributesValueExceedsLimit = 6000353,
    RoomModuleTheMemberNumberOfRoomMemberAttributesExceedsLimit = 6000357,
    GroupModuleCommonError = 6000501,
    GroupModuleServerError = 6000502,
    GroupModuleCreateGroupError = 6000503,
    GroupModuleDismissGroupError = 6000504,
    GroupModuleJoinGroupError = 6000505,
    GroupModuleLeaveGroupError = 6000506,
    GroupModuleKickoutGroupMemberError = 6000507,
    GroupModuleInviteUserIntoGroupError = 6000508,
    GroupModuleTransferOwnerError = 6000509,
    GroupModuleUpdateGroupInfoError = 6000510,
    GroupModuleQueryGroupInfoError = 6000511,
    GroupModuleGroupAttributesOperationFailed = 6000512,
    GroupModuleGroupAttributesQueryFailed = 6000513,
    GroupModuleUpdateGroupMemberInfoError = 6000514,
    GroupModuleQueryGroupMemberInfoError = 6000515,
    GroupModuleQueryGroupListError = 6000516,
    GroupModuleQueryGroupMemberListError = 6000517,
    GroupModuleUserIsNotInTheGroup = 6000521,
    GroupModuleMemberIsAlreadyInTheGroup = 6000522,
    GroupModuleGroupDoesNotExist = 6000523,
    GroupModuleGroupAlreadyExists = 6000524,
    GroupModuleGroupMemberHasReachedLimit = 6000525,
    GroupModuleGroupAttributeDoesNotExist = 6000526,
    GroupModuleCreateGroupWithDismissed = 6000527,
    GroupModuleTheNumberOfGroupAttributesExceedsLimit = 6000531,
    GroupModuleTheLengthOfGroupAttributeKeyExceedsLimit = 6000532,
    GroupModuleTheLengthOfGroupAttributeValueExceedsLimit = 6000533,
    GroupModuleTheTotalLengthOfGroupAttributesValueExceedsLimit = 6000534,
    GroupModuleNoCorrespondingOperationAuthority = 6000541,
    GroupModuleForbidJoinGroupError = 6000542,
    GroupModuleNeedApplyJoinGroupError = 6000543,
    GroupModuleNeedApplyInviteGroupError = 6000544,
    CallModuleCommonError = 6000270,
    CallModuleCancelError = 6000271,
    CallModuleServerError = 6000272,
    CallModuleIsNotInvitor = 6000273,
    CallModuleIsNotInvitee = 6000274,
    CallModuleAlreadyExists = 6000275,
    CallModuleDoesNotExist = 6000276,
    CallModuleInviteUserDoesNotExist = 6000281,
    CallModuleUserAlreadyInTheCall = 6000283,
    FriendModuleFriendNumLimit = 6000801,
    FriendModuleFriendApplicationStatusError = 6000802,
    FriendModuleFriendIsAlreadyYourFriend = 6000803,
    FriendModuleFriendAlreadyAddToBlacklist = 6000804,
    FriendModuleFriendCannotBlacklistSelf = 6000805,
    FriendModuleFriendAlreadyDeleteFromBlacklist = 6000806,
    FriendModuleFriendUserNotInBlacklist = 6000807,
    FriendModuleBlacklistListQuantityLimit = 6000808,
    FriendModuleFriendListQuantityLimit = 6000809,
    FriendModuleCannotFriendListSelf = 6000810,
    FriendModuleFriendAreUnregistered = 6000811,
    FriendModuleIsNotYourFriend = 6000812,
    FriendModuleCannotDeleteSelf = 6000813,
    FriendModuleFriendApplicationExpired = 6000814,
    FriendModuleAddBlacklistFail = 6000815,
    FriendModuleDelBlacklistFail = 6000816
}
