// @ts-ignore
import React from "react";

interface IMessage {
  errorText: string;
  errorCode: number;
  needAdditional:boolean;
}

const Message: React.FC<IMessage> = props => {
  const { errorText, errorCode, needAdditional } = props;
  let additionalMessage;
  if(errorCode == 400){
      additionalMessage = "Возможно вы не заполнили необходимые поля или сделали это неправильно"
  } else if(errorCode == 401) {
      additionalMessage = "Вы не авторизованны"
  }
  return (
    <div className="error-message">
      Ошибка {errorCode}
      <br /><br />
      {errorText}
      <br /><br />
        {needAdditional && additionalMessage}
    </div>
  );
};

export default Message;
