// root route" since the rest of routes will render inside of it
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import './app.scss';

export default function App() {
    return (
        <div className="app">
            <Header />
            <main className="app__content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
