import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container as HTMLElement);

// Initial render: Render an element to the root.
root.render(<App />);