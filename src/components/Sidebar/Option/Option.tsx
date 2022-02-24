import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import React from 'react'
import styled from 'styled-components';

interface IOptionProps {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    title: string;
}

const Option: React.FC<IOptionProps> = ({ Icon, title }) => {
    return (
        <OptionContainer>
            <Icon />
            {title}
        </OptionContainer>
    )
}

export default Option;

const OptionContainer = styled.div`

`;