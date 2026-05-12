import { useTranslation } from 'react-i18next'
import Icon from './Icon'

function IndustryCard({ id, icon }) {
  const { t } = useTranslation()
  return (
    <article className="industry-card">
      <span className="card-icon">
        <Icon name={icon} size={22} />
      </span>
      <span className="industry-tag">{t(`industries.items.${id}.tag`)}</span>
      <h3>{t(`industries.items.${id}.title`)}</h3>
      <p>{t(`industries.items.${id}.description`)}</p>
    </article>
  )
}

export default IndustryCard
