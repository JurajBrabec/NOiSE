<script>
  // @ts-ignore
  import { MetaTags } from 'svelte-meta-tags';
  import Sources from './lib/Sources.svelte';
  import Albums from './lib/Albums.svelte';
  import Mixes from './lib/Mixes.svelte';
  import Videos from './lib/Videos.svelte';
  import Footer from './lib/Footer.svelte';

  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(e.target.dataset.id);
    window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  };
</script>

<MetaTags
  title="NOiSEd World"
  description="Welcome to my world"
  openGraph={{
    title: 'NOiSEd World',
    description: 'Welcome to my world',
    images: [
      {
        url: '/avatar.png',
        width: 375,
        height: 400,
        alt: 'NOiSE',
      },
    ],
  }}
/>
<section>
  <h1 class="animation">NOiSEd World</h1>
  <h5>Welcome to my world.</h5>
  <p>
    This is a <b>collection</b> of my musical visions and perceptions from past
    <b>two decades</b> (2000-2022).
  </p>
  <Sources />
  <p>
    Click on one of the provider icons below any of the
    <b class="clickable" data-id="albums" on:click={handleClick}>albums</b>,
    <b class="clickable" data-id="videos" on:click={handleClick}>videos</b> or
    <b class="clickable" data-id="mixes" on:click={handleClick}>mixes</b>, and a
    media player will open in new window... <b>Enjoy</b> 🙂
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
