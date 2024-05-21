import FeedbackForm from './FeedbackForm'
import Logo from './Logo'
import PageHeading from './PageHeading'
import Pattern from './Pattern'

const Header = () => {
  return (
    <header className='header'>
        <Pattern />
        <Logo />
        <PageHeading />
        <FeedbackForm />
    </header>
  )
}

export default Header