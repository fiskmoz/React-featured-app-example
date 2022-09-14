import { FeatureAppDefinition } from "@feature-hub/core";
import { ReactFeatureApp } from "@feature-hub/react";
import App from "./App";

const featureAppModule: FeatureAppDefinition<ReactFeatureApp> = {
  create: () => ({
    featureAppId: "some-feature-app:main",
    featureAppName: "__feature_hub_feature_app_module_container__",
    render: () => <App />,
  }),
};

export default featureAppModule;
