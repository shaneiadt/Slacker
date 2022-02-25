import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import Option from './Option/Option';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Slacker HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            Shane O'Moore
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <Option Icon={InsertCommentIcon} title="Threads" />
      <Option Icon={InboxIcon} title="Mentions & Reactions" />
      <Option Icon={DraftsIcon} title="Saved Items" />
      <Option Icon={BookmarkBorderIcon} title="Channel Browser" />
      <Option Icon={PeopleAltIcon} title="People & User Groups" />
      <Option Icon={AppsIcon} title="Apps" />
      <Option Icon={FileCopyIcon} title="File Browser" />
      <Option Icon={ExpandLessIcon} title="Show Less" />
      <Option title="Nothing" />

    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: var(--slack-color-white);
  background-color: var(--slack-color-primary);
  flex: 0.3;
  border-top: 1px solid var(--slack-color-background);
  max-width: 260px;
  margin-top: 60px;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(--slack-color-background);
  padding: 13px;

  > .MuiSvgIcon-root {
    padding:8px;
    background-color: var(--slack-color-white);
    color: var(--slack-color-background);
    font-size:18px;
    border-radius: 999px;

  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    font-size: 13px;
    display: flex;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    color: green;
    margin-right: 2px;
    margin-top: 1px;
  }
`;