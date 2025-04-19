export default function Faqs() {
  return (
    <section class="faqs container my-5" id="faqs">
      <div>
        <h4 className="text-center mb-3">Frequently Asked Questions (FAQs)</h4>
      </div>
      <div class="accordion">
        <div class="accordion-item">
          <h6 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseOne"
            >
              How will lenders interact with the DairyCredit App?
            </button>
          </h6>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              The DairyCredit App helps lenders assess the creditworthiness of
              dairy farmers by evaluating their farm records. It tackles the
              challenge of credit risk assessment, which is often hindered by
              the absence of credit history and collateral. By utilizing an
              alternative credit scoring system, the app enables lenders to
              assess farmers' credit scores using non-traditional data points.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h6 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              How does DairyCredit calculate the credit scores?
            </button>
          </h6>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              The app takes the farmer’s cost-to-sales and liabilities-to-assets
              ratios and uses the average value to estimate the credit scores.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h6 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              What is the first step to achieve increased dairy production?
            </button>
          </h6>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              The farmers need to develop necessary skills for managing finances
              and dairy farming. Proper prioritizing and avoiding to buy
              materials without a plan are the key steps of managing dairy
              animals.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h6 class="accordion-header" id="panelsStayOpen-headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              What are the eligibility requirements for dairy financing?
            </button>
          </h6>
          <div
            id="panelsStayOpen-collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div class="accordion-body">
              <ul>
                <li>
                  Individual borrowers should have experience in dairy farming
                  which should be an economically viable activity in their
                  region.
                </li>
                <li>
                  They should also have space/accommodation for the farm
                  animals.
                </li>
                <li>
                  The applicants should have arrangements for growing or storage
                  of feeds, concentrates and fodder.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
