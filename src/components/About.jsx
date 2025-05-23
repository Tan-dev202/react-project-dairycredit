import aboutImg from "../assets/about-image.png";
export default function About() {
  return (
    <section className="about container my-5">
      <div>
        <h4 className="mb-3 text-center">About DairyCredit</h4>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10 m-4">
          <p>
            <strong>DairyCredit</strong> revolutionizes financial access for
            dairy farmers through data-driven credit assessment. We understand
            that traditional credit scoring often fails to recognize the true
            financial potential of dairy operations, especially for small-scale
            farmers without extensive credit histories or collateral.
          </p>
          <p>
            Our platform bridges this gap by collecting and analyzing relevant
            farm data—from milk production metrics to input purchases and asset
            values—creating a comprehensive financial profile that accurately
            reflects a farmer's creditworthiness. This alternative approach
            opens doors to financing that might otherwise remain closed,
            empowering farmers to grow their operations sustainably.
          </p>
          <p>
            Founded by agricultural finance experts and technology innovators,{" "}
            <strong>DairyCredit</strong> was born from firsthand observation of
            the challenges facing dairy farmers across the value chain. We're
            committed to developing tools that not only assess credit risk more
            effectively but also help farmers improve their financial management
            practices and productivity.
          </p>
          <p>
            By partnering with financial institutions and agricultural
            stakeholders, we're creating an ecosystem where data-informed
            lending decisions benefit everyone: farmers gain access to
            appropriately structured credit, lenders reduce risk, and the dairy
            sector thrives through increased investment and growth.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center my-5">
        <img src={aboutImg} alt="about-us" className="img-fluid"></img>
      </div>
    </section>
  );
}
