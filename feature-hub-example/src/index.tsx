import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  FeatureAppLoader,
  FeatureHubContextProvider,
} from "@feature-hub/react";

import { loadFederatedModule } from "@feature-hub/module-loader-federation";
import { createFeatureHub } from "@feature-hub/core";

const { featureAppManager } = createFeatureHub("acme:integrator", {
  moduleLoader: loadFederatedModule,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <div>This is featured hub</div>
    <FeatureHubContextProvider value={{ featureAppManager }}>
      {/* render Feature Apps here */}
      <FeatureAppLoader
        featureAppId="some-feature-app:main"
        src="http://localhost:1234/dist/featured-app.federated.js"
        moduleType="federated"
        onError={console.warn}
      >
        {({ error, featureAppNode, loading }) => {
          if (loading) return <div>loading featured app...</div>;
          if (!featureAppNode)
            return (
              <div>
                Failed to load featured app, make sure the federation file is
                being served
              </div>
            );
          return featureAppNode;
        }}
      </FeatureAppLoader>
    </FeatureHubContextProvider>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
