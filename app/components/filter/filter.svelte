<script>
  import {getDiscogsData} from '../../utils/getdata.js';
  import {filterData, getCassettes, getVinyl, getCD, getDemand} from '../../utils/filter-funcs.js';
  import Label from '../label/label.svelte';
  import Select from '../select/select.svelte';
  import * as appConstants from '../../utils/constants.js';

  let originalData = getDiscogsData((data) => {
    originalData = data;
  });

  function updateFilter(formVals) {
    if (formVals.format === appConstants.CASS_STRING) {
      return filterData(originalData, formVals.genre, getCassettes, getDemand);
    } else if (formVals.format === appConstants.VINYL_STRING) {
      return filterData(originalData, formVals.genre, getVinyl, getDemand);
    } else if (formVals.format === appConstants.CD_STRING) {
      return filterData(originalData, formVals.genre, getCD, getDemand);
    } else {
      return [];
    }
  }

  function changeGenre(e) {
    const result = updateFilter({ genre: e.target.value });
    console.log('result', result);
  }
  function changeFormat(e) {
    const result = updateFilter({ format: e.target.value });
    console.log('result', result);
  }
</script>

<Label text={appConstants.GENRES_STR} forVal={appConstants.GENRES_STR} />
<Select selectOptions={appConstants.GENRES} changeCB={changeGenre} id={appConstants.GENRES_STR} />

<Label text={appConstants.FORMATS_STR} forVal={appConstants.FORMATS_STR} />
<Select selectOptions={appConstants.FORMATS} changeCB={changeFormat} id={appConstants.FORMATS_STR} />
