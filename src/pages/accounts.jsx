const { useSecurePage } = require("@/lib/useSecurePage");

const Accounts = () => {
  useSecurePage("/accounts");

  return <div>Accounts</div>;
};

export default Accounts;