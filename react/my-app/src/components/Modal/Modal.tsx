import React from "react";
import * as S from "./styled"

const Modal: React.FC<any> = (props) => {
    const { children, toggleModal, isError} = props;

    return (
        <S.Wrapper onClick={() => toggleModal()}>
            <S.Inner isError={isError} onClick={(event: any) => event.stopPropagation()}>{children}</S.Inner>
        </S.Wrapper>
    )
};

export default Modal