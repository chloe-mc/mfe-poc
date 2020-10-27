import React from 'react';
import loadApp from 'docs_svelte/loadApp';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';

const Docs = () => {
  const [projectName, setProjectName] = React.useState('San Antonio Hospital');

  const mountEl = React.useRef();

  React.useEffect(() => {
    if (mountEl.current.innerHTML.length === 0) {
      loadApp('docs_svelte', projectName);
    }
  });

  const handleChange = (e) => {
    setProjectName(e.target.value);
    const event = new CustomEvent('change-name', {
      detail: {
        name: e.target.value,
      },
      bubbles: true,
      cancelable: true,
      composed: true, // makes the event jump shadow DOM boundary
    });
    let source = e.target || e.srcElement;
    source.dispatchEvent(event);
  };

  return (
    <>
      <form noValidate autoComplete="off" style={{ margin: 20, width: '100%' }}>
        <TextField
          id="standard-basic"
          label="Text Field in React Container"
          value={projectName}
          onChange={(e) => handleChange(e)}
          style={{ width: 300 }}
        />
      </form>
      <Divider />
      <div id="docs_svelte" ref={mountEl} style={{ textAlign: 'center', flex: 1 }} />
    </>
  );
};

export default Docs;
