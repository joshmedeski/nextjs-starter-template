import { NextPage } from '~/page'

const LandingPage: NextPage = () => {
  return (
    <div className="prose mx-auto">
      <h1 className="text-center">Landing Page</h1>

      <p>
        This is a sample landing page example. Sometimes you want to hide the
        navigation and for the user into a single sales or promotion page.
      </p>

      <ul>
        <li>Promote a single item</li>
        <li>Force a sales flow</li>
      </ul>
    </div>
  )
}

LandingPage.layout = 'landing'

export default LandingPage
