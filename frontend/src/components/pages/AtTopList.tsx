import { cn } from "@/utils/clsx";

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
  return (
    <div>
        <h1 className="atTopList">at the top of the list</h1> 
    <div className="grid grid-cols-4 gap-3">
        {DataSet.map((data, index) => (
            <section className="h-[400px] relative">
                <img src={data.image} alt={data.text} className="h-full w-full" />
                <h1 className={cn("atTopList-text", data.text.length > 10 ? "ml-19.5 scale-x-105" : "ml-29")}>{data.text}</h1>
            </section>
        ))}
      
    </div>
    </div>
  )
}

export default AtTopList;
