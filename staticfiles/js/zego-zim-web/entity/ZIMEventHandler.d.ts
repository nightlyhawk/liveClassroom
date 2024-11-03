import { ZIM, ZIMCallUserInfo, ZIMConversationChangeInfo, ZIMError, ZIMFriendApplicationInfo, ZIMFriendInfo, ZIMGroupApplicationInfo, ZIMGroupAttributesUpdateInfo, ZIMGroupFullInfo, ZIMGroupMemberInfo, ZIMGroupMuteInfo, ZIMGroupOperatedInfo, ZIMGroupVerifyInfo, ZIMMessage, ZIMMessageReaction, ZIMMessageReceiptInfo, ZIMMessageReceivedInfo, ZIMMessageRootRepliedCountInfo, ZIMMessageSentStatusChangeInfo, ZIMRevokeMessage, ZIMRoomAttributesUpdateInfo, ZIMRoomMemberAttributesUpdateInfo, ZIMRoomOperatedInfo, ZIMSDK, ZIMUserFullInfo, ZIMUserInfo, ZIMUserRule, ZIMUserStatus } from './index';
export interface ZIMEventHandler {
    error: (zim: ZIMSDK, errorInfo: ZIMError) => void;
    connectionStateChanged: (zim: ZIMSDK, data: ZIMEventOfConnectionStateChangedResult) => void;
    tokenWillExpire: (zim: ZIMSDK, data: ZIMEventOfTokenWillExpireResult) => void;
    userInfoUpdated: (zim: ZIMSDK, data: ZIMEventOfUserInfoUpdatedResult) => void;
    userStatusUpdated: (zim: ZIMSDK, data: ZIMEventOfUserStatusUpdatedResult) => void;
    userRuleUpdated: (zim: ZIMSDK, data: ZIMEventOfUserRuleUpdatedResult) => void;
    conversationsAllDeleted: (zim: ZIMSDK, data: ZIMEventOfConversationsAllDeletedResult) => void;
    conversationChanged: (zim: ZIMSDK, data: ZIMEventOfConversationChangedResult) => void;
    conversationTotalUnreadMessageCountUpdated: (zim: ZIMSDK, data: ZIMEventOfConversationTotalUnreadMessageCountUpdatedResult) => void;
    conversationMessageReceiptChanged: (zim: ZIMSDK, data: ZIMEventOfMessageReceiptChangedResult) => void;
    messageRevokeReceived: (zim: ZIMSDK, data: ZIMEventOfMessageRevokeReceivedResult) => void;
    messageReceiptChanged: (zim: ZIMSDK, data: ZIMEventOfMessageReceiptChangedResult) => void;
    messageReactionsChanged: (zim: ZIMSDK, data: ZIMEventOfMessageReactionsChangedResult) => void;
    messageRepliedCountChanged: (zim: ZIMSDK, data: ZIMEventOfMessageRepliedCountChangedResult) => void;
    messageRepliedInfoChanged: (zim: ZIMSDK, data: ZIMEventOfMessageRepliedInfoChangedResult) => void;
    messageDeleted: (zim: ZIMSDK, data: ZIMEventOfMessageDeletedResult) => void;
    messageSentStatusChanged: (zim: ZIMSDK, data: ZIMEventOfMessageSentStatusChangedResult) => void;
    broadcastMessageReceived: (zim: ZIMSDK, data: ZIMEventOfBroadcastMessageReceivedResult) => void;
    roomMessageReceived: (zim: ZIMSDK, data: ZIMEventOfConversationMessageReceivedResult) => void;
    peerMessageReceived: (zim: ZIMSDK, data: ZIMEventOfConversationMessageReceivedResult) => void;
    groupMessageReceived: (zim: ZIMSDK, data: ZIMEventOfConversationMessageReceivedResult) => void;
    receiveRoomMessage: (zim: ZIMSDK, data: ZIMEventOfReceiveConversationMessageResult) => void;
    receivePeerMessage: (zim: ZIMSDK, data: ZIMEventOfReceiveConversationMessageResult) => void;
    receiveGroupMessage: (zim: ZIMSDK, data: ZIMEventOfReceiveConversationMessageResult) => void;
    roomStateChanged: (zim: ZIMSDK, data: ZIMEventOfRoomStateChangedResult) => void;
    roomMemberJoined: (zim: ZIMSDK, data: ZIMEventOfRoomMemberChangedResult) => void;
    roomMemberLeft: (zim: ZIMSDK, data: ZIMEventOfRoomMemberChangedResult) => void;
    roomAttributesUpdated: (zim: ZIMSDK, data: ZIMEventOfRoomAttributesUpdatedResult) => void;
    roomAttributesBatchUpdated: (zim: ZIMSDK, data: ZIMEventOfRoomAttributesUpdatedResult) => void;
    roomMemberAttributesUpdated: (zim: ZIMSDK, data: ZIMEventOfRoomMembersAttributesUpdatedResult) => void;
    groupStateChanged: (zim: ZIMSDK, data: ZIMEventOfGroupStateChangedResult) => void;
    groupNameUpdated: (zim: ZIMSDK, data: ZIMEventOfGroupNameUpdatedResult) => void;
    groupAvatarUrlUpdated: (zim: ZIMSDK, data: ZIMEventOfGroupAvatarUrlUpdatedResult) => void;
    groupNoticeUpdated: (zim: ZIMSDK, data: ZIMEventOfGroupNoticeUpdatedResult) => void;
    groupAliasUpdated: (zim: ZIMSDK, data: ZIMEventOfGroupAliasUpdatedResult) => void;
    groupAttributesUpdated: (zim: ZIMSDK, data: ZIMEventOfGroupAttributesUpdatedResult) => void;
    groupMutedInfoUpdated: (zim: ZIMSDK, data: ZIMEventOfGroupMutedInfoUpdatedResult) => void;
    groupVerifyInfoUpdated: (zim: ZIMSDK, data: ZIMEventOfGroupVerifyInfoUpdatedResult) => void;
    groupApplicationListChanged: (zim: ZIMSDK, data: ZIMEventOfGroupApplicationListChangedResult) => void;
    groupApplicationUpdated: (zim: ZIMSDK, data: ZIMEventOfGroupApplicationUpdatedResult) => void;
    groupMemberStateChanged: (zim: ZIMSDK, data: ZIMEventOfGroupMemberStateChangedResult) => void;
    groupMemberInfoUpdated: (zim: ZIMSDK, data: ZIMEventOfGroupMemberInfoUpdatedResult) => void;
    callInvitationCreated: (zim: ZIMSDK, data: ZIMEventOfCallInvitationCreatedResult) => void;
    callInvitationReceived: (zim: ZIMSDK, data: ZIMEventOfCallInvitationReceivedResult) => void;
    callInvitationCancelled: (zim: ZIMSDK, data: ZIMEventOfCallInvitationCancelledResult) => void;
    callInvitationTimeout: (zim: ZIMSDK, data: ZIMEventOfCallInvitationTimeoutResult) => void;
    callInvitationEnded: (zim: ZIMSDK, data: ZIMEventOfCallInvitationEndedResult) => void;
    callUserStateChanged: (zim: ZIMSDK, data: ZIMEventOfCallUserStateChangedResult) => void;
    blacklistChanged: (zim: ZIMSDK, data: ZIMEventOfBlacklistChangedResult) => void;
    friendListChanged: (zim: ZIMSDK, data: ZIMEventOfFriendListChangedResult) => void;
    friendInfoUpdated: (zim: ZIMSDK, data: ZIMEventOfFriendInfoUpdatedResult) => void;
    friendApplicationListChanged: (zim: ZIMSDK, data: ZIMEventOfFriendApplicationListChangedResult) => void;
    friendApplicationUpdated: (zim: ZIMSDK, data: ZIMEventOfFriendApplicationUpdatedResult) => void;
}
export interface ZIMEventOfConnectionStateChangedResult {
    state: ZIM.ConnectionState;
    event: ZIM.ConnectionEvent;
    extendedData: string;
}
export interface ZIMEventOfTokenWillExpireResult {
    second: number;
}
export interface ZIMEventOfUserInfoUpdatedResult {
    info: ZIMUserFullInfo;
}
export interface ZIMEventOfUserStatusUpdatedResult {
    userStatusList: ZIMUserStatus[];
}
export interface ZIMEventOfUserRuleUpdatedResult {
    userRule: ZIMUserRule;
}
export interface ZIMEventOfConversationsAllDeletedResult {
    count: number;
}
export interface ZIMEventOfConversationChangedResult {
    infoList: ZIMConversationChangeInfo[];
}
export interface ZIMEventOfConversationTotalUnreadMessageCountUpdatedResult {
    totalUnreadMessageCount: number;
}
export interface ZIMEventOfMessageRevokeReceivedResult {
    messageList: ZIMRevokeMessage[];
}
export interface ZIMEventOfMessageReceiptChangedResult {
    infos: ZIMMessageReceiptInfo[];
}
export interface ZIMEventOfMessageReactionsChangedResult {
    reactions: ZIMMessageReaction[];
}
export interface ZIMEventOfMessageRepliedCountChangedResult {
    infos: ZIMMessageRootRepliedCountInfo[];
}
export interface ZIMEventOfMessageRepliedInfoChangedResult {
    messageList: ZIMMessage[];
}
export interface ZIMEventOfMessageDeletedResult {
    conversationID: string;
    conversationType: ZIM.ConversationType;
    isDeleteConversationAllMessage: boolean;
    messageList: ZIMMessage[];
    messageDeleteType: ZIM.MessageDeleteType;
}
export interface ZIMEventOfMessageSentStatusChangedResult {
    infos: ZIMMessageSentStatusChangeInfo[];
}
export interface ZIMEventOfBroadcastMessageReceivedResult {
    message: ZIMMessage;
}
export interface ZIMEventOfConversationMessageReceivedResult {
    messageList: ZIMMessage[];
    fromConversationID: string;
    info: ZIMMessageReceivedInfo;
}
export interface ZIMEventOfReceiveConversationMessageResult {
    messageList: ZIMMessage[];
    fromConversationID: string;
}
export interface ZIMEventOfRoomStateChangedResult {
    roomID: string;
    state: ZIM.RoomState;
    event: ZIM.RoomEvent;
    extendedData: string;
}
export interface ZIMEventOfRoomMemberChangedResult {
    roomID: string;
    memberList: ZIMUserInfo[];
}
export interface ZIMEventOfRoomAttributesUpdatedResult {
    roomID: string;
    infos: ZIMRoomAttributesUpdateInfo[];
}
export interface ZIMEventOfRoomMembersAttributesUpdatedResult {
    roomID: string;
    infos: ZIMRoomMemberAttributesUpdateInfo[];
    operatedInfo: ZIMRoomOperatedInfo;
}
export interface ZIMEventOfGroupStateChangedResult {
    state: ZIM.GroupState;
    event: ZIM.GroupEvent;
    groupInfo: ZIMGroupFullInfo;
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfGroupNameUpdatedResult {
    groupID: string;
    groupName: string;
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfGroupAvatarUrlUpdatedResult {
    groupID: string;
    groupAvatarUrl: string;
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfGroupNoticeUpdatedResult {
    groupID: string;
    groupNotice: string;
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfGroupAliasUpdatedResult {
    groupID: string;
    groupAlias: string;
    operatedUserID: string;
}
export interface ZIMEventOfGroupAttributesUpdatedResult {
    groupID: string;
    infoList: ZIMGroupAttributesUpdateInfo[];
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfGroupMutedInfoUpdatedResult {
    groupID: string;
    mutedInfo: ZIMGroupMuteInfo;
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfGroupMemberStateChangedResult {
    groupID: string;
    state: ZIM.GroupMemberState;
    event: ZIM.GroupMemberEvent;
    userList: ZIMGroupMemberInfo[];
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfGroupMemberInfoUpdatedResult {
    groupID: string;
    userList: ZIMGroupMemberInfo[];
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfGroupVerifyInfoUpdatedResult {
    groupID: string;
    verifyInfo: ZIMGroupVerifyInfo;
    operatedInfo: ZIMGroupOperatedInfo;
}
export interface ZIMEventOfGroupApplicationListChangedResult {
    action: ZIM.GroupApplicationListChangeAction;
    applicationList: ZIMGroupApplicationInfo[];
}
export interface ZIMEventOfGroupApplicationUpdatedResult {
    applicationList: ZIMGroupApplicationInfo[];
}
export interface ZIMEventOfCallInvitationReceivedResult {
    callID: string;
    mode: ZIM.CallInvitationMode;
    caller: string;
    inviter: string;
    extendedData: string;
    timeout: number;
    createTime: number;
    callUserList: ZIMCallUserInfo[];
}
export interface ZIMEventOfCallInvitationCreatedResult {
    callID: string;
    mode: ZIM.CallInvitationMode;
    caller: string;
    extendedData: string;
    timeout: number;
    createTime: number;
    callUserList: ZIMCallUserInfo[];
}
export interface ZIMEventOfCallInvitationCancelledResult {
    callID: string;
    mode: ZIM.CallInvitationMode;
    inviter: string;
    extendedData: string;
}
export interface ZIMEventOfCallInvitationTimeoutResult {
    callID: string;
    mode: ZIM.CallInvitationMode;
}
export interface ZIMEventOfCallInvitationEndedResult {
    callID: string;
    mode: ZIM.CallInvitationMode;
    caller: string;
    operatedUserID: string;
    extendedData: string;
    endTime: number;
}
export interface ZIMEventOfCallUserStateChangedResult {
    callID: string;
    callUserList: ZIMCallUserInfo[];
}
export interface ZIMEventOfCallInvitationAcceptedResult {
    callID: string;
    invitee: string;
    extendedData: string;
}
export interface ZIMEventOfCallInvitationRejectedResult {
    callID: string;
    invitee: string;
    extendedData: string;
}
export interface ZIMEventOfCallInviteesAnsweredTimeoutResult {
    callID: string;
    invitees: string[];
}
export interface ZIMEventOfBlacklistChangedResult {
    userList: ZIMUserInfo[];
    action: ZIM.BlacklistChangeAction;
}
export interface ZIMEventOfFriendListChangedResult {
    action: ZIM.FriendListChangeAction;
    friendList: ZIMFriendInfo[];
}
export interface ZIMEventOfFriendInfoUpdatedResult {
    friendList: ZIMFriendInfo[];
}
export interface ZIMEventOfFriendApplicationListChangedResult {
    action: ZIM.FriendApplicationListChangeAction;
    applicationList: ZIMFriendApplicationInfo[];
}
export interface ZIMEventOfFriendApplicationUpdatedResult {
    applicationList: ZIMFriendApplicationInfo[];
}
