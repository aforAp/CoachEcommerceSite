import { cn } from "@/utils/clsx";
import { useNavigate } from "react-router-dom";
const DataSet = [
    {
        image:'https://cms.coach.com/i/coach/20261118-hp3-card1-desktop-v3?&w=960&sm=aspect&aspect=708:920&fmt=webp&$qlt_high$',
        text: 'shoulder Bags',
        route: '/shop/women/handbags/shoulder-bags'
    },
    {
        image: 'https://cms.coach.com/i/coach/20261118-hp3-card2-desktop?&w=960&sm=aspect&aspect=708:920&fmt=webp&$qlt_high$',
        text: "Women's",
        route: '/shop/women/view-all'
    },
    {
        image: 'https://cms.coach.com/i/coach/20261118-hp3-card3-desktop?&w=960&sm=aspect&aspect=708:920&fmt=webp&$qlt_high$',
        text: 'Wallets',
        route: 'shop/women/wallets-wristlets/view-all'
    },
    {
        image: 'https://cms.coach.com/i/coach/20261118-hp3-card4-desktop?&w=960&sm=aspect&aspect=708:920&fmt=webp&$qlt_high$',
        text: 'Gifts',
        route: 'shop/gifts/view-all'
    }
];

const AtTopList = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1 className="atTopList">at the top of the list</h1> 
    <div className="grid grid-cols-2 lg:gap-2 gap-1 lg:grid-cols-4">
        {DataSet.map((data, index) => (
            <section id={index} className="h-[400px] relative" onClick={() => navigate(data.route)}>
                <img src={data.image} alt={data.text} className="h-full w-full" />
                <h1
                    className={cn(
                        "atTopList-text",
                        data.text.length > 10
                            ? "left-19.5 sm:left-14.5 scale-x-105"
                            : "ml-24 lg:ml-32",
                    )}
                >
                    {data.text}
                </h1>
            </section>
        ))}
      
    </div>
    </div>
  )
}

export default AtTopList;
