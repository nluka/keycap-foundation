export interface IServerResponseDataError {
  errors: string[];
}

export interface IServerResponseDataUserSignInSuccess {
  id: string;
  name: string;
  token: string;
}

export interface IServerResponseDataUserCreationSuccess
  extends IServerResponseDataUserSignInSuccess {}
