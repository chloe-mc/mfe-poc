<script>
  export let projectName;

  window.addEventListener('change-name', (e) => {
    console.log(e);
    if (typeof e.detail !== 'undefined') {
      projectName = e.detail.name;
    }
  });
</script>

<style>
  h1 {
    color: black;
  }
</style>

<h1>SVELTE APP</h1>
<h4>Using events to communicate between <code>container</code> and <code>docs-svelte</code>.</h4>
<h4>Project: {projectName}</h4>
