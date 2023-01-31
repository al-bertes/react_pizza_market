import ContentLoader from "react-content-loader"

const PizzaBlock = (props) => (
  <ContentLoader 
    speed={4}
    width={300}
    height={410}
    viewBox="0 0 300 410"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="110" cy="99" r="99" /> 
    <rect x="10" y="218" rx="0" ry="0" width="197" height="22" /> 
    <rect x="11" y="254" rx="0" ry="0" width="123" height="69" /> 
    <rect x="145" y="255" rx="0" ry="0" width="63" height="20" /> 
    <rect x="148" y="286" rx="0" ry="0" width="57" height="37" />
  </ContentLoader>
)

export default PizzaBlock