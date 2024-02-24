import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const [isStudy, setIsStudy] = useState(false);
    const [isChat, setIsChat] = useState(false);
    const [isScoreboard, setIsScoreboard] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const [isMore, setIsMore] = useState(false);



    const [iscurrentState, setIscurrentState] = useState('Home');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Home') {
            setIsHome(false);
        }
        if (iscurrentState !== 'Study') {
            setIsStudy(false);
        }
        if (iscurrentState !== 'Chat') {
            setIsChat(false);
        }
        if (iscurrentState !== 'Scoreboard') {
            setIsScoreboard(false);
        }
        if (iscurrentState !== 'Profile') {
            setIsProfile(false);
        }
        if (iscurrentState !== 'More') {
            setIsMore(false);
        }
     
    }, [
        history,
        iscurrentState,
        isHome,
        isStudy,
        isChat,
        isScoreboard,
        isProfile,
        isMore
    ]);

    const menuItems = [
        {
            label: "",
            isHeader: true,
        },
        {
            id: "home",
            label: "Home",
            icon: "ri-home-4-line",
            link: "/home",
            stateVariables: isHome,
            click: function (e) {
                e.preventDefault();
                setIsHome(!isHome);
                setIscurrentState('Home');
                updateIconSidebar(e);
            },
        },
        {
            id: "study",
            label: "Study",
            icon: "ri-book-open-line",
            link: "/exams",
            click: function (e) {
                e.preventDefault();
                setIsStudy(!isStudy);
                setIscurrentState('Study');
                updateIconSidebar(e);
            },
            stateVariables: isStudy,
        },
        {
            id: "chat",
            label: "Chat",
            icon: "ri-chat-1-line",
            link: "/chat",
            click: function (e) {
                e.preventDefault();
                setIsChat(!isChat);
                setIscurrentState('Chat');
                updateIconSidebar(e);
            },
            stateVariables: isChat,
        },
        {
            id: "score-board",
            label: "Score Board",
            icon: "bx bx-stats",
            link: "/score-board",
            click: function (e) {
                e.preventDefault();
                setIsChat(!isScoreboard);
                setIscurrentState('Scoreboard');
                updateIconSidebar(e);
            },
            stateVariables: isScoreboard,
        },
        {
            id: "profile",
            label: "Profile",
            icon: "ri-user-3-line",
            link: "/profile",
            click: function (e) {
                e.preventDefault();
                setIsChat(!isProfile);
                setIscurrentState('Profile');
                updateIconSidebar(e);
            },
            stateVariables: isProfile,
        },
        {
            id: "more",
            label: "More",
            icon: "ri-apps-2-line",
            link: "/more",
            stateVariables: isMore,
            click: function (e) {
                e.preventDefault();
                setIsMore(!isMore);
                setIscurrentState('More');
                updateIconSidebar(e);
            },
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;