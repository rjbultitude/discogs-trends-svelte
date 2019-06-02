<script>
  import {GENRES} from '../../utils/constants.js';

  export let id;
  export let selectOptions;
  export let changeCB;
</script>

<select id={id} on:change={changeCB}>
  {#each selectOptions as selectOption}
    <option>{selectOption}</option>
  {/each}
</select>
