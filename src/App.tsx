import { Outlet } from 'react-router-dom';
import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
	typography: {
		fontFamily: ['Noto Sans KR', 'sans-serif'].join(','),
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<Outlet />
			</div>
		</ThemeProvider>
	);
}

export default App;
