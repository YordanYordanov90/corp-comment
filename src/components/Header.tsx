import FeedbackForm from './FeedbackForm'
import Logo from './Logo'
import PageHeading from './PageHeading'
import Pattern from './Pattern'

type HeaderProps = {
  handleItemList: (text: string) => void
}

const Header = ({handleItemList}:HeaderProps) => {
  return (
    <header className='header'>
        <Pattern />
        <Logo />
        <PageHeading />
        <FeedbackForm handleItemList={handleItemList} />
    </header>
  )
}

export default Header