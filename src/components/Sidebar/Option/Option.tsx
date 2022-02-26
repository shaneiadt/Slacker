import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import React from 'react'
import styled from 'styled-components';

interface IOptionProps {
    title: string;
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    addChannelOption?: boolean;
}

const Option: React.FC<IOptionProps> = ({ Icon, title, addChannelOption = false }) => {
    const addChannel = () => { }

    const selectChannel = () => { }

    return (
        <OptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon ? (
                <>
                    <Icon fontSize='small' style={{ padding: 10 }} />
                    {title}
                </>
            ) : (
                <OptionChannel>
                    <span>#</span> {title}
                </OptionChannel>
            )}
        </OptionContainer>
    )
}

export default Option;

const OptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: var(--slack-color-secondary);
    }

    > h3 {
        font-weight: 500;

    }
    
    > h3 > span {
        padding: 15px;
        
    }
`;

const OptionChannel = styled.div`

`;