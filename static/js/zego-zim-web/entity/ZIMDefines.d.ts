import { ZIM } from './index';
export interface ZIMAppConfig {
    appID: number;
}
export interface ZIMLogConfig {
    logLevel: string;
}
export interface ZIMLoginConfig {
    userName: string;
    token: string;
    isOfflineLogin: boolean;
}
export interface ZIMVoIPConfig {
    iOSVoIPHandleType: ZIM.CXHandleType;
    iOSVoIPHandleValue: string;
    iOSVoIPHasVideo: boolean;
}
export interface ZIMPushConfig {
    title: string;
    content: string;
    payload?: string;
    resourcesID?: string;
    badgeIncrement?: number;
    enableBadge?: boolean;
    voIPConfig?: ZIMVoIPConfig;
}
export interface ZIMErrorUserInfo {
    userID: string;
    reason: number;
}
export interface ZIMUserInfo {
    userID: string;
    userName: string;
    userAvatarUrl: string;
}
export interface ZIMUserStatus {
    userID: string;
    onlineStatus: ZIM.UserOnlineStatus;
    lastUpdateTime: number;
    onlinePlatforms: ZIM.PlatformType[];
}
export interface ZIMUserStatusSubscription {
    userStatus: ZIMUserStatus;
    subscribeExpiredTime: number;
}
export interface ZIMUserFullInfo {
    baseInfo: ZIMUserInfo;
    extendedData: string;
}
export interface ZIMRoomMemberInfo {
    userID: string;
    userName: string;
    userAvatarUrl: string;
}
export interface ZIMUsersInfoQueryConfig {
    isQueryFromServer: boolean;
}
export interface ZIMTokenRenewedResult {
    token: string;
}
export interface ZIMUsersInfoQueriedResult {
    userList: ZIMUserFullInfo[];
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMUserNameUpdatedResult {
    userName: string;
}
export interface ZIMUserExtendedDataUpdatedResult {
    extendedData: string;
}
export interface ZIMUserAvatarUrlUpdatedResult {
    userAvatarUrl: string;
}
export interface ZIMUserOfflinePushRule {
    onlinePlatforms: ZIM.PlatformType[];
    notToReceiveOfflinePushPlatforms: ZIM.PlatformType[];
}
export interface ZIMUserRule {
    offlinePushRule: ZIMUserOfflinePushRule;
}
export interface ZIMUserOfflinePushRuleUpdatedResult {
    offlinePushRule: ZIMUserOfflinePushRule;
}
export interface ZIMSelfUserInfo {
    userFullInfo: ZIMUserFullInfo;
    userStatus: ZIMUserStatus;
    userRule: ZIMUserRule;
}
export interface ZIMSelfUserInfoQueriedResult {
    selfUserInfo: ZIMSelfUserInfo;
}
export interface ZIMUserStatusSubscribeConfig {
    subscriptionDuration: number;
}
export interface ZIMSubscribedUserStatusQueryConfig {
    userIDs?: string[];
}
export interface ZIMUsersStatusSubscribedResult {
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMUsersStatusUnsubscribedResult {
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMUsersStatusQueriedResult {
    userStatusList: ZIMUserStatus[];
    errorUserList: ZIMErrorUserInfo[];
}
export interface ZIMSubscribedUserStatusListQueriedResult {
    userStatusSubscriptionList: ZIMUserStatusSubscription[];
}
