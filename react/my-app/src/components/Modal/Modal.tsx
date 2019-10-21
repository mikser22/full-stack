import React from "react";
import * as S from "./styled"

const Modal: React.FC<any> = (props) => {
    const { children, toggleModal} = props;

    return (
        <S.Wrapper onClick={() => toggleModal()}>
            <S.Inner onClick={(event: any) => event.stopPropagation()}>{children}</S.Inner>
        </S.Wrapper>
    )
};

export default Modal