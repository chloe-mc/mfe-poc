import App from './App.svelte';

const loadApp = (id, projectName) => {
  return new App({
    target: document.querySelector(`#${id}`),
    props: { projectName },
  });
};

export default loadApp;
