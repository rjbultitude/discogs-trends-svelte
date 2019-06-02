// filter.svelte
<script>
  import {getDiscogsData} from '../../utils/getdata.js';
  import {filterData, getCassettes, getVinyl, getCD, getDemand} from '../../utils/filter-funcs.js';
  import Label from '../label/label.svelte';
  import Select from '../select/select.svelte';
  import * as appConstants from '../../utils/constants.js';
</script>

<Label text={appConstants.GENRES_STR} forVal={appConstants.GENRES_STR} />
<Select selectOptions={appConstants.GENRES} id={appConstants.GENRES_STR} />
