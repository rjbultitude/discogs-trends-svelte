<script>
  import {GENRES} from '../../utils/constants.js';

  export let id;
  export let selectOptions;
  //export let changeCB;
</script>

<select id={id}>
  {#each selectOptions as selectOption}
    <option>{selectOption}</option>
  {/each}
</select>
