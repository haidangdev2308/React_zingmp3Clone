import icons from "./icons"

const { MdOutlineLibraryMusic } = icons

export const menuSidebar = [
    {
        path: '',
        text: 'Khám Phá',
        end: true,
        icon: <MdOutlineLibraryMusic size={24} /> ,
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icon: <MdOutlineLibraryMusic size={24} />,
    },
    {
        path: 'mymusic',
        text: 'Thư Viện',
        icon: <MdOutlineLibraryMusic size={24} />,
    },
]