import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { setDoc, doc } from 'firebase/firestore';
import React from 'react'
import styled from 'styled-components';
import { db } from '../../../firebase';

interface IOptionProps {
    title: string;
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    id?: string;
    addChannelOption?: boolean;
}

const Option: React.FC<IOptionProps> = ({ Icon, title, addChannelOption = false }) => {
    const addChannel = async () => {
        const name = prompt('Please enter the channel name');

        if (name) {
            await setDoc(doc(db, "rooms", name), {
                name
            });
        }
    }

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