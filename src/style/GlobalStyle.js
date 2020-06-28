import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html, body { height: 100%; }
	body { 
		margin: 0 auto; 
		background-color: #f5f5f5;
	}

	#root {
  	display: flex;
		justify-content: center;
		flex-direction: column;
	}

	* { box-sizing: border-box; }

	p { margin:0px; }

	button { cursor: pointer; }

	button:focus { outline: 0; }
`;

export default GlobalStyle;
