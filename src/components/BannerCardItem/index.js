// Write your code here.
import './index.css'

const ResuableBanner = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard
  const boxContainer = `box ${className}`

  return (
    <li className={boxContainer}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="showMore" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default ResuableBanner
