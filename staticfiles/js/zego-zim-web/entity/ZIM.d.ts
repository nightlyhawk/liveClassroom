import { ZIMAppConfig, ZIMSDK } from './index';
declare namespace ZIM {
    const TAG: string;

    function getVersion(): string;
    function setGeofencingConfig(areaList: number[], type: ZIM.GeofencingType): boolean;
    function create(appConfig: number | ZIMAppConfig): ZIMSDK | null;
    function getInstance(): ZIMSDK;

    enum ConnectionState {
        Disconnected = 0,
        Connecting = 1,
        Connected = 2,
        Reconnecting = 3
    }
    enum ConnectionEvent {
        Success = 0,
        ActiveLogin = 1,
        LoginTimeout = 2,
        LoginInterrupted = 3,
        KickedOut = 4,
        TokenExpired = 5,
        Unregistered = 6
    }
    enum MessagePriority {
        Low = 1,
        Medium = 2,
        High = 3
    }
    enum GeofencingType {
        None = 0,
        Include = 1,
        Exclude = 2
    }
    enum CXHandleType {
        Generic = 1,
        PhoneNumber = 2,
        EmailAddress = 3
    }
    enum PlatformType {
        Win = 1,
        IPhoneOS = 2,
        Android = 3,
        MacOS = 4,
        Linux = 5,
        Web = 6,
        MiniProgram = 7,
        IPadOS = 9,
        Unknown = 32
    }
    enum UserOnlineStatus {
        Online = 0,
        Offline = 1,
        Logout = 2,
        Unknown = 99
    }
    enum CallInvitationMode {
        Unknown = -1,
        General = 0,
        Advanced = 1
    }
    enum CallState {
        Unknown = -1,
        Started = 1,
        Ended = 2
    }
    enum CallUserState {
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
        BeCancelled = 10
    }
    enum ConversationType {
        Unknown = -1,
        Peer = 0,
        Room = 1,
        Group = 2
    }
    enum ConversationEvent {
        Added = 0,
        Updated = 1,
        Disabled = 2,
        Deleted = 3
    }
    enum ConversationNotificationStatus {
        Notify = 1,
        DoNotDisturb = 2
    }
    enum MessageType {
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
        Custom = 200
    }
    enum MessageSentStatus {
        Sending = 0,
        Success = 1,
        Failed = 2
    }
    enum MessageDirection {
        Send = 0,
        Receive = 1
    }
    enum MessageOrder {
        Descending = 0,
        Ascending = 1
    }
    enum MessageRepliedInfoState {
        Normal = 0,
        Deleted = 1,
        NotFound = 2
    }
    enum MessageReceiptStatus {
        None = 0,
        Processing = 1,
        Done = 2,
        Expired = 3,
        Failed = 4
    }
    enum MessageRevokeStatus {
        Unknown = -1,
        SelfRevoke = 0,
        SystemRevoke = 1,
        ServiceAPIRevoke = 2,
        GroupAdminRevoke = 3,
        GroupOwnerRevoke = 4,
        AuditRevoke = 5
    }
    enum RevokeType {
        TwoWay = 0,
        OneWay = 1
    }
    enum MessageMentionedType {
        MentionMe = 1,
        MentionAll = 2,
        MentionAllAndMe = 3
    }
    enum MessageDeleteType {
        MessageListDeleted = 0,
        ConversationAllMessagesDeleted = 1,
        AllConversationMessagesDeleted = 2
    }
    enum TipsMessageEvent {
        Unknown = 0,
        GroupCreated = 1,
        GroupDismissed = 2,
        GroupJoined = 3,
        GroupInvited = 4,
        GroupLeft = 5,
        GroupKickedOut = 6,
        GroupInfoChanged = 7,
        GroupMemberInfoChanged = 8
    }
    enum TipsMessageChangeInfoType {
        GroupDataChanged = 1,
        GroupNoticeChanged = 2,
        GroupNameChanged = 3,
        GroupAvatarUrlChanged = 4,
        GroupMuteChanged = 5,
        GroupOwnerTransferred = 10,
        GroupMemberRoleChanged = 11,
        GroupMemberMuteChanged = 12
    }
    enum BlacklistChangeAction {
        Added = 0,
        Removed = 1
    }
    enum UserRelationType {
        SingleNo = 1,
        SingleHave = 2,
        BothAllNo = 3,
        BothSelfHave = 4,
        BothOtherHave = 5,
        BothAllHave = 6
    }
    enum FriendRelationCheckType {
        Both = 0,
        Single = 1
    }
    enum FriendDeleteType {
        Both = 0,
        Single = 1
    }
    enum FriendListChangeAction {
        Added = 0,
        Deleted = 1
    }
    enum FriendApplicationType {
        None = 0,
        Received = 1,
        Sent = 2,
        Both = 3
    }
    enum FriendApplicationState {
        Waiting = 1,
        Accepted = 2,
        Rejected = 3,
        Expired = 4,
        Disabled = 5
    }
    enum FriendApplicationListChangeAction {
        Added = 0
    }
    enum GroupMessageNotificationStatus {
        Notify = 1,
        Disturb = 2
    }
    enum GroupState {
        Quit = 0,
        Enter = 1
    }
    enum GroupEvent {
        Created = 1,
        Dismissed = 2,
        Joined = 3,
        Invited = 4,
        Left = 5,
        KickedOut = 6
    }
    enum GroupMemberState {
        Quit = 0,
        Enter = 1
    }
    enum GroupMemberEvent {
        Joined = 1,
        Left = 2,
        KickedOut = 4,
        Invited = 5
    }
    enum GroupAttributesUpdateAction {
        Set = 0,
        Delete = 1
    }
    enum GroupMuteMode {
        None = 0,
        Normal = 1,
        All = 2,
        Custom = 3
    }
    enum GroupJoinMode {
        Any = 0,
        Auth = 1,
        Forbid = 2
    }
    enum GroupInviteMode {
        Any = 0,
        Admin = 1
    }
    enum GroupBeInviteMode {
        None = 0,
        Auth = 1
    }
    enum GroupEnterType {
        Unknown = 0,
        Created = 1,
        JoinApply = 2,
        Joined = 3,
        Invited = 4,
        InviteApply = 5
    }
    enum GroupApplicationType {
        None = 0,
        Join = 1,
        Invite = 2,
        BeInvite = 3
    }
    enum GroupApplicationState {
        Waiting = 1,
        Accepted = 2,
        Rejected = 3,
        Expired = 4,
        Disabled = 5
    }
    enum GroupApplicationListChangeAction {
        Added = 0
    }
    enum RoomState {
        Disconnected = 0,
        Connecting = 1,
        Connected = 2
    }
    enum RoomEvent {
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
        SwitchFailed = 12
    }
    enum RoomAttributesUpdateAction {
        Set = 0,
        Delete = 1
    }
}
export default ZIM;
export { ZIM };
