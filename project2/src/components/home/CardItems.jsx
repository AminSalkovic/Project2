import * as MdIcons from 'react-icons/md'
import * as HiIcons from 'react-icons/hi'
import * as BiIcons from 'react-icons/bi'
import * as CgIcons from 'react-icons/cg'


const CardItems=[
   {
    id:'icon1',
    path:'/meetings',
    number:'23',
    title:'Meetings',
    icon: <MdIcons.MdPeopleOutline/>
   },
   {
    id:'icon2',
    path:'/items',
    number:'11',
    title:'Items',
    icon: <HiIcons.HiOutlineDocumentDuplicate/>
   },
   {
    id:'icon3',
    path:'/actions',
    number:'15',
    title:'Actions',
    icon: <BiIcons.BiCheckCircle/>
   },
   {
    id:'icon4',
    path:'/reminders',
    number:'9',
    title:'Reminders',
    icon:<BiIcons.BiCalendar/>
   },
   {
      id:'icon5',
      path:'/notes',
      number:'18',
      title:'Notes',
      icon:<CgIcons.CgNotes/>
   },
]
export default CardItems