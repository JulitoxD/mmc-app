// Generated by https://quicktype.io
export interface IPostTransactionResponse {
  detail:  string;
  amount:  number;
  user:    IUser;
  id:      number;
  created: string;
  updated: string;
}

export interface IUser {
  id:       number;
  username: string;
  created:  string;
  updated:  string;
}
