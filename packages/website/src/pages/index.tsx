import { Toaster } from 'react-hot-toast'
import { gitmojis } from 'gitmojis'

import GitmojiList from 'src/components/GitmojiList'

const Home = () => (
  <>
    <main>
      <GitmojiList gitmojis={gitmojis} />
      <Toaster position="top-left" />
    </main>
  </>
)

export default Home
