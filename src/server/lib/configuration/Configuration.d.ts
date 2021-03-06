
export interface LdapConfiguration {
    url: string;
    base_dn: string;
    additional_user_dn?: string;
    user_name_attribute?: string; // cn by default
    additional_group_dn?: string;
    group_name_attribute?: string; // cn by default
    user: string; // admin username
    password: string; // admin password
}

type UserName = string;
type GroupName = string;
type DomainPattern = string;

export type ACLDefaultRules = DomainPattern[];
export type ACLGroupsRules = { [group: string]: string[]; };
export type ACLUsersRules = { [user: string]: string[]; };

export interface ACLConfiguration {
    default: ACLDefaultRules;
    groups: ACLGroupsRules;
    users: ACLUsersRules;
}

export interface SessionRedisOptions {
    host: string;
    port: number;
}

interface SessionCookieConfiguration {
    secret: string;
    expiration?: number;
    domain?: string;
    redis?: SessionRedisOptions;
}

export interface GmailNotifierConfiguration {
    username: string;
    password: string;
}

export interface FileSystemNotifierConfiguration {
    filename: string;
}

export interface NotifierConfiguration {
    gmail?: GmailNotifierConfiguration;
    filesystem?: FileSystemNotifierConfiguration;
}

export interface MongoStorageConfiguration {
    url: string;
}

export interface LocalStorageConfiguration {
    path?: string;
    in_memory?: boolean;
}

export interface StorageConfiguration {
    local?: LocalStorageConfiguration;
    mongo?: MongoStorageConfiguration;
}

export interface UserConfiguration {
    port?: number;
    logs_level?: string;
    ldap: LdapConfiguration;
    session: SessionCookieConfiguration;
    storage: StorageConfiguration;
    notifier: NotifierConfiguration;
    access_control?: ACLConfiguration;
}

export interface AppConfiguration {
    port: number;
    logs_level: string;
    ldap: LdapConfiguration;
    session: SessionCookieConfiguration;
    storage: StorageConfiguration;
    notifier: NotifierConfiguration;
    access_control?: ACLConfiguration;
}
