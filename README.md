# DairyCredit: Alternative Credit Scoring Platform for Dairy Farmers

<ins>**Project Overview**

DairyCredit is a web application that helps assess credit scores for dairy farmers based on their financial data. It addresses credit risk assessment challenge due to the lack of farmer credit history and collateral. By developing an alternative credit scoring system lenders will assess the credit score of dairy farmers using non-traditional data points.

<ins>**Core Features (MVPs)**

- Farmer financial data management system
- Real-time credit score calculation and grading
- Visual representation of top performers via pie chart
- Client-side routing for seamless navigation
- Contact form for user inquiries
- Dark/light mode toggle for enhanced user experience

<ins>**Credit Score Calculation**

- Cost to Sales Ratio: 
  >(Monthly Costs / Monthly Sales) * 100
- Liabilities to Assets Ratio: 
  >(Current Liabilities / Farm Asset Value) * 100
- Average Ratio: 
  >(Cost-to-Sales Ratio + Liabilities-to-Assets Ratio) / 2
- Credit Score Grading:
  + Average Ratio < 49: High Score (100 - Average Ratio)
  + Average Ratio 50-69: Medium Score (100 - Average Ratio)
  + Average Ratio 70+: >Low Score (100 - Average Ratio)

<ins>**Functionalities**

- [x] Add and edit farmer records
- [x] Search farmers by name or location
- [x] Toggle dark/light mode
- [x] Real-time credit score calculation
- [x] Visual analytics of top performers
- [x] Financial literacy content via FAQs
- [x] User feedback submission system

[GitHub Pages](https://tan-dev202.github.io/react-project-dairycredit/)

[Netlify](https://tandev-react-project-dairycredit.netlify.app/)

# How to Run the Application

1. Clone this repository
2. Install dependencies: **npm install**
3. Start the JSON server: **npx json-server db.json --port 4000**
4. Start the React app: **npm start**

## Author

Enock Tangus