import react from 'react';
import reactDOM from 'react-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));