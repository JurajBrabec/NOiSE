<script>
  import { sources } from '../stores.js';
</script>

<footer>
  <div class="centered">
    <div>(C) 2022 :: NOiSE</div>
    <div class="separator" />
    <div>Donate ::</div>
    {#each $sources.filter((s) => s.donation) as { icon, id, name, url }}
      <a target="_blank" href={url}>
        <img class="profile" src={icon} alt={id} title={`${id} / ${name}`} />
      </a>
    {/each}
  </div>
</footer>

<style>
  .centered {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 5px;
  }
  .centered div {
    white-space: nowrap;
  }
  .separator {
    width: 100%;
  }
</style>
