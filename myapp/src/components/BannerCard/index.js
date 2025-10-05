import "./index.css"

const BannerCard = props => {
    const {bannerDetails} = props
    const {imgUtl, altText} = bannerDetails
    return(
        <img src={imgUtl} alt={altText} className="banner-img"/>
    )
}
export default BannerCard