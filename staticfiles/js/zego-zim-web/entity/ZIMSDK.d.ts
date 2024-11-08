import { ZIM, ZIMBlacklistCheckedResult, ZIMBlacklistQueriedResult, ZIMBlacklistQueryConfig, ZIMBlacklistUsersAddedResult, ZIMBlacklistUsersRemovedResult, ZIMCallAcceptConfig, ZIMCallAcceptanceSentResult, ZIMCallCancelConfig, ZIMCallCancelSentResult, ZIMCallEndConfig, ZIMCallEndSentResult, ZIMCallInvitationListQueriedResult, ZIMCallInvitationQueryConfig, ZIMCallInvitationSentResult, ZIMCallInviteConfig, ZIMCallJoinConfig, ZIMCallJoinSentResult, ZIMCallQuitConfig, ZIMCallQuitSentResult, ZIMCallRejectConfig, ZIMCallRejectionSentResult, ZIMCallingInvitationSentResult, ZIMCallingInviteConfig, ZIMCombineMessage, ZIMCombineMessageDetailQueriedResult, ZIMConversationBaseInfo, ZIMConversationDeleteConfig, ZIMConversationDeletedResult, ZIMConversationDraftSetResult, ZIMConversationFilterOption, ZIMConversationListQueriedResult, ZIMConversationMarkSetResult, ZIMConversationMessageReceiptReadSentResult, ZIMConversationNotificationStatusSetResult, ZIMConversationPinnedListQueriedResult, ZIMConversationPinnedStateUpdatedResult, ZIMConversationQueriedResult, ZIMConversationQueryConfig, ZIMConversationSearchConfig, ZIMConversationTotalUnreadMessageCountQueriedResult, ZIMConversationTotalUnreadMessageCountQueryConfig, ZIMConversationUnreadMessageCountClearedResult, ZIMConversationsSearchedResult, ZIMEventHandler, ZIMFriendAddConfig, ZIMFriendAddedResult, ZIMFriendAliasUpdatedResult, ZIMFriendApplicationAcceptConfig, ZIMFriendApplicationAcceptedResult, ZIMFriendApplicationListQueriedResult, ZIMFriendApplicationListQueryConfig, ZIMFriendApplicationRejectConfig, ZIMFriendApplicationRejectedResult, ZIMFriendApplicationSendConfig, ZIMFriendApplicationSentResult, ZIMFriendAttributesUpdatedResult, ZIMFriendDeleteConfig, ZIMFriendListQueriedResult, ZIMFriendListQueryConfig, ZIMFriendRelationCheckConfig, ZIMFriendSearchConfig, ZIMFriendsDeletedResult, ZIMFriendsInfoQueriedResult, ZIMFriendsRelationCheckedResult, ZIMFriendsSearchedResult, ZIMGroupAdvancedConfig, ZIMGroupAliasUpdatedResult, ZIMGroupApplicationListQueriedResult, ZIMGroupApplicationListQueryConfig, ZIMGroupAttributesOperatedResult, ZIMGroupAttributesQueriedResult, ZIMGroupAvatarUrlUpdatedResult, ZIMGroupBeInviteModeUpdatedResult, ZIMGroupCreatedResult, ZIMGroupDismissedResult, ZIMGroupInfo, ZIMGroupInfoQueriedResult, ZIMGroupInviteApplicationAcceptConfig, ZIMGroupInviteApplicationAcceptedResult, ZIMGroupInviteApplicationRejectConfig, ZIMGroupInviteApplicationRejectedResult, ZIMGroupInviteApplicationSendConfig, ZIMGroupInviteApplicationsSentResult, ZIMGroupInviteModeUpdatedResult, ZIMGroupJoinApplicationAcceptConfig, ZIMGroupJoinApplicationAcceptedResult, ZIMGroupJoinApplicationRejectConfig, ZIMGroupJoinApplicationRejectedResult, ZIMGroupJoinApplicationSendConfig, ZIMGroupJoinApplicationSentResult, ZIMGroupJoinModeUpdatedResult, ZIMGroupJoinedResult, ZIMGroupLeftResult, ZIMGroupListQueriedResult, ZIMGroupMemberCountQueriedResult, ZIMGroupMemberInfoQueriedResult, ZIMGroupMemberKickedResult, ZIMGroupMemberListQueriedResult, ZIMGroupMemberMuteConfig, ZIMGroupMemberMutedListQueriedResult, ZIMGroupMemberNicknameUpdatedResult, ZIMGroupMemberQueryConfig, ZIMGroupMemberRoleUpdatedResult, ZIMGroupMemberSearchConfig, ZIMGroupMembersMutedResult, ZIMGroupMembersSearchedResult, ZIMGroupMessageReceiptMemberListQueriedResult, ZIMGroupMessageReceiptMemberQueryConfig, ZIMGroupMuteConfig, ZIMGroupMutedResult, ZIMGroupNameUpdatedResult, ZIMGroupNoticeUpdatedResult, ZIMGroupOwnerTransferredResult, ZIMGroupSearchConfig, ZIMGroupUsersInvitedResult, ZIMGroupsSearchedResult, ZIMLogConfig, ZIMLoginConfig, ZIMMediaMessageBase, ZIMMediaMessageSendNotification, ZIMMediaMessageSentResult, ZIMMessage, ZIMMessageBase, ZIMMessageDeleteConfig, ZIMMessageDeletedResult, ZIMMessageInsertedResult, ZIMMessageLocalExtendedDataUpdatedResult, ZIMMessageQueriedResult, ZIMMessageQueryConfig, ZIMMessageReactionAddedResult, ZIMMessageReactionDeletedResult, ZIMMessageReactionUserListQueriedResult, ZIMMessageReactionUserQueryConfig, ZIMMessageReceiptsInfoQueriedResult, ZIMMessageReceiptsReadSentResult, ZIMMessageRepliedListQueriedResult, ZIMMessageRepliedListQueryConfig, ZIMMessageRevokeConfig, ZIMMessageRevokedResult, ZIMMessageSearchConfig, ZIMMessageSendConfig, ZIMMessageSendNotification, ZIMMessageSentResult, ZIMMessagesGlobalSearchedResult, ZIMMessagesSearchedResult, ZIMRoomAdvancedConfig, ZIMRoomAllLeftResult, ZIMRoomAttributesBatchOperatedResult, ZIMRoomAttributesBatchOperationConfig, ZIMRoomAttributesDeleteConfig, ZIMRoomAttributesOperatedResult, ZIMRoomAttributesQueriedResult, ZIMRoomAttributesSetConfig, ZIMRoomCreatedResult, ZIMRoomEnteredResult, ZIMRoomInfo, ZIMRoomJoinedResult, ZIMRoomLeftResult, ZIMRoomMemberAttributesListQueriedResult, ZIMRoomMemberAttributesQueryConfig, ZIMRoomMemberAttributesSetConfig, ZIMRoomMemberQueriedResult, ZIMRoomMemberQueryConfig, ZIMRoomMembersAttributesOperatedResult, ZIMRoomMembersAttributesQueriedResult, ZIMRoomMembersQueriedResult, ZIMRoomOnlineMemberCountQueriedResult, ZIMRoomSwitchedResult, ZIMSelfUserInfoQueriedResult, ZIMSubscribedUserStatusListQueriedResult, ZIMSubscribedUserStatusQueryConfig, ZIMTokenRenewedResult, ZIMUserAvatarUrlUpdatedResult, ZIMUserExtendedDataUpdatedResult, ZIMUserNameUpdatedResult, ZIMUserOfflinePushRule, ZIMUserOfflinePushRuleUpdatedResult, ZIMUserStatusSubscribeConfig, ZIMUsersInfoQueriedResult, ZIMUsersInfoQueryConfig, ZIMUsersStatusQueriedResult, ZIMUsersStatusSubscribedResult, ZIMUsersStatusUnsubscribedResult } from './index';
export declare class ZIMSDK {
    destroy(): void;
    setLogConfig(config: ZIMLogConfig): void;
    uploadLog(): Promise<void>;
    on<K extends keyof ZIMEventHandler>(type: K, listener: ZIMEventHandler[K]): void;
    off<K extends keyof ZIMEventHandler>(type: K): void;
    /**
     *
     * @deprecated Use overloaded methods.
     */
    login(userInfo: {
        userID: string;
        userName: string;
    }, token: string): Promise<void>;
    login(userID: string, config: ZIMLoginConfig): Promise<void>;
    logout(): void;
    renewToken(token: string): Promise<ZIMTokenRenewedResult>;
    queryUsersInfo(userIDs: string[], config: ZIMUsersInfoQueryConfig): Promise<ZIMUsersInfoQueriedResult>;
    updateUserName(userName: string): Promise<ZIMUserNameUpdatedResult>;
    updateUserAvatarUrl(userAvatarUrl: string): Promise<ZIMUserAvatarUrlUpdatedResult>;
    updateUserExtendedData(extendedData: string): Promise<ZIMUserExtendedDataUpdatedResult>;
    updateUserOfflinePushRule(offlinePushRule: ZIMUserOfflinePushRule): Promise<ZIMUserOfflinePushRuleUpdatedResult>;
    querySelfUserInfo(): Promise<ZIMSelfUserInfoQueriedResult>;
    subscribeUsersStatus(userIDs: string[], config: ZIMUserStatusSubscribeConfig): Promise<ZIMUsersStatusSubscribedResult>;
    unsubscribeUsersStatus(userIDs: string[]): Promise<ZIMUsersStatusUnsubscribedResult>;
    queryUsersStatus(userIDs: string[]): Promise<ZIMUsersStatusQueriedResult>;
    querySubscribedUserStatusList(config: ZIMSubscribedUserStatusQueryConfig): Promise<ZIMSubscribedUserStatusListQueriedResult>;
    queryConversation(conversationID: string, conversationType: ZIM.ConversationType): Promise<ZIMConversationQueriedResult>;
    queryConversationList(config: ZIMConversationQueryConfig, option?: ZIMConversationFilterOption): Promise<ZIMConversationListQueriedResult>;
    queryConversationPinnedList(config: ZIMConversationQueryConfig): Promise<ZIMConversationPinnedListQueriedResult>;
    queryConversationTotalUnreadMessageCount(config: ZIMConversationTotalUnreadMessageCountQueryConfig): Promise<ZIMConversationTotalUnreadMessageCountQueriedResult>;
    deleteConversation(conversationID: string, conversationType: ZIM.ConversationType, config: ZIMConversationDeleteConfig): Promise<ZIMConversationDeletedResult>;
    deleteAllConversations(config: ZIMConversationDeleteConfig): Promise<void>;
    clearConversationUnreadMessageCount(conversationID: string, conversationType: ZIM.ConversationType): Promise<ZIMConversationUnreadMessageCountClearedResult>;
    clearConversationTotalUnreadMessageCount(): Promise<void>;
    deleteAllConversationMessages(config: ZIMMessageDeleteConfig): Promise<void>;
    setConversationNotificationStatus(status: ZIM.ConversationNotificationStatus, conversationID: string, conversationType: ZIM.ConversationType): Promise<ZIMConversationNotificationStatusSetResult>;
    updateConversationPinnedState(isPinned: boolean, conversationID: string, conversationType: ZIM.ConversationType): Promise<ZIMConversationPinnedStateUpdatedResult>;
    setConversationDraft(draft: string, conversationID: string, conversationType: ZIM.ConversationType): Promise<ZIMConversationDraftSetResult>;
    setConversationMark(markType: number, enable: boolean, conversationInfos: ZIMConversationBaseInfo[]): Promise<ZIMConversationMarkSetResult>;
    sendMessage(message: ZIMMessageBase, toConversationID: string, conversationType: ZIM.ConversationType, config: ZIMMessageSendConfig, notification?: ZIMMessageSendNotification): Promise<ZIMMessageSentResult>;
    sendMediaMessage(message: ZIMMediaMessageBase, toConversationID: string, conversationType: ZIM.ConversationType, config: ZIMMessageSendConfig, notification?: ZIMMediaMessageSendNotification): Promise<ZIMMediaMessageSentResult>;
    deleteMessages(messageList: ZIMMessage[], conversationID: string, conversationType: ZIM.ConversationType, config: ZIMMessageDeleteConfig): Promise<ZIMMessageDeletedResult>;
    deleteAllMessage(conversationID: string, conversationType: ZIM.ConversationType, config: ZIMMessageDeleteConfig): Promise<ZIMMessageDeletedResult>;
    queryHistoryMessage(conversationID: string, conversationType: ZIM.ConversationType, config: ZIMMessageQueryConfig): Promise<ZIMMessageQueriedResult>;
    insertMessageToLocalDB(message: ZIMMessageBase | ZIMMediaMessageBase, conversationID: string, conversationType: ZIM.ConversationType, senderUserID: string): Promise<ZIMMessageInsertedResult>;
    updateMessageLocalExtendedData(localExtendedData: string, message: ZIMMessage): Promise<ZIMMessageLocalExtendedDataUpdatedResult>;
    revokeMessage(message: ZIMMessage, config?: ZIMMessageRevokeConfig): Promise<ZIMMessageRevokedResult>;
    queryCombineMessageDetail(message: ZIMCombineMessage): Promise<ZIMCombineMessageDetailQueriedResult>;
    sendConversationMessageReceiptRead(conversationID: string, conversationType: ZIM.ConversationType): Promise<ZIMConversationMessageReceiptReadSentResult>;
    sendMessageReceiptsRead(messageList: ZIMMessage[], conversationID: string, conversationType: ZIM.ConversationType): Promise<ZIMMessageReceiptsReadSentResult>;
    queryMessageReceiptsInfo(messageList: ZIMMessage[], conversationID: string, conversationType: ZIM.ConversationType): Promise<ZIMMessageReceiptsInfoQueriedResult>;
    queryGroupMessageReceiptReadMemberList(message: ZIMMessage, groupID: string, config: ZIMGroupMessageReceiptMemberQueryConfig): Promise<ZIMGroupMessageReceiptMemberListQueriedResult>;
    queryGroupMessageReceiptUnreadMemberList(message: ZIMMessage, groupID: string, config: ZIMGroupMessageReceiptMemberQueryConfig): Promise<ZIMGroupMessageReceiptMemberListQueriedResult>;
    addMessageReaction(reactionType: string, message: ZIMMessage): Promise<ZIMMessageReactionAddedResult>;
    deleteMessageReaction(reactionType: string, message: ZIMMessage): Promise<ZIMMessageReactionDeletedResult>;
    queryMessageReactionUserList(message: ZIMMessage, config: ZIMMessageReactionUserQueryConfig): Promise<ZIMMessageReactionUserListQueriedResult>;
    replyMessage(message: ZIMMessageBase | ZIMMediaMessageBase, toOriginalMessage: ZIMMessage, config: ZIMMessageSendConfig, notification?: ZIMMessageSendNotification): Promise<ZIMMessageSentResult>;
    queryMessageRepliedList(message: ZIMMessage, config: ZIMMessageRepliedListQueryConfig): Promise<ZIMMessageRepliedListQueriedResult>;
    queryMessages(messageSeqs: number[], conversationID: string, conversationType: ZIM.ConversationType): Promise<ZIMMessageQueriedResult>;
    createRoom(roomInfo: ZIMRoomInfo, config?: ZIMRoomAdvancedConfig): Promise<ZIMRoomCreatedResult>;
    enterRoom(roomInfo: ZIMRoomInfo, config?: ZIMRoomAdvancedConfig): Promise<ZIMRoomEnteredResult>;
    joinRoom(roomID: string): Promise<ZIMRoomJoinedResult>;
    switchRoom(fromRoomID: string, toRoomInfo: ZIMRoomInfo, isCreateWhenRoomNotExisted: boolean, config?: ZIMRoomAdvancedConfig): Promise<ZIMRoomSwitchedResult>;
    leaveRoom(roomID: string): Promise<ZIMRoomLeftResult>;
    leaveAllRoom(): Promise<ZIMRoomAllLeftResult>;
    queryRoomMemberList(roomID: string, config: ZIMRoomMemberQueryConfig): Promise<ZIMRoomMemberQueriedResult>;
    queryRoomMembers(userIDs: string[], roomID: string): Promise<ZIMRoomMembersQueriedResult>;
    queryRoomOnlineMemberCount(roomID: string): Promise<ZIMRoomOnlineMemberCountQueriedResult>;
    queryRoomAllAttributes(roomID: string): Promise<ZIMRoomAttributesQueriedResult>;
    setRoomAttributes(roomAttributes: Record<string, string>, roomID: string, config: ZIMRoomAttributesSetConfig): Promise<ZIMRoomAttributesOperatedResult>;
    deleteRoomAttributes(keys: string[], roomID: string, config: ZIMRoomAttributesDeleteConfig): Promise<ZIMRoomAttributesOperatedResult>;
    beginRoomAttributesBatchOperation(roomID: string, config: ZIMRoomAttributesBatchOperationConfig): void;
    endRoomAttributesBatchOperation(roomID: string): Promise<ZIMRoomAttributesBatchOperatedResult>;
    setRoomMembersAttributes(attributes: Record<string, string>, userIDs: string[], roomID: string, config: ZIMRoomMemberAttributesSetConfig): Promise<ZIMRoomMembersAttributesOperatedResult>;
    queryRoomMembersAttributes(userIDs: string[], roomID: string): Promise<ZIMRoomMembersAttributesQueriedResult>;
    queryRoomMemberAttributesList(roomID: string, config: ZIMRoomMemberAttributesQueryConfig): Promise<ZIMRoomMemberAttributesListQueriedResult>;
    createGroup(groupInfo: ZIMGroupInfo, userIDs: string[], config?: ZIMGroupAdvancedConfig): Promise<ZIMGroupCreatedResult>;
    joinGroup(groupID: string): Promise<ZIMGroupJoinedResult>;
    leaveGroup(groupID: string): Promise<ZIMGroupLeftResult>;
    dismissGroup(groupID: string): Promise<ZIMGroupDismissedResult>;
    queryGroupList(): Promise<ZIMGroupListQueriedResult>;
    updateGroupNotice(groupNotice: string, groupID: string): Promise<ZIMGroupNoticeUpdatedResult>;
    updateGroupName(groupName: string, groupID: string): Promise<ZIMGroupNameUpdatedResult>;
    updateGroupAvatarUrl(groupAvatarUrl: string, groupID: string): Promise<ZIMGroupAvatarUrlUpdatedResult>;
    muteGroup(isMute: boolean, groupID: string, config: ZIMGroupMuteConfig): Promise<ZIMGroupMutedResult>;
    queryGroupInfo(groupID: string): Promise<ZIMGroupInfoQueriedResult>;
    setGroupAttributes(groupAttributes: Record<string, string>, groupID: string): Promise<ZIMGroupAttributesOperatedResult>;
    deleteGroupAttributes(keys: string[], groupID: string): Promise<ZIMGroupAttributesOperatedResult>;
    queryGroupAttributes(keys: string[], groupID: string): Promise<ZIMGroupAttributesQueriedResult>;
    queryGroupAllAttributes(groupID: string): Promise<ZIMGroupAttributesQueriedResult>;
    transferGroupOwner(toUserID: string, groupID: string): Promise<ZIMGroupOwnerTransferredResult>;
    inviteUsersIntoGroup(userIDs: string[], groupID: string): Promise<ZIMGroupUsersInvitedResult>;
    kickGroupMembers(userIDs: string[], groupID: string): Promise<ZIMGroupMemberKickedResult>;
    queryGroupMemberList(groupID: string, config: ZIMGroupMemberQueryConfig): Promise<ZIMGroupMemberListQueriedResult>;
    queryGroupMemberCount(groupID: string): Promise<ZIMGroupMemberCountQueriedResult>;
    muteGroupMembers(isMute: boolean, userIDs: string[], groupID: string, config: ZIMGroupMemberMuteConfig): Promise<ZIMGroupMembersMutedResult>;
    queryGroupMemberMutedList(groupID: string, config: ZIMGroupMemberQueryConfig): Promise<ZIMGroupMemberMutedListQueriedResult>;
    updateGroupAlias(groupAlias: string, groupID: string): Promise<ZIMGroupAliasUpdatedResult>;
    setGroupMemberNickname(nickname: string, forUserID: string, groupID: string): Promise<ZIMGroupMemberNicknameUpdatedResult>;
    setGroupMemberRole(role: number, forUserID: string, groupID: string): Promise<ZIMGroupMemberRoleUpdatedResult>;
    queryGroupMemberInfo(userID: string, groupID: string): Promise<ZIMGroupMemberInfoQueriedResult>;
    updateGroupJoinMode(mode: ZIM.GroupJoinMode, groupID: string): Promise<ZIMGroupJoinModeUpdatedResult>;
    updateGroupInviteMode(mode: ZIM.GroupInviteMode, groupID: string): Promise<ZIMGroupInviteModeUpdatedResult>;
    updateGroupBeInviteMode(mode: ZIM.GroupBeInviteMode, groupID: string): Promise<ZIMGroupBeInviteModeUpdatedResult>;
    sendGroupJoinApplication(groupID: string, config: ZIMGroupJoinApplicationSendConfig): Promise<ZIMGroupJoinApplicationSentResult>;
    acceptGroupJoinApplication(userID: string, groupID: string, config: ZIMGroupJoinApplicationAcceptConfig): Promise<ZIMGroupJoinApplicationAcceptedResult>;
    rejectGroupJoinApplication(userID: string, groupID: string, config: ZIMGroupJoinApplicationRejectConfig): Promise<ZIMGroupJoinApplicationRejectedResult>;
    sendGroupInviteApplications(userIDs: string[], groupID: string, config: ZIMGroupInviteApplicationSendConfig): Promise<ZIMGroupInviteApplicationsSentResult>;
    acceptGroupInviteApplication(inviterUserID: string, groupID: string, config: ZIMGroupInviteApplicationAcceptConfig): Promise<ZIMGroupInviteApplicationAcceptedResult>;
    rejectGroupInviteApplication(inviterUserID: string, groupID: string, config: ZIMGroupInviteApplicationRejectConfig): Promise<ZIMGroupInviteApplicationRejectedResult>;
    queryGroupApplicationList(config: ZIMGroupApplicationListQueryConfig): Promise<ZIMGroupApplicationListQueriedResult>;
    callInvite(invitees: string[], config: ZIMCallInviteConfig): Promise<ZIMCallInvitationSentResult>;
    callCancel(invitees: string[], callID: string, config: ZIMCallCancelConfig): Promise<ZIMCallCancelSentResult>;
    callAccept(callID: string, config: ZIMCallAcceptConfig): Promise<ZIMCallAcceptanceSentResult>;
    callReject(callID: string, config: ZIMCallRejectConfig): Promise<ZIMCallRejectionSentResult>;
    callQuit(callID: string, config: ZIMCallQuitConfig): Promise<ZIMCallQuitSentResult>;
    callEnd(callID: string, config: ZIMCallEndConfig): Promise<ZIMCallEndSentResult>;
    callJoin(callID: string, config: ZIMCallJoinConfig): Promise<ZIMCallJoinSentResult>;
    callingInvite(invitees: string[], callID: string, config: ZIMCallingInviteConfig): Promise<ZIMCallingInvitationSentResult>;
    queryCallInvitationList(config: ZIMCallInvitationQueryConfig): Promise<ZIMCallInvitationListQueriedResult>;
    searchLocalConversations(config: ZIMConversationSearchConfig): Promise<ZIMConversationsSearchedResult>;
    searchGlobalLocalMessages(config: ZIMMessageSearchConfig): Promise<ZIMMessagesGlobalSearchedResult>;
    searchLocalMessages(conversationID: string, conversationType: ZIM.ConversationType, config: ZIMMessageSearchConfig): Promise<ZIMMessagesSearchedResult>;
    searchLocalGroups(config: ZIMGroupSearchConfig): Promise<ZIMGroupsSearchedResult>;
    searchLocalGroupMembers(groupID: string, config: ZIMGroupMemberSearchConfig): Promise<ZIMGroupMembersSearchedResult>;
    searchLocalFriends(config: ZIMFriendSearchConfig): Promise<ZIMFriendsSearchedResult>;
    addFriend(userID: string, config: ZIMFriendAddConfig): Promise<ZIMFriendAddedResult>;
    sendFriendApplication(userID: string, config: ZIMFriendApplicationSendConfig): Promise<ZIMFriendApplicationSentResult>;
    deleteFriends(userIDs: string[], config: ZIMFriendDeleteConfig): Promise<ZIMFriendsDeletedResult>;
    checkFriendsRelation(userIDs: string[], config: ZIMFriendRelationCheckConfig): Promise<ZIMFriendsRelationCheckedResult>;
    updateFriendAlias(friendAlias: string, userID: string): Promise<ZIMFriendAliasUpdatedResult>;
    updateFriendAttributes(friendAttributes: Record<string, string>, userID: string): Promise<ZIMFriendAttributesUpdatedResult>;
    acceptFriendApplication(userID: string, config: ZIMFriendApplicationAcceptConfig): Promise<ZIMFriendApplicationAcceptedResult>;
    rejectFriendApplication(userID: string, config: ZIMFriendApplicationRejectConfig): Promise<ZIMFriendApplicationRejectedResult>;
    queryFriendsInfo(userIDs: string[]): Promise<ZIMFriendsInfoQueriedResult>;
    queryFriendList(config: ZIMFriendListQueryConfig): Promise<ZIMFriendListQueriedResult>;
    queryFriendApplicationList(config: ZIMFriendApplicationListQueryConfig): Promise<ZIMFriendApplicationListQueriedResult>;
    addUsersToBlacklist(userIDs: string[]): Promise<ZIMBlacklistUsersAddedResult>;
    removeUsersFromBlacklist(userIDs: string[]): Promise<ZIMBlacklistUsersRemovedResult>;
    checkUserIsInBlacklist(userID: string): Promise<ZIMBlacklistCheckedResult>;
    queryBlacklist(config: ZIMBlacklistQueryConfig): Promise<ZIMBlacklistQueriedResult>;
}
