export declare enum ZIMConnectionState {
    Disconnected = 0,
    Connecting = 1,
    Connected = 2,
    Reconnecting = 3,
}
export declare enum ZIMConnectionEvent {
    Success = 0,
    ActiveLogin = 1,
    LoginTimeout = 2,
    LoginInterrupted = 3,
    KickedOut = 4,
    TokenExpired = 5,
    Unregistered = 6,
}
export declare enum ZIMMessagePriority {
    Low = 1,
    Medium = 2,
    High = 3,
}
export declare enum ZIMGeofencingType {
    None = 0,
    Include = 1,
    Exclude = 2,
}
export declare enum ZIMCXHandleType {
    Generic = 1,
    PhoneNumber = 2,
    EmailAddress = 3,
}
export declare enum ZIMPlatformType {
    Win = 1,
    IPhoneOS = 2,
    Android = 3,
    MacOS = 4,
    Linux = 5,
    Web = 6,
    MiniProgram = 7,
    IPadOS = 9,
    Unknown = 32,
}
export declare enum ZIMCallInvitationMode {
    Unknown = -1,
    General = 0,
    Advanced = 1,
}
export declare enum ZIMCallState {
    Unknown = -1,
    Started = 1,
    Ended = 2,
}
export declare enum ZIMCallUserState {
    Unknown = -1,
    Inviting = 0,
    Accepted = 1,
    Rejected = 2,
    Cancelled = 3,
    Received = 5,
    Timeout = 6,
    Quit = 7,
    Ended = 8,
    NotYetReceived = 9,
    BeCancelled = 10,
}
export declare enum ZIMConversationType {
    Unknown = -1,
    Peer = 0,
    Room = 1,
    Group = 2,
}
export declare enum ZIMConversationEvent {
    Added = 0,
    Updated = 1,
    Disabled = 2,
    Deleted = 3,
}
export declare enum ZIMConversationNotificationStatus {
    Notify = 1,
    DoNotDisturb = 2,
}
export declare enum ZIMMessageType {
    Unknown = 0,
    Command = 2,
    Barrage = 20,
    Text = 1,
    Image = 11,
    File = 12,
    Audio = 13,
    Video = 14,
    System = 30,
    Revoke = 31,
    Tips = 32,
    Combine = 100,
    Custom = 200,
}
export declare enum ZIMMessageSentStatus {
    Sending = 0,
    Success = 1,
    Failed = 2,
}
export declare enum ZIMMessageDirection {
    Send = 0,
    Receive = 1,
}
export declare enum ZIMMessageOrder {
    Descending = 0,
    Ascending = 1,
}
export declare enum ZIMMessageRepliedInfoState {
    Normal = 0,
    Deleted = 1,
    NotFound = 2,
}
export declare enum ZIMMessageReceiptStatus {
    None = 0,
    Processing = 1,
    Done = 2,
    Expired = 3,
    Failed = 4,
}
export declare enum ZIMMessageRevokeStatus {
    Unknown = -1,
    SelfRevoke = 0,
    SystemRevoke = 1,
    ServiceAPIRevoke = 2,
    GroupAdminRevoke = 3,
    GroupOwnerRevoke = 4,
    AuditRevoke = 5,
}
export declare enum ZIMRevokeType {
    TwoWay = 0,
    OneWay = 1,
}
export declare enum ZIMMessageMentionedType {
    MentionMe = 1,
    MentionAll = 2,
    MentionAllAndMe = 3,
}
export declare enum ZIMMessageDeleteType {
    MessageListDeleted = 0,
    ConversationAllMessagesDeleted = 1,
    AllConversationMessagesDeleted = 2,
}
export declare enum ZIMTipsMessageEvent {
    Unknown = 0,
    GroupCreated = 1,
    GroupDismissed = 2,
    GroupJoined = 3,
    GroupInvited = 4,
    GroupLeft = 5,
    GroupKickedOut = 6,
    GroupInfoChanged = 7,
    GroupMemberInfoChanged = 8,
}
export declare enum ZIMTipsMessageChangeInfoType {
    GroupDataChanged = 1,
    GroupNoticeChanged = 2,
    GroupNameChanged = 3,
    GroupAvatarUrlChanged = 4,
    GroupMuteChanged = 5,
    GroupOwnerTransferred = 10,
    GroupMemberRoleChanged = 11,
    GroupMemberMuteChanged = 12,
}
export declare enum ZIMBlacklistChangeAction {
    Added = 0,
    Removed = 1,
}
export declare enum ZIMUserRelationType {
    SingleNo = 1,
    SingleHave = 2,
    BothAllNo = 3,
    BothSelfHave = 4,
    BothOtherHave = 5,
    BothAllHave = 6,
}
export declare enum ZIMFriendRelationCheckType {
    Both = 0,
    Single = 1,
}
export declare enum ZIMFriendDeleteType {
    Both = 0,
    Single = 1,
}
export declare enum ZIMFriendListChangeAction {
    Added = 0,
    Deleted = 1,
}
export declare enum ZIMFriendApplicationType {
    None = 0,
    Received = 1,
    Sent = 2,
    Both = 3,
}
export declare enum ZIMFriendApplicationState {
    Waiting = 1,
    Accepted = 2,
    Rejected = 3,
    Expired = 4,
    Disabled = 5,
}
export declare enum ZIMFriendApplicationListChangeAction {
    Added = 0,
}
export declare enum ZIMGroupMessageNotificationStatus {
    Notify = 1,
    Disturb = 2,
}
export declare enum ZIMGroupState {
    Quit = 0,
    Enter = 1,
}
export declare enum ZIMGroupEvent {
    Created = 1,
    Dismissed = 2,
    Joined = 3,
    Invited = 4,
    Left = 5,
    KickedOut = 6,
}
export declare enum ZIMGroupMemberState {
    Quit = 0,
    Enter = 1,
}
export declare enum ZIMGroupMemberEvent {
    Joined = 1,
    Left = 2,
    KickedOut = 4,
    Invited = 5,
}
export declare enum ZIMGroupAttributesUpdateAction {
    Set = 0,
    Delete = 1,
}
export declare enum ZIMGroupMuteMode {
    None = 0,
    Normal = 1,
    All = 2,
    Custom = 3,
}
export declare enum ZIMGroupJoinMode {
    Any = 0,
    Auth = 1,
    Forbid = 2,
}
export declare enum ZIMGroupInviteMode {
    Any = 0,
    Admin = 1,
}
export declare enum ZIMGroupBeInviteMode {
    None = 0,
    Auth = 1,
}
export declare enum ZIMGroupEnterType {
    Unknown = 0,
    Created = 1,
    JoinApply = 2,
    Joined = 3,
    Invited = 4,
    InviteApply = 5,
}
export declare enum ZIMGroupApplicationType {
    None = 0,
    Join = 1,
    Invite = 2,
    BeInvite = 3,
}
export declare enum ZIMGroupApplicationState {
    Waiting = 1,
    Accepted = 2,
    Rejected = 3,
    Expired = 4,
    Disabled = 5,
}
export declare enum ZIMGroupApplicationListChangeAction {
    Added = 0,
}
export declare enum ZIMRoomState {
    Disconnected = 0,
    Connecting = 1,
    Connected = 2,
}
export declare enum ZIMRoomEvent {
    Success = 0,
    NetworkInterrupted = 1,
    NetworkDisconnected = 2,
    RoomNotExist = 3,
    ActiveCreate = 4,
    CreateFailed = 5,
    ActiveEnter = 6,
    EnterFailed = 7,
    KickedOut = 8,
    ConnectTimeout = 9,
    KickedOutByOtherDevice = 10,
    ActiveSwitch = 11,
    SwitchFailed = 12,
}
export declare enum ZIMRoomAttributesUpdateAction {
    Set = 0,
    Delete = 1,
}
