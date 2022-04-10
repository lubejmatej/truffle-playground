import * as React from "../_snowpack/pkg/react.js";
const useEffectOnce = (effect) => {
  React.useEffect(effect, []);
};
export default useEffectOnce;
