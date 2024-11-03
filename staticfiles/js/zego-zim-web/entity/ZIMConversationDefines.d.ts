import { ZIM, ZIMGroupMuteInfo, ZIMPushConfig, ZIMUserInfo } from './index';
export interface ZIMConversationBaseInfo {
    conversationID: string;
    conversationType: ZIM.ConversationType;
}
export interface ZIMConversation {
    type: ZIM.ConversationType;
    conversationID: string;
    conversationName: string;
    conversationAlias: string;
    conversationAvatarUrl: string;
    unreadMessageCount: number;
    orderKey: number;
    notificationStatus: ZIM.ConversationNotificationStatus;
    isPinned: boolean;
    isDisabled: boolean;
    mutedExpiredTime: number;
    draft: string;
    marks: number[];
    mentionedInfoList: ZIMMessageMentionedInfo[];
    lastMessage?: ZIMMessage;
}
export interface ZIMGroupConversation extends ZIMConversation {
    isDisabled: boolean;
    mutedExpiredTime: number;
}
export interface ZIMMessageReceivedInfo {
    isOfflineMessage: boolean;
}
export interface ZIMMessageMentionedInfo {
    type: ZIM.MessageMentionedType;
    fromUserID: string;
    messageID: string;
    messageSeq: number;
}
export interface ZIMMessageRepliedInfo {
    state: ZIM.MessageRepliedInfoState;
    messageSeq: number;
    messageID: string;
    senderUserID: string;
    sentTime: number;
    messageInfo: ZIMMessageLiteInfo;
    rootMessageSeq: number;
    rootMessageID: string;
}
export interface ZIMMessageRootRepliedInfo {
    messageSeq: number;
    state: ZIM.MessageRepliedInfoState;
    senderUserID: string;
    sentTime: number;
    repliedCount: number;
    message?: ZIMMessage;
}
export interface ZIMMessageRootRepliedCountInfo {
    conversationID: string;
    conversationType: ZIM.ConversationType;
    count: number;
    messageID: string;
}
export interface ZIMConversationChangeInfo {
    event: ZIM.ConversationEvent;
    conversation: ZIMConversation;
}
export interface ZIMMessageBase {
    type: ZIM.MessageType;
    message: string | Uint8Array;
    extendedData?: string;
    localExtendedData?: string;
    mentionedUserIDs?: string[];
    isMentionAll?: boolean;
}
export interface ZIMMediaMessageBase {
    type: ZIM.MessageType.Image | ZIM.MessageType.File | ZIM.MessageType.Audio | ZIM.MessageType.Video;
    extendedData?: string;
    localExtendedData?: string;
    mentionedUserIDs?: string[];
    isMentionAll?: boolean;
    /**
     * Required when sending local file media message.
     */
    fileLocalPath?: File;
    /**
     * Required when sending remote file media message.
     */
    fileDownloadUrl?: string;
    /**
     * Required for audio file.
     */
    audioDuration?: number;
    /**
     * Required for video file.
     */
    videoDuration?: number;
}
export interface ZIMMessage extends ZIMMessageBase {
    localMessageID: string;
    messageID: string;
    messageSeq: number;
    senderUserID: string;
    timestamp: number;
    conversationID: string;
    conversationType: ZIM.ConversationType;
    direction: ZIM.MessageDirection;
    sentStatus: ZIM.MessageSentStatus;
    orderKey: number;
    isUserInserted: boolean;
    isBroadcastMessage: boolean;
    isServerMessage: boolean;
    receiptStatus: ZIM.MessageReceiptStatus;
    reactions: ZIMMessageReaction[];
    rootRepliedCount: number;
    repliedInfo?: ZIMMessageRepliedInfo;
}
export interface ZIMMediaMessage extends ZIMMediaMessageBase, ZIMMessage {
    type: ZIM.MessageType.Image | ZIM.MessageType.File | ZIM.MessageType.Audio | ZIM.MessageType.Video;
    fileLocalPath: File;
    fileDownloadUrl: string;
    fileName: string;
    fileSize: number;
    fileUID: string;
}
export interface ZIMTextMessage extends ZIMMessage {
    type: ZIM.MessageType.Text;
    message: string;
}
export interface ZIMCommandMessage extends ZIMMessage {
    type: ZIM.MessageType.Command;
    message: Uint8Array;
}
export interface ZIMBarrageMessage extends ZIMMessage {
    type: ZIM.MessageType.Barrage;
    message: string;
}
export interface ZIMRevokeMessage extends ZIMMessage {
    type: ZIM.MessageType.Revoke;
    message: string;
    revokeType: ZIM.RevokeType;
    revokeStatus: ZIM.MessageRevokeStatus;
    revokeTimestamp: number;
    operatedUserID: string;
    revokeExtendedData: string;
    originalMessageType: ZIM.MessageType;
    originalTextMessageContent: string;
}
export interface ZIMCustomMessage extends ZIMMessage {
    type: ZIM.MessageType.Custom;
    message: string;
    subType: number;
    searchedContent: string;
}
export interface ZIMCombineMessage extends ZIMMessage {
    type: ZIM.MessageType.Combine;
    title: string;
    summary: string;
    combineID: string;
    messageList: ZIMMessage[];
}
export interface ZIMTipsMessage extends ZIMMessage {
    type: ZIM.MessageType.Tips;
    event: ZIM.TipsMessageEvent;
    operatedUser: ZIMUserInfo;
    targetUserList: ZIMUserInfo[];
    changeInfo?: ZIMTipsMessageChangeInfo;
}
export interface ZIMTipsMessageChangeInfo {
    type: ZIM.TipsMessageChangeInfoType;
}
export interface ZIMTipsMessageGroupChangeInfo extends ZIMTipsMessageChangeInfo {
    groupDataFlag: number;
    groupName: string;
    groupAvatarUrl: string;
    groupNotice: string;
    groupMutedInfo: ZIMGroupMuteInfo;
}
export interface ZIMTipsMessageGroupMemberChangeInfo extends ZIMTipsMessageChangeInfo {
    memberRole: number;
    muteExpiredTime: number;
}
export interface ZIMImageMessage extends ZIMMediaMessage {
    type: ZIM.MessageType.Image;
    thumbnailDownloadUrl: string;
    largeImageDownloadUrl: string;
    originalImageWidth: number;
    originalImageHeight: number;
    thumbnailWidth: number;
    thumbnailHeight: number;
    largeImageWidth: number;
    largeImageHeight: number;
}
export interface ZIMFileMessage extends ZIMMediaMessage {
    type: ZIM.MessageType.File;
}
export interface ZIMAudioMessage extends ZIMMediaMessage {
    type: ZIM.MessageType.Audio;
    audioDuration: number;
}
export interface ZIMVideoMessage extends ZIMMediaMessage {
    type: ZIM.MessageType.Video;
    videoDuration: number;
    videoFirstFrameDownloadUrl: string;
    videoFirstFrameWidth: number;
    videoFirstFrameHeight: number;
}
export interface ZIMMessageLiteInfo {
    type: ZIM.MessageType;
}
export interface ZIMMediaMessageLiteInfo extends ZIMMessageLiteInfo {
    type: ZIM.MessageType.Image | ZIM.MessageType.File | ZIM.MessageType.Audio | ZIM.MessageType.Video;
    fileSize: number;
    fileName: string;
    fileDownloadUrl: string;
    fileLocalPath?: File;
}
export interface ZIMRevokeMessageLiteInfo extends ZIMMessageLiteInfo {
    type: ZIM.MessageType.Revoke;
}
export interface ZIMTextMessageLiteInfo extends ZIMMessageLiteInfo {
    type: ZIM.MessageType.Text;
    message: string;
}
export interface ZIMCustomMessageLiteInfo extends ZIMMessageLiteInfo {
    type: ZIM.MessageType.Custom;
    message: string;
    subType: number;
}
export interface ZIMCombineMessageLiteInfo extends ZIMMessageLiteInfo {
    type: ZIM.MessageType.Combine;
    title: string;
    summary: string;
}
export interface ZIMImageMessageLiteInfo extends ZIMMediaMessageLiteInfo {
    type: ZIM.MessageType.Image;
    thumbnailDownloadUrl: string;
    largeImageDownloadUrl: string;
    originalImageWidth: number;
    originalImageHeight: number;
    thumbnailWidth: number;
    thumbnailHeight: number;
    largeImageWidth: number;
    largeImageHeight: number;
}
export interface ZIMFileMessageLiteInfo extends ZIMMediaMessageLiteInfo {
    type: ZIM.MessageType.File;
}
export interface ZIMAudioMessageLiteInfo extends ZIMMediaMessageLiteInfo {
    type: ZIM.MessageType.Audio;
    audioDuration: number;
}
export interface ZIMVideoMessageLiteInfo extends ZIMMediaMessageLiteInfo {
    type: ZIM.MessageType.Video;
    videoDuration: number;
    videoFirstFrameDownloadUrl: string;
    videoFirstFrameWidth: number;
    videoFirstFrameHeight: number;
}
export interface ZIMMessageReaction {
    conversationID: string;
    conversationType: ZIM.ConversationType;
    messageID: string;
    reactionType: string;
    isSelfIncluded: boolean;
    totalCount: number;
    userList: ZIMMessageReactionUserInfo[];
}
export interface ZIMMessageReactionUserInfo {
    userID: string;
}
export interface ZIMMessageReceiptInfo {
    conversationID: string;
    conversationType: ZIM.ConversationType;
    messageID: string;
    status: ZIM.MessageReceiptStatus;
    readMemberCount: number;
    unreadMemberCount: number;
    isSelfOperated: boolean;
}
export interface ZIMMessageSentStatusChangeInfo {
    status: ZIM.MessageSentStatus;
    reason: string;
    message: ZIMMessage;
}
export interface ZIMConversationSearchInfo {
    conversationID: string;
    conversationType: ZIM.ConversationType;
    totalMessageCount: number;
    messageList: ZIMMessage[];
}
export interface ZIMMessageSendNotification {
    onMessageAttached: (message: ZIMMessage) => void;
    onMediaUploadingProgress?: (message: ZIMMessage, currentFileSize: number, totalFileSize: number) => void;
}
export interface ZIMMediaMessageSendNotification {
    onMessageAttached: (message: ZIMMediaMessage) => void;
    onMediaUploadingProgress?: (message: ZIMMediaMessage, currentFileSize: number, totalFileSize: number) => void;
}
export interface ZIMConversationQueryConfig {
    count: number;
    nextConversation?: ZIMConversation;
}
export interface ZIMConversationTotalUnreadMessageCountQueryConfig {
    marks: number[];
    conversationTypes: ZIM.ConversationType[];
}
export interface ZIMConversationFilterOption {
    marks: number[];
    conversationTypes: ZIM.ConversationType[];
    isOnlyUnreadConversation: boolean;
}
export interface ZIMConversationDeleteConfig {
    isAlsoDeleteServerConversation: boolean;
}
export interface ZIMMessageDeleteConfig {
    isAlsoDeleteServerMessage: boolean;
}
export interface ZIMMessageQueryConfig {
    count: number;
    reverse: boolean;
    nextMessage?: ZIMMessage;
}
export interface ZIMGroupMessageReceiptMemberQueryConfig {
    count: number;
    nextFlag: number;
}
export interface ZIMConversationSearchConfig {
    keywords: string[];
    senderUserIDs: string[];
    messageTypes: ZIM.MessageType[];
    subMessageTypes: number[];
    startTime: number;
    endTime: number;
    totalConversationCount: number;
    conversationMessageCount: number;
    nextFlag?: number;
}
export interface ZIMMessageSearchConfig {
    keywords: string[];
    senderUserIDs: string[];
    messageTypes: ZIM.MessageType[];
    subMessageTypes: number[];
    startTime: number;
    endTime: number;
    order: ZIM.MessageOrder;
    count: number;
    nextMessage?: ZIMMessage;
}
export interface ZIMMessageReactionUserQueryConfig {
    reactionType: string;
    count: number;
    nextFlag: number;
}
export interface ZIMMessageSendConfig {
    priority: ZIM.MessagePriority;
    hasReceipt?: boolean;
    isNotifyMentionedUsers?: boolean;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMMessageRevokeConfig {
    revokeExtendedData?: string;
    pushConfig?: ZIMPushConfig;
}
export interface ZIMConversationListQueriedResult {
    conversationList: ZIMConversation[];
}
export interface ZIMConversationQueriedResult {
    conversation: ZIMConversation;
}
export interface ZIMConversationDeletedResult {
    conversationID: string;
    conversationType: ZIM.ConversationType;
}
export interface ZIMConversationNotificationStatusSetResult {
    conversationID: string;
    conversationType: ZIM.ConversationType;
}
export interface ZIMConversationUnreadMessageCountClearedResult {
    conversationID: string;
    conversationType: ZIM.ConversationType;
}
export interface ZIMMessageDeletedResult {
    conversationID: string;
    conversationType: ZIM.ConversationType;
}
export interface ZIMMessageSentResult {
    message: ZIMMessage;
}
export interface ZIMMediaMessageSentResult {
    message: ZIMMessage;
}
export interface ZIMMessageInsertedResult {
    message: ZIMMessage;
}
export interface ZIMMessageLocalExtendedDataUpdatedResult {
    message: ZIMMessage;
}
export interface ZIMMessageQueriedResult {
    conversationID: string;
    conversationType: ZIM.ConversationType;
    messageList: ZIMMessage[];
}
export interface ZIMConversationMessageReceiptReadSentResult {
    conversationID: string;
    conversationType: ZIM.ConversationType;
}
export interface ZIMMessageReceiptsReadSentResult {
    conversationID: string;
    conversationType: ZIM.ConversationType;
    errorMessageIDs: string[];
}
export interface ZIMMessageReceiptsInfoQueriedResult {
    infos: ZIMMessageReceiptInfo[];
    errorMessageIDs: string[];
}
export interface ZIMMessageRevokedResult {
    message: ZIMRevokeMessage;
}
export interface ZIMConversationPinnedStateUpdatedResult {
    conversationID: string;
    conversationType: ZIM.ConversationType;
}
export interface ZIMConversationPinnedListQueriedResult {
    conversationList: ZIMConversation[];
}
export interface ZIMConversationsSearchedResult {
    nextFlag?: number;
    conversationSearchInfoList: ZIMConversationSearchInfo[];
}
export interface ZIMMessagesGlobalSearchedResult {
    messageList: ZIMMessage[];
    nextMessage?: ZIMMessage;
}
export interface ZIMMessagesSearchedResult {
    conversationID: string;
    conversationType: ZIM.ConversationType;
    messageList: ZIMMessage[];
    nextMessage?: ZIMMessage;
}
export interface ZIMMessageReactionAddedResult {
    reaction: ZIMMessageReaction;
}
export interface ZIMMessageReactionDeletedResult {
    reaction: ZIMMessageReaction;
}
export interface ZIMMessageReactionUserListQueriedResult {
    totalCount: number;
    nextFlag: number;
    reactionType: string;
    userList: ZIMMessageReactionUserInfo[];
    message: ZIMMessage;
}
export interface ZIMCombineMessageDetailQueriedResult {
    message: ZIMCombineMessage;
}
export interface ZIMConversationDraftSetResult {
    conversationID: string;
    conversationType: ZIM.ConversationType;
}
export interface ZIMMessageRepliedListQueryConfig {
    count: number;
    nextFlag: number;
}
export interface ZIMMessageRepliedListQueriedResult {
    nextFlag: number;
    rootRepliedInfo: ZIMMessageRootRepliedInfo;
    messageList: ZIMMessage[];
}
export interface ZIMConversationMarkSetResult {
    failedConversationInfos: ZIMConversationBaseInfo[];
}
export interface ZIMConversationTotalUnreadMessageCountQueriedResult {
    unreadMessageCount: number;
}
