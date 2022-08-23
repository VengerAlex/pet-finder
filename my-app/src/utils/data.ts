interface IItem {
    icon: string,
    title: string,
    to: string
}

export const items: IItem[] = [
    {icon: "AiOutlineHome", title: "Home", to: "/"},
    {icon: "BiNews", title: "News", to: "/news"},
    {icon: "MdHistoryEdu", title: "About", to: "/about-us"},
]