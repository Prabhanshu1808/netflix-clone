import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./featureInfo.css"

export default function FeatureInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featureTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-11.5 <ArrowDownward className="featuredIcon negative"/> </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featureTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,615</span>
                <span className="featuredMoneyRate">-1.5 <ArrowDownward className="featuredIcon negative"/> </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featureTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1,445</span>
                <span className="featuredMoneyRate">+4.5 <ArrowUpward className="featuredIcon"/> </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}
