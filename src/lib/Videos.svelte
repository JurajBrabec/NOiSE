<script>
  import { sources, videos } from '../stores.js';
</script>

<section id="videos">
  <h2>{$videos.length} Videos</h2>
  <div class="container">
    {#each $videos as { icon, name, time, year }, index}
      <article class="card card-small">
        <h3>{name}</h3>
        <h4>({year})</h4>
        <img class="cover" src={icon} alt={name} title={`${name} (${year})`} />
        <br />
        {time} minutes
        <div>
          {#each $sources.filter(({ videos }) => videos && videos[index]) as { videoPrefix, videos, icon, id }}
            <a target="_blank" href={videoPrefix + videos[index].url}>
              <img
                class="profile"
                src={icon}
                alt={id}
                title={`Watch video on ${id}`}
              />
            </a>
          {/each}
        </div>
      </article>
    {/each}
  </div>
</section>
