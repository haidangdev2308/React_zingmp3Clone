import icons from "./icons"

const { MdOutlineLibraryMusic, FaRegDotCircle, BiBarChartSquare } = icons

export const menuSidebar = [
    {
        path: '',
        text: 'Khám Phá',
        end: true,
        icon: <FaRegDotCircle size={24} /> ,
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icon: <BiBarChartSquare size={24} />,
    },
    {
        path: 'mymusic',
        text: 'Thư Viện',
        icon: <MdOutlineLibraryMusic size={24} />,
    },
]