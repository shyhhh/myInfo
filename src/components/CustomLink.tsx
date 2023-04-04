import { HoverLink } from './HoverLink'
interface CProps {
  path: string
  children: string
}

export const CustomLink: React.FC<CProps> = ({ path, children }) => {
  const handleLinkClick = (path: string) => {
    window.open(path)
  }
  return (
    <HoverLink onClick={() => handleLinkClick(path)} >
      {children}
    </HoverLink>
  )
}
