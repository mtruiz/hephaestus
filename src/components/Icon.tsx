import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  findIconDefinition,
  IconDefinition,
  IconLookup,
  IconName
} from '@fortawesome/fontawesome-svg-core'

type Props = {
  name: IconName
}

export const Icon: React.FC<Props> = ({name}) => {
  const iconLookup: IconLookup = { prefix: 'fas', iconName: name }
  const iconDefinition: IconDefinition = findIconDefinition(iconLookup)

  return (
    <FontAwesomeIcon icon={iconDefinition} />
  )
}
