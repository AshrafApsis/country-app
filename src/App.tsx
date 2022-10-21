
import './App.css';

import CountriesList from './components/Country/CountriesList';

import Header from './components/Header/header.component';
import Search from './components/Search/Search';
import Container from './core/Container';

function App() {
  return (
    <>
      <Header ></Header>
      <Container>
        <Search></Search>
        <CountriesList></CountriesList>
      </Container>
    </>
   
  );
}

export default App;
