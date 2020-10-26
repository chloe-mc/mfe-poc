import Button from "./Button";
import React from "react";

const Page = React.lazy(() => import("container/Page"));

function App() {
  return (
    <React.Suspense fallback={null}>
      <Page title="Styled Components App">
        <Button>&#128133; Test Button</Button>
      </Page>
    </React.Suspense>
  );
}

export default App;
