import { TbHome2 } from "react-icons/tb";
import { IoIosSearch,IoIosNotificationsOutline } from "react-icons/io";
// import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiViewList,CiCircleMore } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";

export const List = [{
    icon: <TbHome2/>,
    name:'Home'
},
{
icon: <IoIosSearch/>,
name:'Explore'
 },
{
icon: <IoIosNotificationsOutline/>,
name:'Notification'
},
{
icon: <FaRegEnvelope/>,
    name: 'Message'
},
{
icon: <CiViewList/>,
name:'Lists'
},
{
icon: <FaRegBookmark/>,
name:'Bookmarks'
},
{
icon: <IoPeopleOutline/>,
name:'Communities'
},
{
icon: <MdOutlinePersonOutline/>,
name:'Profile'
},
{
icon: <CiCircleMore/>,
name:'More'
}
]