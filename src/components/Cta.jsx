import Button from "./Button";
import Section from "./Section";

const Cta = () => {
  return (
    <Section crosses>
      <div className="container text-center">
        <h2 className="h2 mb-6">
          You Don’t Need More Tools. You Need Control.
        </h2>
        <p className="body-1 max-w-3xl mx-auto mb-10 text-n-4">
          D360 Flux brings everything together — so your team can move faster,
          smarter, and with confidence.
        </p>
        <Button href="#pricing" white>
          Start Your Engineering Evolution
        </Button>
      </div>
    </Section>
  );
};

export default Cta;
