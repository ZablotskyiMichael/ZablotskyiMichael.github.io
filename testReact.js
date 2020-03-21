

const AppHeader = () => {
    return (
        <h1>My Todo List</h1>
    );
};

const SearchPanel = function () {
    return <input placeholder="search"/>;
};

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('reactDiv'));