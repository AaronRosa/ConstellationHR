import { FeatureProp } from "../featuresLayout";

function Feature({ feature }: { feature: FeatureProp }) {
  return (
    <>
      <h4>{feature.title}</h4>
      <p>{feature.description}</p>
    </>
  );
}

export default Feature;
