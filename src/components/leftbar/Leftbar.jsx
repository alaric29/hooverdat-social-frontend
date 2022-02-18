import React from "react";
import "./leftbar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupIcon from "@mui/icons-material/Group";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeedIcon className="leftbarListIcon" />
            Feed
          </li>
          <li className="leftbarListItem">
            <ChatIcon className="leftbarListIcon" />
            Chats
          </li>
          <li className="leftbarListItem">
            <OndemandVideoIcon className="leftbarListIcon" />
            Videos
          </li>
          <li className="leftbarListItem">
            <GroupIcon className="leftbarListIcon" />
            Groups
          </li>
          <li className="leftbarListItem">
            <BookmarksIcon className="leftbarListIcon" />
            Bookmarks
          </li>
          <li className="leftbarListItem">
            <HelpOutlineIcon className="leftbarListIcon" />
            Questions
          </li>
          <li className="leftbarListItem">
            <WorkOutlineIcon className="leftbarListIcon" />
            Jobs
          </li>
          <li className="leftbarListItem">
            <EventIcon className="leftbarListIcon" />
            Events
          </li>
          <li className="leftbarListItem">
            <SchoolIcon className="leftbarListIcon" />
            Courses
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
