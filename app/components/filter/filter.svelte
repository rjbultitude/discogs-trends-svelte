// filter.svelte
<script>
  import {getDiscogsData} from '../../utils/getdata.js';
  import {filterData, getCassettes, getVinyl, getCD, getDemand} from '../../utils/filter-funcs.js';
  import Label from '../label/label.svelte';
  import Select from '../select/select.svelte';
  import * as appConstants from '../../utils/constants.js';

  function updateFilter() {
    console.log('this.state.format', state.format);
    console.log('state.genre', state.genre);
    if (state.format === appConstants.CASS_STRING) {
      return filterData(state.originalData, state.genre, getCassettes, getDemand);
    } else if (state.format === appConstants.VINYL_STRING) {
      return filterData(state.originalData, state.genre, getVinyl, getDemand);
    } else if (state.format === appConstants.CD_STRING) {
      return filterData(state.originalData, state.genre, getCD, getDemand);
    } else {
      return [];
    }
  }

  function change() {
    let newData = updateFilter();
    console.log('newData', newData);
    setState({discogsData: newData});
  }

  function changeGenre(e) {
    setState({'genre': e.target.value}, () => {
      console.log('state', state);
      change();
    });
  }
</script>

// Genre
<Label text={appConstants.GENRES_STR} forVal={appConstants.GENRES_STR} />
<Select selectOptions={appConstants.GENRES} changeCB={changeGenre} id={appConstants.GENRES_STR} />

// Format
<Label text={appConstants.FORMATS_STR} forVal={appConstants.FORMATS_STR} />
