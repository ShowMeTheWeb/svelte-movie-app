<script>
  import { fade } from 'svelte/transition';
  import Router, { location } from 'svelte-spa-router';
  import routes from '~/routes'
  // 디렉토리 내부에 index.js 파일을 가져올때는 생략 가능함.
  import Header from '~/components/Header.svelte';
  import Footer from '~/components/Footer.svelte';
</script>

<Header />
{#key $location}
  <div in:fade>
    <Router 
      {routes}
      restoreScrollState={true} />
  </div>
{/key}
<Footer />