<script>
  import { sources, albums } from '../stores.js';
</script>

<section id="albums">
  <h2>{$albums.length} Albums</h2>
  <div class="container">
    {#each $albums as { icon, name, songs, time, year }, index}
      <article class="card card-normal">
        <h3>{name}</h3>
        <h4>({year})</h4>
        <img class="cover" src={icon} alt={name} title={`${name} (${year})`} />
        <br />
        {songs} songs ({time} minutes)
        <div>
          {#each $sources.filter(({ albums }) => albums && albums[index]) as { albumPrefix, albums, icon, id }}
            <a
              target="_blank"
              rel="noreferrer"
              href={albumPrefix + albums[index].url}
            >
              <img
                class="profile"
                src={icon}
                alt={id}
                title={`Play album on ${id}`}
              />
            </a>
          {/each}
        </div>
      </article>
    {/each}
  </div>
</section>
