import { Link } from 'react-router-dom'

interface IProps {
  mailto: string
  label: string
}

export const ButtonMailto: React.FC<IProps> = ({ mailto, label }) => {
  return (
    <Link
      to='#'
      onClick={(e) => {
        window.location.href = mailto
        e.preventDefault()
      }}
    >
      {label}
    </Link>
  )
}
