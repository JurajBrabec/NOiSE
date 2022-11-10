<script>
  import { sources } from '../stores.js';
  import avatar from '../assets/avatar.png';
</script>

<section>
  <div class="container">
    <article class="card card-large">
      <img class="avatar" src={avatar} alt="Avatar" />
      <div>
        {#each $sources.filter((s) => !s.donation) as { icon, id, name, url }}
          <a target="_blank" rel="noreferrer" href={url}>
            <img
              class="profile"
              src={icon}
              alt={id}
              title={`${id} / ${name}`}
            />
          </a>
        {/each}
      </div>
    </article>
  </div>
</section>
