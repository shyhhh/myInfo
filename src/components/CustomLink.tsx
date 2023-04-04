import { HoverLink } from './HoverLink'
interface CProps {
  path: string
  children: string
  className?: string
}

export const CustomLink: React.FC<CProps> = ({ path, children, className }) => {
  const handleLinkClick = (path: string) => {
    window.open(path)
  }
  return (
    <HoverLink onClick={() => handleLinkClick(path)} className={className}>
      {children}
    </HoverLink>
  )
}
