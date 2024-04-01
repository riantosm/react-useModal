export interface IGlobalReduxState {
  modal: IModal;
}

export interface IModal {
  isShow?: boolean;
  content?: any;
}
