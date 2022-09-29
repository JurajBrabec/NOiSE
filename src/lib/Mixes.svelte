<script>
  import { sources, mixes } from '../stores.js';
</script>

<section id="mixes">
  <h2>{$mixes.length} Mixes</h2>
  <div class="container">
    {#each $mixes as { genre, icon, name, time, year }, index}
      <article class="card card-small">
        <h3>{name}</h3>
        <h4>({year})</h4>
        <img class="cover" src={icon} alt={name} title={`${name} (${year})`} />
        <br />
        {genre} ({time} minutes)
        <div>
          {#each $sources.filter(({ mixes }) => mixes && mixes[index]) as { mixPrefix, mixes, icon, id }}
            <a target="_blank" href={mixPrefix + mixes[index].url}>
              <img
                class="profile"
                src={icon}
                alt={id}
                title={`Play mix on ${id}`}
              />
            </a>
          {/each}
        </div>
      </article>
    {/each}
  </div>
</section>
