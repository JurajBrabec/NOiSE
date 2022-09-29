<script>
  import Sources from './lib/Sources.svelte';
  import Albums from './lib/Albums.svelte';
  import Mixes from './lib/Mixes.svelte';
  import Videos from './lib/Videos.svelte';
  import Footer from './lib/Footer.svelte';
</script>

<section>
  <h1 class="animation">NOiSEd World</h1>
  <h5>Welcome to my world.</h5>
  <p>
    This is a <b>collection</b> of my musical visions and perceptions from past
    two
    <b>decades</b> (2000-2022).
  </p>
  <Sources />
  <p>
    Click on one of the <b>provider</b> icons below any of the abums, videos or
    mixes, and a media player will open in <b>new window</b>... Enjoy 🙂
  </p>
  <p>
    And by the way; if you will like it, please consider leaving a <b>comment</b
    >...Thank you 🖤
  </p>
</section>
<main>
  <Albums />
  <Videos />
  <Mixes />
  <Footer />
</main>
