import '../../styles/components/cards.css'

interface FacilityCardProps {
  image: string
  name: string
  description: string
}

const FacilityCard = ({ image, name, description }: FacilityCardProps) => (
  <div className="facility-card hover-scale-img">
    <img src={image} alt={name} className="facility-card__image" loading="lazy" />
    <div className="facility-card__overlay">
      <h3 className="facility-card__name">{name}</h3>
      <p className="facility-card__desc">{description}</p>
    </div>
  </div>
)

export default FacilityCard
